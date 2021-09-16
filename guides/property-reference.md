# Property Reference

Beneath views, Kumu uses a powerful CSS-based language to control the appearance of your maps.

If you're familiar with CSS, the advanced view editor will quickly
become your best friend.  The view builder only exposes a small set
of the available properties.  Being able to write views by hand is
the only way to harness the full power of Kumu.

**Note:** We've adopted standard CSS properties and values wherever possible, straying where
conventional values were irrelevant or misleading (eg `display: map` vs `display: block`),
and adding properties specific to Kumu (such as `bullseye-color`).

There are just few more things you should know about the valid values listed below:

<table class="table border-bottom">
  <tbody>
    <tr>
      <th>Where you see...</th>
      <th>You can use...</th>
    </tr>
    <tr>
      <td><code>color</code></td>
      <td>Any CSS web color or hex color code</td>
    </tr>
    <tr>
      <td><code>colorPalette</code></td>
      <td>The name of one of our <a href="/guides/color-reference.html">color palettes</a></td>
    </tr>
    <tr>
      <td><code>'Field name'</code></td>
      <td>The name of any of your <a href="/guides/fields.html">fields</a>, wrapped in single or double quotes</td>
    </tr>
    <tr>
      <td><code>number</code> or <code>[number]</code></td>
      <td>Any number</td>
    </tr>
    <tr>
      <td><code>number number</code></td>
      <td>Any two numbers separated by a space, e.g. <code>5 10</code></td>
    </tr>
    <tr>
      <td><code>0</code></td>
      <td>Only the number <code>0</code></td>
    </tr>
    <tr>
      <td><code>0..1</code></td>
      <td>Any number between <code>0</code> and <code>1</code></td>
    </tr>
    <tr>
      <td><code>generic-family</code></td>
      <td>The name of any CSS web safe font family</td>
    </tr>
    <tr>
      <td><code>family-name</code></td>
      <td>The name of any font family. <code>freight-text-pro</code> and <code>proxima nova</code> will always work, but other non-web-sage font families will only work if your reader has the font installed on their device.</td>
    </tr>
    <tr>
      <td><code>icon-name</code></td>
      <td>The name of any icon from the <a href="https://fontawesome.com/icons">Font Awesome</a> collection.</td>
    </tr>
    <tr>
      <td><code>icon-style</code></td>
      <td><code>solid</code> or <code>regular</code></td>
    </tr>
    <tr>
      <td><code>https://...</code></td>
      <td>Any URL. URLs starting with <code>https</code> are safest and will work best within Kumu.</td>
    </tr>
    <tr>
      <td><code>string template</code></td>
      <td>Any combination of letters, numbers, <a href="/guides/markdown.html">supported markdown (including raw HTML)</a>, or names of your fields wrapped in double curly brackets <code>{% raw %}{{}}{% endraw %}</code>. Wrap the entire thing in double quotes. See our <a href="/guides/label-templates.html">label templates guide</a> for examples.</td>
    </tr>
    <tr>
      <td><code>auto</code>, <code>background</code>, <code>bold</code>, <code>bottom</code>, <code>center</code>, <code>circle</code>, <code>clip</code>, <code>contain</code>, <code>cover</code>, <code>dashed</code>, <code>gradient</code>, <code>hidden</code>, <code>inherit</code>, <code>italic</code>, <code>manual</code>, <code>map</code>, <code>none</code>, <code>normal</code>, <code>off</code>, <code>rectangle</code>, <code>solid</code>, <code>square</code>, <code>url</code>, <code>visible</code>, or <code>wrap</code></td>
      <td>That exact keyword</td>
    </tr>
  </tbody>
</table>

All values are unitless.

## Supported Properties

