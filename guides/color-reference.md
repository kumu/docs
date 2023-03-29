# Color reference

Below are details on the different color palettes and scales that Kumu supports. Use these with the [Color by](decorate.md#color-by) tool in the Basic Editor, or use them in the [Advanced Editor](decorate.md#decorate-in-the-advanced-editor) with the `categorize()` and `scale()` functions.

## Named color scales

Kumu has built-in support for a number of named color scales, including all [ColorBrewer](http://bl.ocks.org/mbostock/5577023) scales.

### Sequential and diverging

Both sequential and diverging color palettes are great when you are trying to show quantitative data or data that has a meaningful order.

| YlGn      | <img src="../images/colors/ylgn.svg" alt="YlGn" data-size="line">     |
| --------- | --------------------------------------------------------------------- |
| YlGnBu    | <img src="../images/colors/ylgnbu.svg" alt="YlGnBu" data-size="line"> |
| GnBu      | ![GnBu](../images/colors/gnbu.svg)                                    |
| BuGn      | ![BuGn](../images/colors/bugn.svg)                                    |
| PuBuGn    | ![PuBuGn](../images/colors/pubugn.svg)                                |
| PuBu      | ![PuBu](../images/colors/pubu.svg)                                    |
| BuPu      | ![BuPu](../images/colors/bupu.svg)                                    |
| RdPu      | ![RdPu](../images/colors/rdpu.svg)                                    |
| PuRd      | ![PuRd](../images/colors/purd.svg)                                    |
| OrRd      | ![OrRd](../images/colors/orrd.svg)                                    |
| YlOrRd    | ![YlOrRd](../images/colors/ylorrd.svg)                                |
| YlOrBr    | ![YlOrBr](../images/colors/ylorbr.svg)                                |
| Purples   | ![Purples](../images/colors/purples.svg)                              |
| Blues     | ![Blues](../images/colors/blues.svg)                                  |
| Greens    | ![Greens](../images/colors/greens.svg)                                |
| Oranges   | ![Oranges](../images/colors/oranges.svg)                              |
| Reds      | ![Reds](../images/colors/reds.svg)                                    |
| Greys     | ![Greys](../images/colors/greys.svg)                                  |
| PuOr      | ![PuOr](../images/colors/puor.svg)                                    |
| BrBG      | ![BrBG](../images/colors/brbg.svg)                                    |
| PRGn      | ![PRGn](../images/colors/prgn.svg)                                    |
| PiYG      | ![PiYG](../images/colors/piyg.svg)                                    |
| RdBu      | ![RdBu](../images/colors/rdbu.svg)                                    |
| RdGy      | ![RdGy](../images/colors/rdgy.svg)                                    |
| RdYlBu    | ![RdYlBu](../images/colors/rdylbu.svg)                                |
| Spectral  | ![Spectral](../images/colors/spectral.svg)                            |
| RdYlGn    | ![RdYlGn](../images/colors/rdylgn.svg)                                |
| nautical  | ![nautical](../images/colors/nautical.svg)                            |
| deepsea   | ![deepsea](../images/colors/deepsea.svg)                              |
| heat      | ![heat](../images/colors/heat.svg)                                    |
| flamingo  | ![flamingo](../images/colors/flamingo.svg)                            |
| coffee    | ![coffee](../images/colors/coffee.svg)                                |
| stoplight | ![stoplight](../images/colors/stoplight.svg)                          |

### Qualitative

Qualitative color palettes are best when you are trying to show data with discrete values that don't have an inherent order.

| bujumbra | ![bujumbra](../images/colors/bujumbra.svg) |
| -------- | ------------------------------------------ |
| neon     | ![neon](../images/colors/neon.svg)         |
| neon2    | ![neon2](../images/colors/neon2.svg)       |
| olympic  | ![olympic](../images/colors/olympic.svg)   |
| Accent   | ![Accent](../images/colors/accent.svg)     |
| Dark2    | ![Dark2](../images/colors/dark2.svg)       |
| Paired   | ![Paired](../images/colors/paired.svg)     |
| Pastel1  | ![Pastel1](../images/colors/pastel1.svg)   |
| Pastel2  | ![Pastel2](../images/colors/pastel2.svg)   |
| Set1     | ![Set1](../images/colors/set1.svg)         |
| Set2     | ![Set2](../images/colors/set2.svg)         |
| Set3     | ![Set3](../images/colors/set3.svg)         |

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
