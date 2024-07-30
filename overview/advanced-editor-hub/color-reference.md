# Color reference

Below are details on the different color palettes and scales that Kumu supports. Use these with the [Color by](../../guides/decorate.md#color-by) tool in the Basic Editor, or use them in the [Advanced Editor](../../guides/decorate.md#decorate-in-the-advanced-editor) with the `categorize()` and `scale()` functions.

## Named color scales

Kumu has built-in support for a number of named color scales, including all [ColorBrewer](http://bl.ocks.org/mbostock/5577023) scales.

### Sequential and diverging

Both sequential and diverging color palettes are great when you are trying to show quantitative data or data that has a meaningful order.

<table><thead><tr><th width="115.00000000000003"></th><th></th></tr></thead><tbody><tr><td>YlGn</td><td><img src="../../images/colors/ylgn.svg" alt="YlGn" data-size="line"></td></tr><tr><td>YlGnBu</td><td><img src="../../images/colors/ylgnbu.svg" alt="YlGnBu" data-size="line"></td></tr><tr><td>GnBu</td><td><img src="../../images/colors/gnbu.svg" alt="GnBu" data-size="line"></td></tr><tr><td>BuGn</td><td><img src="../../images/colors/bugn.svg" alt="BuGn" data-size="line"></td></tr><tr><td>PuBuGn</td><td><img src="../../images/colors/pubugn.svg" alt="PuBuGn" data-size="line"></td></tr><tr><td>PuBu</td><td><img src="../../images/colors/pubu.svg" alt="PuBu" data-size="line"></td></tr><tr><td>BuPu</td><td><img src="../../images/colors/bupu.svg" alt="BuPu" data-size="line"></td></tr><tr><td>RdPu</td><td><img src="../../images/colors/rdpu.svg" alt="RdPu" data-size="line"></td></tr><tr><td>PuRd</td><td><img src="../../images/colors/purd.svg" alt="PuRd" data-size="line"></td></tr><tr><td>OrRd</td><td><img src="../../images/colors/orrd.svg" alt="OrRd" data-size="line"></td></tr><tr><td>YlOrRd</td><td><img src="../../images/colors/ylorrd.svg" alt="YlOrRd" data-size="line"></td></tr><tr><td>YlOrBr</td><td><img src="../../images/colors/ylorbr.svg" alt="YlOrBr" data-size="line"></td></tr><tr><td>Purples</td><td><img src="../../images/colors/purples.svg" alt="Purples" data-size="line"></td></tr><tr><td>Blues</td><td><img src="../../images/colors/blues.svg" alt="Blues" data-size="line"></td></tr><tr><td>Greens</td><td><img src="../../images/colors/greens.svg" alt="Greens" data-size="line"></td></tr><tr><td>Oranges</td><td><img src="../../images/colors/oranges.svg" alt="Oranges" data-size="line"></td></tr><tr><td>Reds</td><td><img src="../../images/colors/reds.svg" alt="Reds" data-size="line"></td></tr><tr><td>Greys</td><td><img src="../../images/colors/greys.svg" alt="Greys" data-size="line"></td></tr><tr><td>PuOr</td><td><img src="../../images/colors/puor.svg" alt="PuOr" data-size="line"></td></tr><tr><td>BrBG</td><td><img src="../../images/colors/brbg.svg" alt="BrBG" data-size="line"></td></tr><tr><td>PRGn</td><td><img src="../../images/colors/prgn.svg" alt="PRGn" data-size="line"></td></tr><tr><td>PiYG</td><td><img src="../../images/colors/piyg.svg" alt="PiYG" data-size="line"></td></tr><tr><td>RdBu</td><td><img src="../../images/colors/rdbu.svg" alt="RdBu" data-size="line"></td></tr><tr><td>RdGy</td><td><img src="../../images/colors/rdgy.svg" alt="RdGy" data-size="line"></td></tr><tr><td>RdYlBu</td><td><img src="../../images/colors/rdylbu.svg" alt="RdYlBu" data-size="line"></td></tr><tr><td>Spectral</td><td><img src="../../images/colors/spectral.svg" alt="Spectral" data-size="line"></td></tr><tr><td>RdYlGn</td><td><img src="../../images/colors/rdylgn.svg" alt="RdYlGn" data-size="line"></td></tr><tr><td>nautical</td><td><img src="../../images/colors/nautical.svg" alt="nautical" data-size="line"></td></tr><tr><td>deepsea</td><td><img src="../../images/colors/deepsea.svg" alt="deepsea" data-size="line"></td></tr><tr><td>heat</td><td><img src="../../images/colors/heat.svg" alt="heat" data-size="line"></td></tr><tr><td>flamingo</td><td><img src="../../images/colors/flamingo.svg" alt="flamingo" data-size="line"></td></tr><tr><td>coffee</td><td><img src="../../images/colors/coffee.svg" alt="coffee" data-size="line"></td></tr><tr><td>stoplight</td><td><img src="../../images/colors/stoplight.svg" alt="stoplight" data-size="line"></td></tr></tbody></table>

### Qualitative

Qualitative color palettes are best when you are trying to show data with discrete values that don't have an inherent order.

<table><thead><tr><th width="126.00000000000003"></th><th></th></tr></thead><tbody><tr><td>bujumbra</td><td><img src="../../images/colors/bujumbra.svg" alt="bujumbra" data-size="line"></td></tr><tr><td>neon</td><td><img src="../../images/colors/neon.svg" alt="neon" data-size="line"></td></tr><tr><td>neon2</td><td><img src="../../images/colors/neon2.svg" alt="neon2" data-size="line"></td></tr><tr><td>olympic</td><td><img src="../../images/colors/olympic.svg" alt="olympic" data-size="line"></td></tr><tr><td>Accent</td><td><img src="../../images/colors/accent.svg" alt="Accent" data-size="line"></td></tr><tr><td>Dark2</td><td><img src="../../images/colors/dark2.svg" alt="Dark2" data-size="line"></td></tr><tr><td>Paired</td><td><img src="../../images/colors/paired.svg" alt="Paired" data-size="line"></td></tr><tr><td>Pastel1</td><td><img src="../../images/colors/pastel1.svg" alt="Pastel1" data-size="line"></td></tr><tr><td>Pastel2</td><td><img src="../../images/colors/pastel2.svg" alt="Pastel2" data-size="line"></td></tr><tr><td>Set1</td><td><img src="../../images/colors/set1.svg" alt="Set1" data-size="line"></td></tr><tr><td>Set2</td><td><img src="../../images/colors/set2.svg" alt="Set2" data-size="line"></td></tr><tr><td>Set3</td><td><img src="../../images/colors/set3.svg" alt="Set3" data-size="line"></td></tr></tbody></table>

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
  element-color: categorize("community", #5BC1AE, #009CDB, #F6882B, #8E278F);
}
```

For [flags](../../guides/flags.md), the code is slightly different:

```scss
@settings {
  element-flag: "Tags" with #5BC1AE, #009CDB, #F6882B, #8E278F;
}
```

## Setting explicit stops for color values in categorize()

It's also possible to specify which value should receive a certain color for elements.

```scss
@settings {
  element-color: categorize("element type", #5BC1AE "Person", #009CDB "Organization", #F6882B "Region");
}
```

For [flags](../../guides/flags.md), the code is slightly different:

```scss
@settings {
  element-flag: "Tags" with #5BC1AE "Person", #009CDB "Organization", #F6882B "Region;
}
```
