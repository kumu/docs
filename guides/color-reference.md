# Color reference

Below are details on the different color palettes and scales that Kumu supports. Use these with the [Color by](decorate.md#color-by) tool in the Basic Editor, or use them in the [Advanced Editor](decorate.md#decorate-in-the-advanced-editor) with the `categorize()` and `scale()` functions.

## Named color scales

Kumu has built-in support for a number of named color scales, including all [ColorBrewer](http://bl.ocks.org/mbostock/5577023) scales.

### Sequential and diverging

Both sequential and diverging color palettes are great when you are trying to show quantitative data or data that has a meaningful order.

| YlGn      | <img src="../images/colors/ylgn.svg" alt="YlGn" data-size="line">     |
| YlGnBu    | <img src="../images/colors/ylgnbu.svg" alt="YlGnBu" data-size="line"> |
| GnBu      | <img src="../images/colors/gnbu.svg" alt="GnBu" data-size="line">|
| BuGn      | <img src="../images/colors/bugn.svg" alt="BuGn" data-size="line">|
| PuBuGn    | <img src="../images/colors/pubugn.svg" alt="PuBuGn" data-size="line">|
| PuBu      | <img src="../images/colors/pubu.svg" alt="PuBu" data-size="line">|
| BuPu      | <img src="../images/colors/bupu.svg" alt="BuPu" data-size="line">|
| RdPu      | <img src="../images/colors/rdpu.svg" alt="RdPu" data-size="line">|
| PuRd      | <img src="../images/colors/purd.svg" alt="PuRd" data-size="line">|
| OrRd      | <img src="../images/colors/orrd.svg" alt="OrRd" data-size="line">|
| YlOrRd    | <img src="../images/colors/ylorrd.svg" alt="YlOrRd" data-size="line">|
| YlOrBr    | <img src="../images/colors/ylorbr.svg" alt="YlOrBr" data-size="line">|
| Purples   | <img src="../images/colors/purples.svg" alt="Purples" data-size="line">|
| Blues     | <img src="../images/colors/blues.svg" alt="Blues" data-size="line">|
| Greens    | <img src="../images/colors/greens.svg" alt="Greens" data-size="line">|
| Oranges   | <img src="../images/colors/oranges.svg" alt="Oranges" data-size="line">|
| Reds      | <img src="../images/colors/reds.svg" alt="Reds" data-size="line">|
| Greys     | <img src="../images/colors/greys.svg" alt="Greys" data-size="line">|
| PuOr      | <img src="../images/colors/puor.svg" alt="PuOr" data-size="line">|
| BrBG      | <img src="../images/colors/brbg.svg" alt="BrBG" data-size="line">|
| PRGn      | <img src="../images/colors/prgn.svg" alt="PRGn" data-size="line">|
| PiYG      | <img src="../images/colors/piyg.svg" alt="PiYG" data-size="line">|
| RdBu      | <img src="../images/colors/rdbu.svg" alt="RdBu" data-size="line">|
| RdGy      | <img src="../images/colors/rdgy.svg" alt="RdGy" data-size="line">|
| RdYlBu    | <img src="../images/colors/rdylbu.svg" alt="RdYlBu" data-size="line">|
| Spectral  | <img src="../images/colors/spectral.svg" alt="Spectral" data-size="line">|
| RdYlGn    | <img src="../images/colors/rdylgn.svg" alt="RdYlGn" data-size="line">|
| nautical  | <img src="../images/colors/nautical.svg" alt="nautical" data-size="line">|
| deepsea   | <img src="../images/colors/deepsea.svg" alt="deepsea" data-size="line">|
| heat      | <img src="../images/colors/heat.svg" alt="heat" data-size="line">|
| flamingo  | <img src="../images/colors/flamingo.svg" alt="flamingo" data-size="line">|
| coffee    | <img src="../images/colors/coffee.svg" alt="coffee" data-size="line">|
| stoplight | <img src="../images/colors/stoplight.svg" alt="stoplight" data-size="line">|

### Qualitative

Qualitative color palettes are best when you are trying to show data with discrete values that don't have an inherent order.

| bujumbra | <img src="../images/colors/bujumbra.svg" alt="bujumbra" data-size="line">|
| neon     | <img src="../images/colors/neon.svg" alt="neon" data-size="line">|
| neon2    | <img src="../images/colors/neon2.svg" alt="neon2" data-size="line">|
| olympic  | <img src="../images/colors/olympic.svg" alt="olympic" data-size="line">|
| Accent   | <img src="../images/colors/accent.svg" alt="Accent" data-size="line">|
| Dark2    | <img src="../images/colors/dark2.svg" alt="Dark2" data-size="line">|
| Paired   | <img src="../images/colors/paired.svg" alt="Paired" data-size="line">|
| Pastel1  | <img src="../images/colors/pastel1.svg" alt="Pastel1" data-size="line">|
| Pastel2  | <img src="../images/colors/pastel2.svg" alt="Pastel2" data-size="line">|
| Set1     | <img src="../images/colors/set1.svg" alt="Set1" data-size="line">|
| Set2     | <img src="../images/colors/set2.svg" alt="Set2" data-size="line">|
| Set3     | <img src="../images/colors/set3.svg" alt="Set3" data-size="line">|

Here's an example of how to use a named color scale:

```scss
element {
  color: scale("net worth", bujumbra);
}
```

## Inverting a color scale

Any color scale can be inverted by adding `-inverted` to the name.

## Defining your own color palette

You can define your own color palette for elements by using a comma separated list of color values.

```scss
@settings {
  element-color: categorize("community", #5BC1AE, #009CDB, #F6882B, #8E278F)
}
```

For [flags](flags.md), the code is slightly different:

```scss
@settings {
  element-flag: "Tags" with #5BC1AE, #009CDB, #F6882B, #8E278F;
}
```

## Setting explicit stops for color values in categorize()

It's also possible to specify which value should receive a certain color for elements.

```scss
@settings {
  element-color: categorize("element type", #5BC1AE "Person", #009CDB "Organization", #F6882B "Region")
}
```

For [flags](flags.md), the code is slightly different:

```scss
@settings {
  element-flag: "Tags" with #5BC1AE "Person", #009CDB "Organization", #F6882B "Region;
}
```