The table below lists all of the properties recognized by elements, connections, and loops. Hover over the information icon <i class="fa fa-info-circle" data-placement="left" data-html="true" title="I ❤︎ information!"></i> at the far right of the table rows to see additional details and valid values for each property (when there are multiple valid values, we've listed them as separate snippets of `inline code`).

If you find a property or a value that's not documented here, [let us know](mailto:support@kumu.io)!

<table id="property-reference" class="property-reference table borderless"></table>

<script
  type="text/javascript"
  src="https://unpkg.com/@alexvipond/kumu-docs-extracted@0.1.1/lib/index.umd.js"
></script>
<script type="text/javascript">
const propertyReference = [
  {
    "Property": "arrow-color",
    "Elements": "",
    "Connections": true,
    "Loops": "",
    "INFO Description": "Override the arrow color for a connection.",
    "INFO Valid values": "color"
  },
  {
    "Property": "arrow-height",
    "Elements": "",
    "Connections": true,
    "Loops": "",
    "INFO Description": "Used in combination with <code>arrow-min-height</code> to set arrow height.",
    "INFO Valid values": "number"
  },
  {
    "Property": "arrow-min-height",
    "Elements": "",
    "Connections": true,
    "Loops": "",
    "INFO Description": "Used in combination with <code>arrow-height</code> to set arrow height.",
    "INFO Valid values": '0'
  },
  {
    "Property": "arrow-min-width",
    "Elements": "",
    "Connections": true,
    "Loops": "",
    "INFO Description": "Used in combination with <code>arrow-width</code> to set arrow width.",
    "INFO Valid values": '0'
  },
  {
    "Property": "arrow-visibility",
    "Elements": "",
    "Connections": true,
    "Loops": "",
    "INFO Description": "Controls arrow visibility for directed connections.",
    "INFO Valid values": "visible|hidden"
  },
  {
    "Property": "arrow-width",
    "Elements": "",
    "Connections": true,
    "Loops": "",
    "INFO Description": "Used in combination with <code>arrow-min-width</code> to set arrow width.",
    "INFO Valid values": "number"
  },
  {
    "Property": "border-color",
    "Elements": true,
    "Connections": true,
    "Loops": "",
    "INFO Description": "Controls border color.",
    "INFO Valid values": "color"
  },
  {
    "Property": "border-opacity",
    "Elements": true,
    "Connections": true,
    "Loops": "",
    "INFO Description": "Controls border opacity.",
    "INFO Valid values": "0..1"
  },
  {
    "Property": "border-width",
    "Elements": true,
    "Connections": true,
    "Loops": "",
    "INFO Description": "Controls border width.",
    "INFO Valid values": "number"
  },
  {
    "Property": "bullseye-color",
    "Elements": true,
    "Connections": "",
    "Loops": "",
    "INFO Description": "Controls bullseye color.",
    "INFO Valid values": "color"
  },
  {
    "Property": "bullseye-opacity",
    "Elements": true,
    "Connections": "",
    "Loops": "",
    "INFO Description": "Controls bullseye opacity.",
    "INFO Valid values": "0..1"
  },
  {
    "Property": "bullseye-size",
    "Elements": true,
    "Connections": "",
    "Loops": "",
    "INFO Description": "Controls bullseye size.",
    "INFO Valid values": "0..1"
  },
  {
    "Property": "bullseye-visibility",
    "Elements": true,
    "Connections": "",
    "Loops": "",
    "INFO Description": "Controls bullseye visibility.",
    "INFO Valid values": "visible|hidden"
  },
  {
    "Property": "color",
    "Elements": true,
    "Connections": true,
    "Loops": "",
    "INFO Description": "Controls shapes' color.",
    "INFO Valid values": "color|gradient(color, color)"
  },
  {
    "Property": "curvature",
    "Elements": "",
    "Connections": true,
    "Loops": "",
    "INFO Description": "Controls line curvature.",
    "INFO Valid values": "0..1"
  },
  {
    "Property": "dash",
    "Elements": "",
    "Connections": true,
    "Loops": "",
    "INFO Description": "Controls the length of connection dashes (first number) and the distance between them (second number).",
    "INFO Valid values": "number number"
  },
  {
    "Property": "delay-color",
    "Elements": "",
    "Connections": true,
    "Loops": "",
    "INFO Description": "Controls color of delay markings.",
    "INFO Valid values": "color|inherit"
  },
  {
    "Property": "delay-height",
    "Elements": "",
    "Connections": true,
    "Loops": "",
    "INFO Description": "Controls height of delay markings.",
    "INFO Valid values": "number"
  },
  {
    "Property": "delay-position",
    "Elements": "",
    "Connections": true,
    "Loops": "",
    "INFO Description": "Controls delay markings' position along the connection.",
    "INFO Valid values": "0..1"
  },
  {
    "Property": "delay-stroke-width",
    "Elements": "",
    "Connections": true,
    "Loops": "",
    "INFO Description": "Controls width of delay markings.",
    "INFO Valid values": "number"
  },
  {
    "Property": "delay-visibility",
    "Elements": "",
    "Connections": true,
    "Loops": "",
    "INFO Description": "Controls visibility of delay markings.",
    "INFO Valid values": "visible|hidden"
  },
  {
    "Property": "delay-width",
    "Elements": "",
    "Connections": true,
    "Loops": "",
    "INFO Description": "Controls space between delay markings.",
    "INFO Valid values": "number"
  },
  {
    "Property": "display",
    "Elements": true,
    "Connections": true,
    "Loops": true,
    "INFO Description": "Controls inclusion in the map. Hidden objects will be fully removed from the map.",
    "INFO Valid values": "map|none"
  },
  {
    "Property": "flag",
    "Elements": true,
    "Connections": "",
    "Loops": "",
    "INFO Description": "Defines field and color scale for flags.",
    "INFO Valid values": "''Field name' with colorPalette"
  },
  {
    "Property": "flag-offset",
    "Elements": true,
    "Connections": "",
    "Loops": "",
    "INFO Description": "Controls space between flags and their elements.",
    "INFO Valid values": "number"
  },
  {
    "Property": "flag-size",
    "Elements": true,
    "Connections": "",
    "Loops": "",
    "INFO Description": "Controls thickness of flags.",
    "INFO Valid values": "number"
  },
  {
    "Property": "font-color",
    "Elements": true,
    "Connections": true,
    "Loops": true,
    "INFO Description": "Controls label font color.",
    "INFO Valid values": "color"
  },
  {
    "Property": "font-family",
    "Elements": true,
    "Connections": true,
    "Loops": true,
    "INFO Description": "Controls label font family.",
    "INFO Valid values": "family-name|generic-family"
  },
  {
    "Property": "font-size",
    "Elements": true,
    "Connections": true,
    "Loops": true,
    "INFO Description": "Controls label font size.",
    "INFO Valid values": "number"
  },
  {
    "Property": "font-style",
    "Elements": true,
    "Connections": true,
    "Loops": true,
    "INFO Description": "Controls label style.",
    "INFO Valid values": "normal|italic"
  },
  {
    "Property": "font-weight",
    "Elements": true,
    "Connections": true,
    "Loops": true,
    "INFO Description": "Controls label font weight.",
    "INFO Valid values": "normal|bold"
  },
  {
    "Property": "height",
    "Elements": true,
    "Connections": "",
    "Loops": "",
    "INFO Description": "Controls height of elements that are squares and/or rectangles.",
    "INFO Valid values": "auto|number"
  },
  {
    "Property": "icon",
    "Elements": true,
    "Connections": "",
    "Loops": "",
    "INFO Description": "Adds an icon as the item's image.",
    "INFO Valid values": "icon-name|icon-name icon-style|off"
  },
  {
    "Property": "icon-color",
    "Elements": true,
    "Connections": "",
    "Loops": "",
    "INFO Description": "Controls the icon color.",
    "INFO Valid values": "color"
  },
  {
    "Property": "image-size",
    "Elements": true,
    "Connections": "",
    "Loops": "",
    "INFO Description": "Controls image size.",
    "INFO Valid values": "cover|contain"
  },
  {
    "Property": "image-url",
    "Elements": true,
    "Connections": "",
    "Loops": "",
    "INFO Description": "Provides source url of image.",
    "INFO Valid values": "url(http://...)"
  },
  {
    "Property": "image-visibility",
    "Elements": true,
    "Connections": "",
    "Loops": "",
    "INFO Description": "Controls image visibility",
    "INFO Valid values": "visible|hidden"
  },
  {
    "Property": "label",
    "Elements": true,
    "Connections": true,
    "Loops": true,
    "INFO Description": "Replaces the default label with a label template.",
    "INFO Valid values": "none|string template"
  },
  {
    "Property": "label-placement",
    "Elements": true,
    "Connections": true,
    "Loops": true,
    "INFO Description": "Controls alignment of element labels.",
    "INFO Valid values": "bottom|center"
  },
  {
    "Property": "label-visibility",
    "Elements": true,
    "Connections": true,
    "Loops": true,
    "INFO Description": "Controls label visibility for all types.",
    "INFO Valid values": "visible|hidden"
  },
  {
    "Property": "layer",
    "Elements": true,
    "Connections": true,
    "Loops": true,
    "INFO Description": "Controls whether an item is in the foreground or background.",
    "INFO Valid values": "auto|background"
  },
  {
    "Property": "length",
    "Elements": "",
    "Connections": true,
    "Loops": "",
    "INFO Description": "Controls connection resting length.",
    "INFO Valid values": "number"
  },
  {
    "Property": "margin",
    "Elements": true,
    "Connections": "",
    "Loops": "",
    "INFO Description": "Controls amount of space between the border of an element and its connections.",
    "INFO Valid values": "number|none"
  },
  {
    "Property": "opacity",
    "Elements": true,
    "Connections": "",
    "Loops": true,
    "INFO Description": "Controls loop label opacity and element opacity.",
    "INFO Valid values": "0..1"
  },
  {
    "Property": "outline-color",
    "Elements": true,
    "Connections": "",
    "Loops": "",
    "INFO Description": "Controls the color of selected elements' outlines.",
    "INFO Valid values": "color"
  },
  {
    "Property": "outline-offset",
    "Elements": true,
    "Connections": "",
    "Loops": "",
    "INFO Description": "Controls the distance between selected elements and their outlines.",
    "INFO Valid values": "number"
  },
  {
    "Property": "outline-opacity",
    "Elements": true,
    "Connections": "",
    "Loops": "",
    "INFO Description": "Controls the opacity of selected elements' outlines.",
    "INFO Valid values": "0..1"
  },
  {
    "Property": "outline-width",
    "Elements": true,
    "Connections": "",
    "Loops": "",
    "INFO Description": "Controls the width of selected elements' outlines.",
    "INFO Valid values": "number"
  },
  {
    "Property": "padding",
    "Elements": true,
    "Connections": "",
    "Loops": "",
    "INFO Description": "Controls amount of space between the border of an element and its contents (image or bullseye).",
    "INFO Valid values": "number"
  },
  {
    "Property": "path-opacity",
    "Elements": "",
    "Connections": true,
    "Loops": "",
    "INFO Description": "Controls connection opacity.",
    "INFO Valid values": "0..1"
  },
  {
    "Property": "pattern",
    "Elements": "",
    "Connections": true,
    "Loops": "",
    "INFO Description": "Controls connection pattern. Equivalent of style.",
    "INFO Valid values": "solid|dashed"
  },
  {
    "Property": "pointer-events",
    "Elements": true,
    "Connections": true,
    "Loops": true,
    "INFO Description": "Controls whether or not an item can be clicked.",
    "INFO Valid values": "auto|none"
  },
  {
    "Property": "popover",
    "Elements": true,
    "Connections": true,
    "Loops": true,
    "INFO Description": "Sets the popover content",
    "INFO Valid values": "none|string template"
  },
  {
    "Property": "prepost-inset",
    "Elements": "",
    "Connections": true,
    "Loops": "",
    "INFO Description": "Controls the inset of pre-labels and post-labels.",
    "INFO Valid values": "number"
  },
  {
    "Property": "prepost-offset",
    "Elements": "",
    "Connections": true,
    "Loops": "",
    "INFO Description": "Controls the offset of pre-labels and post-labels.",
    "INFO Valid values": "number"
  },
  {
    "Property": "profile",
    "Elements": true,
    "Connections": true,
    "Loops": true,
    "INFO Description": "Controls whether or not the profile can be opened",
    "INFO Valid values": "on|off"
  },
  {
    "Property": "scale",
    "Elements": true,
    "Connections": true,
    "Loops": "",
    "INFO Description": "Controls element and connection scale (multiple of base size).",
    "INFO Valid values": "number"
  },
  {
    "Property": "shadow-color",
    "Elements": true,
    "Connections": "",
    "Loops": "",
    "INFO Description": "Controls shadow color.",
    "INFO Valid values": "color"
  },
  {
    "Property": "shadow-opacity",
    "Elements": true,
    "Connections": "",
    "Loops": "",
    "INFO Description": "Controls shadow opacity.",
    "INFO Valid values": "0..1"
  },
  {
    "Property": "shadow-size",
    "Elements": true,
    "Connections": "",
    "Loops": "",
    "INFO Description": "Controls shadow size.",
    "INFO Valid values": "1..5"
  },
  {
    "Property": "shadow-visibility",
    "Elements": true,
    "Connections": "",
    "Loops": "",
    "INFO Description": "Controls shadow visibility",
    "INFO Valid values": "visible|hidden"
  },
  {
    "Property": "shape",
    "Elements": true,
    "Connections": "",
    "Loops": "",
    "INFO Description": "Controls shape.",
    "INFO Valid values": "circle|square|rectangle"
  },
  {
    "Property": "size",
    "Elements": true,
    "Connections": true,
    "Loops": "",
    "INFO Description": "Controls base size.",
    "INFO Valid values": "number"
  },
  {
    "Property": "strength",
    "Elements": "",
    "Connections": true,
    "Loops": "",
    "INFO Description": "Controls connection strength.",
    "INFO Valid values": "0..1"
  },
  {
    "Property": "style",
    "Elements": "",
    "Connections": true,
    "Loops": "",
    "INFO Description": "Controls connection style. Equivalent of pattern.",
    "INFO Valid values": "solid|dashed"
  },
  {
    "Property": "text-align",
    "Elements": true,
    "Connections": "",
    "Loops": "",
    "INFO Description": "Controls alignment of element labels.",
    "INFO Valid values": "bottom|center"
  },
  {
    "Property": "text-overflow",
    "Elements": true,
    "Connections": true,
    "Loops": true,
    "INFO Description": "Controls text wrapping and truncating.",
    "INFO Valid values": "off|auto|auto [number]|manual|wrap|wrap [number]|clip|clip [number]|none"
  },
  {
    "Property": "visibility",
    "Elements": true,
    "Connections": true,
    "Loops": true,
    "INFO Description": "Controls visibility. Hidden objects will still affect layout and metrics.",
    "INFO Valid values": "visible|hidden"
  },
  {
    "Property": "width",
    "Elements": true,
    "Connections": "",
    "Loops": "",
    "INFO Description": "Controls width of elements that are squares and/or rectangles.",
    "INFO Valid values": "auto|number"
  }
]

KumuDocsExtracted.appendTable(
  { id: 'property-reference', reference: propertyReference },
  {
    transforms: {
      DEFAULT: (value, { checkmark }) => value === true ? checkmark : `${value}`,
    },
    effects: {
      th: {
        DEFAULT: th => th.classList.add('text-center'),
        Property: th => th.classList.add('text-left'),
      }
    }
  }
)

KumuDocsExtracted.appendSearchBox({ id: 'property-reference', hasInfo: true })
</script>

<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/guides/property-reference.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
