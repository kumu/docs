# Property reference

Beneath views, Kumu uses a powerful CSS-based language to control the appearance of your maps.

If you're familiar with CSS, the advanced view editor will quickly become your best friend. The view builder only exposes a small set of the available properties. Being able to write views by hand is the only way to harness the full power of Kumu.

**Note:** We've adopted standard CSS properties and values wherever possible, straying where conventional values were irrelevant or misleading (eg `display: map` vs `display: block`), and adding properties specific to Kumu (such as `bullseye-color`).

There are just few more things you should know about the valid values listed below:

| Where you see...                                                                                                                                                                                                                                   | You can use...                                                                                                                                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `color`                                                                                                                                                                                                                                            | Any CSS web color or hex color code                                                                                                                                                                                                                                                               |
| `colorPalette`                                                                                                                                                                                                                                     | The name of one of our [color palettes](color-reference.md)                                                                                                                                                                                                                                       |
| `'Field name'`                                                                                                                                                                                                                                     | The name of any of your [fields](../../guides/fields.md), wrapped in single or double quotes                                                                                                                                                                                                      |
| `number` or `[number]`                                                                                                                                                                                                                             | Any number                                                                                                                                                                                                                                                                                        |
| `number number`                                                                                                                                                                                                                                    | Any two numbers separated by a space, e.g. `5 10`                                                                                                                                                                                                                                                 |
| `0`                                                                                                                                                                                                                                                | Only the number `0`                                                                                                                                                                                                                                                                               |
| `0..1`                                                                                                                                                                                                                                             | Any number between `0` and `1`                                                                                                                                                                                                                                                                    |
| `generic-family`                                                                                                                                                                                                                                   | The name of any CSS web safe font family                                                                                                                                                                                                                                                          |
| `family-name`                                                                                                                                                                                                                                      | The name of any font family. `freight-text-pro` and `proxima nova` will always work, but other non-web-sage font families will only work if your reader has the font installed on their device.                                                                                                   |
| `icon-name`                                                                                                                                                                                                                                        | The name of any icon from the [Font Awesome](https://fontawesome.com/icons) collection.                                                                                                                                                                                                           |
| `icon-style`                                                                                                                                                                                                                                       | `solid` or `regular`                                                                                                                                                                                                                                                                              |
| `https://...`                                                                                                                                                                                                                                      | Any URL. URLs starting with `https` are safest and will work best within Kumu.                                                                                                                                                                                                                    |
| `string template`                                                                                                                                                                                                                                  | Any combination of letters, numbers, [supported markdown (including raw HTML)](../../guides/markdown.md), or names of your fields wrapped in double curly brackets `{{}}`. Wrap the entire thing in double quotes. See our [label templates guide](../../guides/label-templates.md) for examples. |
| `auto`, `background`, `bold`, `bottom`, `center`, `circle`, `clip`, `contain`, `cover`, `dashed`, `gradient`, `hidden`, `inherit`, `italic`, `manual`, `map`, `none`, `normal`, `off`, `rectangle`, `solid`, `square`, `url`, `visible`, or `wrap` | That exact keyword                                                                                                                                                                                                                                                                                |

All values are unitless.

## Supported Properties

The table below lists all of the properties recognized by elements, connections, and loops. Hover over the information icon at the far right of the table rows to see additional details and valid values for each property (when there are multiple valid values, we've listed them as separate snippets of `inline code`).

If you find a property or a value that's not documented here, [let us know](mailto:support@kumu.io)!

<table><thead><tr><th>Property</th><th>Description</th><th>Values</th><th data-type="checkbox">Elements</th><th data-type="checkbox">Connections</th><th data-type="checkbox">Loops</th></tr></thead><tbody><tr><td><code>arrow-color</code></td><td>Override the arrow color for a connection.</td><td><code>color</code></td><td>false</td><td>true</td><td>false</td></tr><tr><td><code>arrow-height</code></td><td>Used in combination with arrow-min-height to set arrow height.</td><td><code>number</code></td><td>false</td><td>true</td><td>false</td></tr><tr><td><code>arrow-min-height</code></td><td>Used in combination with arrow-height to set arrow height.</td><td><code>0</code></td><td>false</td><td>true</td><td>false</td></tr><tr><td><code>arrow-min-width</code></td><td>Used in combination with arrow-width to set arrow width.</td><td><code>0</code></td><td>false</td><td>true</td><td>false</td></tr><tr><td><code>arrow-visibility</code></td><td>Controls arrow visibility for directed connections.</td><td><code>visible</code> <code>hidden</code></td><td>false</td><td>true</td><td>false</td></tr><tr><td><code>arrow-width</code></td><td>Used in combination with arrow-min-width to set arrow width.</td><td><code>number</code></td><td>false</td><td>true</td><td>false</td></tr><tr><td><code>border-color</code></td><td>Controls border color.</td><td><code>color</code></td><td>true</td><td>true</td><td>false</td></tr><tr><td><code>border-opacity</code></td><td>Controls border opacity.</td><td><code>0..1</code></td><td>true</td><td>true</td><td>false</td></tr><tr><td><code>border-width</code></td><td>Controls border width.</td><td><code>number</code></td><td>true</td><td>true</td><td>false</td></tr><tr><td><code>bullseye-color</code></td><td>Controls bullseye color.</td><td><code>color</code></td><td>true</td><td>false</td><td>false</td></tr><tr><td><code>bullseye-opacity</code></td><td>Controls bullseye opacity.</td><td><code>0..1</code></td><td>true</td><td>false</td><td>false</td></tr><tr><td><code>bullseye-size</code></td><td>Controls bullseye size.</td><td><code>0..1</code></td><td>true</td><td>false</td><td>false</td></tr><tr><td><code>bullseye-visibility</code></td><td>Controls bullseye visibility.</td><td><code>visible</code> <code>hidden</code></td><td>true</td><td>false</td><td>false</td></tr><tr><td><code>color</code></td><td>Controls shapes' color. Gradient only available for connections.</td><td><code>color</code> <code>gradient(color, color)</code></td><td>true</td><td>true</td><td>false</td></tr><tr><td><code>curvature</code></td><td>Controls line curvature.</td><td><code>0..1</code></td><td>false</td><td>true</td><td>false</td></tr><tr><td><code>dash</code></td><td>Controls the length of connection dashes (first number) and the distance between them (second number).</td><td><code>number number</code></td><td>false</td><td>true</td><td>false</td></tr><tr><td><code>delay-color</code></td><td>Controls color of delay markings.</td><td><code>color</code> <code>inherit</code></td><td>false</td><td>true</td><td>false</td></tr><tr><td><code>delay-height</code></td><td>Controls height of delay markings.</td><td><code>number</code></td><td>false</td><td>true</td><td>false</td></tr><tr><td><code>delay-position</code></td><td>Controls delay markings' position along the connection.</td><td><code>0..1</code></td><td>false</td><td>true</td><td>false</td></tr><tr><td><code>delay-stroke-width</code></td><td>Controls width of delay markings.</td><td><code>number</code></td><td>false</td><td>true</td><td>false</td></tr><tr><td><code>delay-visibility</code></td><td>Controls visibility of delay markings.</td><td><code>visible</code> <code>hidden</code></td><td>false</td><td>true</td><td>false</td></tr><tr><td><code>delay-width</code></td><td>Controls space between delay markings.</td><td><code>number</code></td><td>false</td><td>true</td><td>false</td></tr><tr><td><code>display</code></td><td>Controls inclusion in the map. Hidden objects will be fully removed from the map.</td><td><code>map</code> <code>none</code></td><td>true</td><td>true</td><td>false</td></tr><tr><td><code>flag</code></td><td>Defines field and color scale for flags.</td><td><code>'Field name' with colorPalette</code></td><td>true</td><td>false</td><td>false</td></tr><tr><td><code>flag-offset</code></td><td>Controls space between flags and their elements.</td><td><code>number</code></td><td>true</td><td>false</td><td>false</td></tr><tr><td><code>flag-size</code></td><td>Controls thickness of flags.</td><td><code>number</code></td><td>true</td><td>false</td><td>false</td></tr><tr><td><code>font-color</code></td><td>Controls label font color.</td><td><code>color</code></td><td>true</td><td>true</td><td>false</td></tr><tr><td><code>font-family</code></td><td>Controls label font family.</td><td><code>family-name</code> <code>generic-family</code></td><td>true</td><td>true</td><td>false</td></tr><tr><td><code>font-size</code></td><td>Controls label font size.</td><td><code>number</code></td><td>true</td><td>true</td><td>false</td></tr><tr><td><code>font-style</code></td><td>Controls label style.</td><td><code>normal</code> <code>italic</code></td><td>true</td><td>true</td><td>false</td></tr><tr><td><code>font-weight</code></td><td>Controls label font weight.</td><td><code>normal</code> <code>bold</code></td><td>true</td><td>true</td><td>false</td></tr><tr><td><code>height</code></td><td>Controls height of elements that are squares and/or rectangles.</td><td><code>auto</code> <code>number</code></td><td>true</td><td>false</td><td>false</td></tr><tr><td><code>icon</code></td><td>Adds an icon as the item's image.</td><td><code>icon-name</code> <code>icon-name icon-style</code> <code>off</code></td><td>true</td><td>false</td><td>false</td></tr><tr><td><code>icon-color</code></td><td>Controls the icon color.</td><td><code>color</code></td><td>true</td><td>false</td><td>false</td></tr><tr><td><code>image-size</code></td><td>Controls image size.</td><td><code>cover</code> <code>contain</code></td><td>true</td><td>false</td><td>false</td></tr><tr><td><code>image-url</code></td><td>Provides source url of image.</td><td><code>url(http://...)</code></td><td>true</td><td>false</td><td>false</td></tr><tr><td><code>image-visibility</code></td><td>Controls image visibility</td><td><code>visible</code> <code>hidden</code></td><td>true</td><td>false</td><td>false</td></tr><tr><td><code>label</code></td><td>Replaces the default label with a label template.</td><td><code>none</code> <code>string template</code></td><td>true</td><td>true</td><td>true</td></tr><tr><td><code>label-visibility</code></td><td>Controls label visibility for all types.</td><td><code>visible</code> <code>hidden</code></td><td>true</td><td>true</td><td>false</td></tr><tr><td><code>layer</code></td><td>Controls whether an item is in the foreground or background.</td><td><code>auto</code> <code>background</code></td><td>true</td><td>true</td><td>false</td></tr><tr><td><code>length</code></td><td>Controls connection resting length.</td><td><code>number</code></td><td>false</td><td>true</td><td>false</td></tr><tr><td><code>margin</code></td><td>Controls amount of space between the border of an element and its connections.</td><td><code>number</code> <code>none</code></td><td>true</td><td>false</td><td>false</td></tr><tr><td><code>opacity</code></td><td>Controls loop label opacity and element opacity.</td><td><code>Number between 0..1</code></td><td>true</td><td>true</td><td>true</td></tr><tr><td><code>outline-color</code></td><td>Controls the color of selected elements' outlines.</td><td><code>color</code></td><td>true</td><td>false</td><td>false</td></tr><tr><td><code>outline-offset</code></td><td>Controls the distance between selected elements and their outlines.</td><td><code>number</code></td><td>true</td><td>false</td><td>false</td></tr><tr><td><code>outline-opacity</code></td><td>Controls the opacity of selected elements' outlines.</td><td><code>0..1</code></td><td>true</td><td>false</td><td>false</td></tr><tr><td><code>outline-width</code></td><td>Controls the width of selected elements' outlines.</td><td><code>number</code></td><td>true</td><td>false</td><td>false</td></tr><tr><td><code>padding</code></td><td>Controls amount of space between the border of an element and its contents (image or bullseye).</td><td><code>number</code></td><td>true</td><td>false</td><td>false</td></tr><tr><td><code>path-opacity</code></td><td>Controls connection opacity.</td><td><code>0..1</code></td><td>false</td><td>true</td><td>false</td></tr><tr><td><code>pattern</code></td><td>Controls connection pattern. Equivalent of style.</td><td><code>solid</code> <code>dashed</code></td><td>false</td><td>true</td><td>false</td></tr><tr><td><code>pointer-events</code></td><td>Controls whether or not an item can be clicked.</td><td><code>auto</code> <code>none</code></td><td>true</td><td>true</td><td>true</td></tr><tr><td><code>popover</code></td><td>Sets the popover content</td><td><code>none</code> <code>string template</code></td><td>true</td><td>true</td><td>true</td></tr><tr><td><code>prepost-inset</code></td><td>Controls the inset of pre-labels and post-labels.</td><td><code>number</code></td><td>false</td><td>true</td><td>false</td></tr><tr><td><code>prepost-offset</code></td><td>Controls the offset of pre-labels and post-labels.</td><td><code>number</code></td><td>false</td><td>true</td><td>false</td></tr><tr><td><code>profile</code></td><td>Controls whether or not the profile can be opened</td><td><code>true</code> <code>false</code></td><td>true</td><td>true</td><td>true</td></tr><tr><td><code>scale</code></td><td>Controls element and connection scale (multiple of base size).</td><td><code>number</code></td><td>true</td><td>true</td><td>false</td></tr><tr><td><code>shadow-color</code></td><td>Controls shadow color.</td><td><code>color</code></td><td>true</td><td>false</td><td>false</td></tr><tr><td><code>shadow-opacity</code></td><td>Controls shadow opacity.</td><td><code>0..1</code></td><td>true</td><td>false</td><td>false</td></tr><tr><td><code>shadow-size</code></td><td>Controls shadow size.</td><td><code>1..5</code></td><td>true</td><td>false</td><td>false</td></tr><tr><td><code>shadow-visibility</code></td><td>Controls shadow visibility</td><td><code>visible</code> <code>hidden</code></td><td>true</td><td>false</td><td>false</td></tr><tr><td><code>shape</code></td><td>Controls shape.</td><td><code>circle</code> <code>square</code> <code>rectangle</code></td><td>true</td><td>false</td><td>false</td></tr><tr><td><code>size</code></td><td>Controls base size.</td><td><code>number</code></td><td>true</td><td>true</td><td>false</td></tr><tr><td><code>strength</code></td><td>Controls connection strength.</td><td><code>0..1</code></td><td>false</td><td>true</td><td>false</td></tr><tr><td><code>style</code></td><td>Controls connection style. Equivalent of pattern.</td><td><code>solid</code> <code>dashed</code></td><td>false</td><td>true</td><td>false</td></tr><tr><td><code>text-align</code></td><td>Controls alignment of element labels.</td><td><code>bottom</code> <code>center</code></td><td>true</td><td>false</td><td>false</td></tr><tr><td><code>text-overflow</code></td><td>Controls text wrapping and truncating.</td><td><code>off</code> <code>auto</code> <code>auto [number]</code> <code>manual</code> <code>wrap</code> <code>wrap [number]</code> <code>clip</code> <code>clip [number]</code> <code>none</code></td><td>true</td><td>true</td><td>true</td></tr><tr><td><code>visibility</code></td><td>Controls visibility. Hidden objects will still affect layout and metrics.</td><td><code>visible</code> <code>hidden</code></td><td>true</td><td>true</td><td>false</td></tr><tr><td><code>width</code></td><td>Controls width of elements that are squares and/or rectangles.</td><td><code>auto</code> <code>number</code></td><td>true</td><td>false</td><td>false</td></tr></tbody></table>