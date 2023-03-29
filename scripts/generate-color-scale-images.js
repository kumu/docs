#!/usr/bin/env node

/**
 * This script generates SVG color scale images into the images/colors
 * directory, so that they can be used on the colors reference page.
 *
 * Call it with one argument, which is a JSON object where the keys are the
 * names of the color scales and the values are arrays of hex colors.
 *
 * ./scripts/generate-color-scale-images.js '{"bujumbra": ["#BE420E","#BE6D0E","#6B4F2E"]}'
 *
 * Will create:
 *
 * ./images/colors/bujumbra.svg
 */

let fs = require("fs/promises");
let path = require("path");

let colorImagesDir = path.join(__dirname, "../images/colors");

async function main(colorScales) {
  await fs.rm(colorImagesDir, { recursive: true, force: true });
  await fs.mkdir(colorImagesDir, { recursive: true });
  for (let name in colorScales) {
    let colors = colorScales[name];
    let swatchWidth = 50;
    let swatchHeight = 30;
    let swatchStep = swatchWidth;

    function createSwatch(color, index) {
      return `<rect fill="${color}" x="${index * swatchStep}" y="0" width="${swatchWidth}" height="${swatchHeight}"></rect>`;
    }

    let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${swatchStep * colors.length}" height="${swatchHeight}">
      ${colors.map(createSwatch).join("\n")}
    </svg>`;

    fs.writeFile(path.join(colorImagesDir, `${name.toLowerCase()}.svg`), svg);
  }
}

let colorScales = JSON.parse(process.argv[2]);
main(colorScales);
