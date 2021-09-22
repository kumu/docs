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

<table id="property-reference-table" class="property-reference table borderless"></table>

<script type="text/javascript" src="https://unpkg.com/@alexvipond/kumu-docs-extracted@0.1.2/lib/index.umd.js"></script>
<script type="text/javascript">
const propertyReference = [
  {
    "Property": "arrow-color",
    "Elements": false,
    "Connections": true,
    "Loops": false,
    info: {
      description: "Override the arrow color for a connection.",
      validValues: ["color"],
    }
  },
  {
    "Property": "arrow-height",
    "Elements": false,
    "Connections": true,
    "Loops": false,
    info: {
      description: "Used in combination with <code>arrow-min-height</code> to set arrow height.",
      validValues: ["number"],
    }
  },
  {
    "Property": "arrow-min-height",
    "Elements": false,
    "Connections": true,
    "Loops": false,
    info: {
      description: "Used in combination with <code>arrow-height</code> to set arrow height.",
      validValues: ['0'],
    }
  },
  {
    "Property": "arrow-min-width",
    "Elements": false,
    "Connections": true,
    "Loops": false,
    info: {
      description: "Used in combination with <code>arrow-width</code> to set arrow width.",
      validValues: ['0'],
    }
  },
  {
    "Property": "arrow-visibility",
    "Elements": false,
    "Connections": true,
    "Loops": false,
    info: {
      description: "Controls arrow visibility for directed connections.",
      validValues: ["visible", "hidden"],
    }
  },
  {
    "Property": "arrow-width",
    "Elements": false,
    "Connections": true,
    "Loops": false,
    info: {
      description: "Used in combination with <code>arrow-min-width</code> to set arrow width.",
      validValues: ["number"],
    }
  },
  {
    "Property": "border-color",
    "Elements": true,
    "Connections": true,
    "Loops": false,
    info: {
      description: "Controls border color.",
      validValues: ["color"],
    }
  },
  {
    "Property": "border-opacity",
    "Elements": true,
    "Connections": true,
    "Loops": false,
    info: {
      description: "Controls border opacity.",
      validValues: ["0..1"],
    }
  },
  {
    "Property": "border-width",
    "Elements": true,
    "Connections": true,
    "Loops": false,
    info: {
      description: "Controls border width.",
      validValues: ["number"],
    }
  },
  {
    "Property": "bullseye-color",
    "Elements": true,
    "Connections": false,
    "Loops": false,
    info: {
      description: "Controls bullseye color.",
      validValues: ["color"],
    }
  },
  {
    "Property": "bullseye-opacity",
    "Elements": true,
    "Connections": false,
    "Loops": false,
    info: {
      description: "Controls bullseye opacity.",
      validValues: ["0..1"],
    }
  },
  {
    "Property": "bullseye-size",
    "Elements": true,
    "Connections": false,
    "Loops": false,
    info: {
      description: "Controls bullseye size.",
      validValues: ["0..1"],
    }
  },
  {
    "Property": "bullseye-visibility",
    "Elements": true,
    "Connections": false,
    "Loops": false,
    info: {
      description: "Controls bullseye visibility.",
      validValues: ["visible", "hidden"],
    }
  },
  {
    "Property": "color",
    "Elements": true,
    "Connections": true,
    "Loops": false,
    info: {
      description: "Controls shapes' color.",
      validValues: ["color", "gradient(color, color)"],
    }
  },
  {
    "Property": "curvature",
    "Elements": false,
    "Connections": true,
    "Loops": false,
    info: {
      description: "Controls line curvature.",
      validValues: ["0..1"],
    }
  },
  {
    "Property": "dash",
    "Elements": false,
    "Connections": true,
    "Loops": false,
    info: {
      description: "Controls the length of connection dashes (first number) and the distance between them (second number).",
      validValues: ["number number"],
    }
  },
  {
    "Property": "delay-color",
    "Elements": false,
    "Connections": true,
    "Loops": false,
    info: {
      description: "Controls color of delay markings.",
      validValues: ["color", "inherit"],
    }
  },
  {
    "Property": "delay-height",
    "Elements": false,
    "Connections": true,
    "Loops": false,
    info: {
      description: "Controls height of delay markings.",
      validValues: ["number"],
    }
  },
  {
    "Property": "delay-position",
    "Elements": false,
    "Connections": true,
    "Loops": false,
    info: {
      description: "Controls delay markings' position along the connection.",
      validValues: ["0..1"],
    }
  },
  {
    "Property": "delay-stroke-width",
    "Elements": false,
    "Connections": true,
    "Loops": false,
    info: {
      description: "Controls width of delay markings.",
      validValues: ["number"],
    }
  },
  {
    "Property": "delay-visibility",
    "Elements": false,
    "Connections": true,
    "Loops": false,
    info: {
      description: "Controls visibility of delay markings.",
      validValues: ["visible", "hidden"],
    }
  },
  {
    "Property": "delay-width",
    "Elements": false,
    "Connections": true,
    "Loops": false,
    info: {
      description: "Controls space between delay markings.",
      validValues: ["number"],
    }
  },
  {
    "Property": "display",
    "Elements": true,
    "Connections": true,
    "Loops": true,
    info: {
      description: "Controls inclusion in the map. Hidden objects will be fully removed from the map.",
      validValues: ["map", "none"],
    }
  },
  {
    "Property": "flag",
    "Elements": true,
    "Connections": false,
    "Loops": false,
    info: {
      description: "Defines field and color scale for flags.",
      validValues: ["''Field name' with colorPalette"],
    }
  },
  {
    "Property": "flag-offset",
    "Elements": true,
    "Connections": false,
    "Loops": false,
    info: {
      description: "Controls space between flags and their elements.",
      validValues: ["number"],
    }
  },
  {
    "Property": "flag-size",
    "Elements": true,
    "Connections": false,
    "Loops": false,
    info: {
      description: "Controls thickness of flags.",
      validValues: ["number"],
    }
  },
  {
    "Property": "font-color",
    "Elements": true,
    "Connections": true,
    "Loops": true,
    info: {
      description: "Controls label font color.",
      validValues: ["color"],
    }
  },
  {
    "Property": "font-family",
    "Elements": true,
    "Connections": true,
    "Loops": true,
    info: {
      description: "Controls label font family.",
      validValues: ["family-name", "generic-family"],
    }
  },
  {
    "Property": "font-size",
    "Elements": true,
    "Connections": true,
    "Loops": true,
    info: {
      description: "Controls label font size.",
      validValues: ["number"],
    }
  },
  {
    "Property": "font-style",
    "Elements": true,
    "Connections": true,
    "Loops": true,
    info: {
      description: "Controls label style.",
      validValues: ["normal", "italic"],
    }
  },
  {
    "Property": "font-weight",
    "Elements": true,
    "Connections": true,
    "Loops": true,
    info: {
      description: "Controls label font weight.",
      validValues: ["normal", "bold"],
    }
  },
  {
    "Property": "height",
    "Elements": true,
    "Connections": false,
    "Loops": false,
    info: {
      description: "Controls height of elements that are squares and/or rectangles.",
      validValues: ["auto", "number"],
    }
  },
  {
    "Property": "icon",
    "Elements": true,
    "Connections": false,
    "Loops": false,
    info: {
      description: "Adds an icon as the item's image.",
      validValues: ["icon-name", "icon-name icon-style", "off"],
    }
  },
  {
    "Property": "icon-color",
    "Elements": true,
    "Connections": false,
    "Loops": false,
    info: {
      description: "Controls the icon color.",
      validValues: ["color"],
    }
  },
  {
    "Property": "image-size",
    "Elements": true,
    "Connections": false,
    "Loops": false,
    info: {
      description: "Controls image size.",
      validValues: ["cover", "contain"],
    }
  },
  {
    "Property": "image-url",
    "Elements": true,
    "Connections": false,
    "Loops": false,
    info: {
      description: "Provides source url of image.",
      validValues: ["url(http://...)"],
    }
  },
  {
    "Property": "image-visibility",
    "Elements": true,
    "Connections": false,
    "Loops": false,
    info: {
      description: "Controls image visibility",
      validValues: ["visible", "hidden"],
    }
  },
  {
    "Property": "label",
    "Elements": true,
    "Connections": true,
    "Loops": true,
    info: {
      description: "Replaces the default label with a label template.",
      validValues: ["none", "string template"],
    }
  },
  {
    "Property": "label-placement",
    "Elements": true,
    "Connections": true,
    "Loops": true,
    info: {
      description: "Controls alignment of element labels.",
      validValues: ["bottom", "center"],
    }
  },
  {
    "Property": "label-visibility",
    "Elements": true,
    "Connections": true,
    "Loops": true,
    info: {
      description: "Controls label visibility for all types.",
      validValues: ["visible", "hidden"],
    }
  },
  {
    "Property": "layer",
    "Elements": true,
    "Connections": true,
    "Loops": true,
    info: {
      description: "Controls whether an item is in the foreground or background.",
      validValues: ["auto", "background"],
    }
  },
  {
    "Property": "length",
    "Elements": false,
    "Connections": true,
    "Loops": false,
    info: {
      description: "Controls connection resting length.",
      validValues: ["number"],
    }
  },
  {
    "Property": "margin",
    "Elements": true,
    "Connections": false,
    "Loops": false,
    info: {
      description: "Controls amount of space between the border of an element and its connections.",
      validValues: ["number", "none"],
    }
  },
  {
    "Property": "opacity",
    "Elements": true,
    "Connections": false,
    "Loops": true,
    info: {
      description: "Controls loop label opacity and element opacity.",
      validValues: ["0..1"],
    }
  },
  {
    "Property": "outline-color",
    "Elements": true,
    "Connections": false,
    "Loops": false,
    info: {
      description: "Controls the color of selected elements' outlines.",
      validValues: ["color"],
    }
  },
  {
    "Property": "outline-offset",
    "Elements": true,
    "Connections": false,
    "Loops": false,
    info: {
      description: "Controls the distance between selected elements and their outlines.",
      validValues: ["number"],
    }
  },
  {
    "Property": "outline-opacity",
    "Elements": true,
    "Connections": false,
    "Loops": false,
    info: {
      description: "Controls the opacity of selected elements' outlines.",
      validValues: ["0..1"],
    }
  },
  {
    "Property": "outline-width",
    "Elements": true,
    "Connections": false,
    "Loops": false,
    info: {
      description: "Controls the width of selected elements' outlines.",
      validValues: ["number"],
    }
  },
  {
    "Property": "padding",
    "Elements": true,
    "Connections": false,
    "Loops": false,
    info: {
      description: "Controls amount of space between the border of an element and its contents (image or bullseye).",
      validValues: ["number"],
    }
  },
  {
    "Property": "path-opacity",
    "Elements": false,
    "Connections": true,
    "Loops": false,
    info: {
      description: "Controls connection opacity.",
      validValues: ["0..1"],
    }
  },
  {
    "Property": "pattern",
    "Elements": false,
    "Connections": true,
    "Loops": false,
    info: {
      description: "Controls connection pattern. Equivalent of style.",
      validValues: ["solid", "dashed"],
    }
  },
  {
    "Property": "pointer-events",
    "Elements": true,
    "Connections": true,
    "Loops": true,
    info: {
      description: "Controls whether or not an item can be clicked.",
      validValues: ["auto", "none"],
    }
  },
  {
    "Property": "popover",
    "Elements": true,
    "Connections": true,
    "Loops": true,
    info: {
      description: "Sets the popover content",
      validValues: ["none", "string template"],
    }
  },
  {
    "Property": "prepost-inset",
    "Elements": false,
    "Connections": true,
    "Loops": false,
    info: {
      description: "Controls the inset of pre-labels and post-labels.",
      validValues: ["number"],
    }
  },
  {
    "Property": "prepost-offset",
    "Elements": false,
    "Connections": true,
    "Loops": false,
    info: {
      description: "Controls the offset of pre-labels and post-labels.",
      validValues: ["number"],
    }
  },
  {
    "Property": "profile",
    "Elements": true,
    "Connections": true,
    "Loops": true,
    info: {
      description: "Controls whether or not the profile can be opened",
      validValues: ["on", "off"],
    }
  },
  {
    "Property": "scale",
    "Elements": true,
    "Connections": true,
    "Loops": false,
    info: {
      description: "Controls element and connection scale (multiple of base size).",
      validValues: ["number"],
    }
  },
  {
    "Property": "shadow-color",
    "Elements": true,
    "Connections": false,
    "Loops": false,
    info: {
      description: "Controls shadow color.",
      validValues: ["color"],
    }
  },
  {
    "Property": "shadow-opacity",
    "Elements": true,
    "Connections": false,
    "Loops": false,
    info: {
      description: "Controls shadow opacity.",
      validValues: ["0..1"],
    }
  },
  {
    "Property": "shadow-size",
    "Elements": true,
    "Connections": false,
    "Loops": false,
    info: {
      description: "Controls shadow size.",
      validValues: ["1..5"],
    }
  },
  {
    "Property": "shadow-visibility",
    "Elements": true,
    "Connections": false,
    "Loops": false,
    info: {
      description: "Controls shadow visibility",
      validValues: ["visible", "hidden"],
    }
  },
  {
    "Property": "shape",
    "Elements": true,
    "Connections": false,
    "Loops": false,
    info: {
      description: "Controls shape.",
      validValues: ["circle", "square", "rectangle"],
    }
  },
  {
    "Property": "size",
    "Elements": true,
    "Connections": true,
    "Loops": false,
    info: {
      description: "Controls base size.",
      validValues: ["number"],
    }
  },
  {
    "Property": "strength",
    "Elements": false,
    "Connections": true,
    "Loops": false,
    info: {
      description: "Controls connection strength.",
      validValues: ["0..1"],
    }
  },
  {
    "Property": "style",
    "Elements": false,
    "Connections": true,
    "Loops": false,
    info: {
      description: "Controls connection style. Equivalent of pattern.",
      validValues: ["solid", "dashed"],
    }
  },
  {
    "Property": "text-align",
    "Elements": true,
    "Connections": false,
    "Loops": false,
    info: {
      description: "Controls alignment of element labels.",
      validValues: ["bottom", "center"],
    }
  },
  {
    "Property": "text-overflow",
    "Elements": true,
    "Connections": true,
    "Loops": true,
    info: {
      description: "Controls text wrapping and truncating.",
      validValues: ["off", "auto", "auto [number]", "manual", "wrap", "wrap [number]", "clip", "clip [number]", "none"],
    }
  },
  {
    "Property": "visibility",
    "Elements": true,
    "Connections": true,
    "Loops": true,
    info: {
      description: "Controls visibility. Hidden objects will still affect layout and metrics.",
      validValues: ["visible", "hidden"],
    }
  },
  {
    "Property": "width",
    "Elements": true,
    "Connections": false,
    "Loops": false,
    info: {
      description: "Controls width of elements that are squares and/or rectangles.",
      validValues: ["auto", "number"],
    }
  }
]

window.addEventListener('load', function() {
  KumuDocsExtracted.appendTable(
    { id: 'property-reference-table', reference: propertyReference },
    {
      transforms: {
        DEFAULT: (value, { checkmark }) => {
          switch (value) {
            case true:
              return checkmark
            case false:
              return ''
            default:
              return value
          }
        }
      },
      effects: {
        th: {
          DEFAULT: th => th.classList.add('text-center'),
          Property: th => th.classList.add('text-left'),
        }
      }
    }
  )

  KumuDocsExtracted.appendSearchBox({ id: 'property-reference-table', hasInfo: true })  
})
</script>

<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/guides/property-reference.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
