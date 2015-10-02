# Color Reference

Below are details on the different color palettes and scales that Kumu supports. Use these with the `categorize()` function or within any color scale `color: scale()`.

## Named color scales
Kumu has built-in support for a number of named color scales, including all ColorBrewer scales. Click the image below to open a new tab with all the ColorBrewer scales (just hover over each color palette in the new tab for its name).

<a href="http://bl.ocks.org/mbostock/raw/5577023/" target="_blank"><img src="/images/color-brewer.png" alt="colorbrewer"></a>

<br />
Kumu also has built-in support for these color scales:

### sequential

<div class="color-scale">
<table class="table">
  <tbody>
    <tr>
      <td>nautical</td>
      <td style="background: #003250;">&nbsp;</td>
      <td style="background: #5893ac;">&nbsp;</td>
      <td style="background: #bbd2e0;">&nbsp;</td>
      <td style="background: #f2f2f5;">&nbsp;</td>
      <td style="background: #a7a7a7;">&nbsp;</td>
      <td style="background: #787878;">&nbsp;</td>
    </tr>
    <tr class="spacer"><td>&nbsp;</td></tr>
    <tr>
      <td>deepsea</td>
      <td style="background: #005F98;">&nbsp;</td>
      <td style="background: #296F98;">&nbsp;</td>
      <td style="background: #3C779A;">&nbsp;</td>
      <td style="background: #60849A;">&nbsp;</td>
      <td style="background: #788D9A;">&nbsp;</td>
    </tr>
    <tr class="spacer"><td>&nbsp;</td></tr>
    <tr>
      <td>heat</td>
      <td style="background: #000000;">&nbsp;</td>
      <td style="background: #4D0600;">&nbsp;</td>
      <td style="background: #9C0200;">&nbsp;</td>
      <td style="background: #FF6100;">&nbsp;</td>
      <td style="background: #FFF60B;">&nbsp;</td>
      <td style="background: #FFFFFF;">&nbsp;</td>
    </tr>
    <tr class="spacer"><td>&nbsp;</td></tr>
    <tr>
      <td>babygirl</td>
      <td style="background: #CC66A4;">&nbsp;</td>
      <td style="background: #CE8DAD;">&nbsp;</td>
      <td style="background: #D4AFBD;">&nbsp;</td>
      <td style="background: #DECED2;">&nbsp;</td>
      <td style="background: #EDE9E9;">&nbsp;</td>
      <td style="background: #FFFFFF;">&nbsp;</td>
    </tr>
    <tr class="spacer"><td>&nbsp;</td></tr>
    <tr>
      <td>coffee</td>
      <td style="background: #684F19;">&nbsp;</td>
      <td style="background: #86723D;">&nbsp;</td>
      <td style="background: #A49561;">&nbsp;</td>
      <td style="background: #C3B984;">&nbsp;</td>
      <td style="background: #E1DCA8;">&nbsp;</td>
      <td style="background: #FFFFCC;">&nbsp;</td>
    </tr>
    <tr class="spacer"><td>&nbsp;</td></tr>
    <tr>
      <td>stoplight</td>
      <td style="background: #62B944;">&nbsp;</td>
      <td style="background: #FDBE0F;">&nbsp;</td>
      <td style="background: #E02D28;">&nbsp;</td>
    </tr>
  </tbody>
</table>      
</div>

### qualitative
<div class="color-scale">
<table class="table">
  <tbody>
    <tr>
      <td>bujumbra</td>
      <td style="background: #BE420E;">&nbsp;</td>
      <td style="background: #BE6D0E;">&nbsp;</td>
      <td style="background: #6B4F2E;">&nbsp;</td>
      <td style="background: #CCA066;">&nbsp;</td>
      <td style="background: #E0D752;">&nbsp;</td>
      <td style="background: #A5BE0E;">&nbsp;</td>
      <td style="background: #4197E3;">&nbsp;</td>
    </tr>
    <tr class="spacer"><td>&nbsp;</td></tr>
    <tr>
      <td>neon</td>
      <td style="background: #9FDE00;">&nbsp;</td>
      <td style="background: #E7000C;">&nbsp;</td>
      <td style="background: #EC008C;">&nbsp;</td>
      <td style="background: #FF7404;">&nbsp;</td>
      <td style="background: #FFBE2A;">&nbsp;</td>
      <td style="background: #8FB9E1;">&nbsp;</td>
      <td style="background: #D5EAFF;">&nbsp;</td>
      <td style="background: #F6F4F4;">&nbsp;</td>
    </tr>
    <tr class="spacer"><td>&nbsp;</td></tr>
    <tr>
      <td>neon2</td>
      <td style="background: #00B9FC;">&nbsp;</td>
      <td style="background: #FEE300;">&nbsp;</td>
      <td style="background: #8EDC0C;">&nbsp;</td>
      <td style="background: #F69010;">&nbsp;</td>
      <td style="background: #FD0100;">&nbsp;</td>
      <td style="background: #F33389;">&nbsp;</td>
      <td style="background: #0B080F;">&nbsp;</td>
    </tr>
    <tr class="spacer"><td>&nbsp;</td></tr>
    <tr>
      <td>olympic</td>
      <td style="background: #007AC3;">&nbsp;</td>
      <td style="background: #FDBE0F;">&nbsp;</td>
      <td style="background: #4CC9E9;">&nbsp;</td>
      <td style="background: #E02D28;">&nbsp;</td>
      <td style="background: #62B944;">&nbsp;</td>
    </tr>
  </tbody>
</table>      
</div>

<br />
Here's an example of how to use a named color scale:

```
element {
  color: scale("net worth", bujumbra);
}
```

## Inverting a color scale

Any color scale can be inverted by adding `-inverted` to the name. For example:

<div class="color-scale">
<table class="table">
  <tbody>
    <tr>
      <td>heat</td>
      <td style="background: #000000;">&nbsp;</td>
      <td style="background: #4D0600;">&nbsp;</td>
      <td style="background: #9C0200;">&nbsp;</td>
      <td style="background: #FF6100;">&nbsp;</td>
      <td style="background: #FFF60B;">&nbsp;</td>
      <td style="background: #FFFFFF;">&nbsp;</td>
    </tr>
    <tr class="spacer"><td>&nbsp;</td></tr>
    <tr>
      <td>heat-inverted</td>
      <td style="background: #FFFFFF;">&nbsp;</td>
      <td style="background: #FFF60B;">&nbsp;</td>
      <td style="background: #FF6100;">&nbsp;</td>
      <td style="background: #9C0200;">&nbsp;</td>
      <td style="background: #4D0600;">&nbsp;</td>
      <td style="background: #000000;">&nbsp;</td>
    </tr>
  </tbody>
</table>      
</div>

## Defining your own color palette

You can define your own color palette by using a comma separated list of color values.

```
@settings {
  element-color: categorize ("community", #5BC1AE, #009CDB, #F6882B, #8E278F)
}
```

## Setting explicit stops for color values in categorize()

It's also possible to specify which value should receive a certain color within `categorize()`.

```
@settings {
  element-color: categorize ("element type", #5BC1AE "Person", #009CDB "Organization", #F6882B "Region")
}
```
