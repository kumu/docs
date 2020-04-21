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


<input type="text" id="search-box" class="search-box" onkeyup="searchProperties()" placeholder="Type to filter..." />

<table id="search-table" class="property-reference table borderless">
  <tbody>
    <tr>
      <th class="text-left">Property</th>
      <th class="text-center">Elements</th>
      <th class="text-center">Connections</th>
      <th class="text-center">Loops</th>
      <th class="text-center"></th>
    </tr>
    <tr>
      <td>arrow-color</td>
      <td></td>
      <td><i class="fa fa-check"></i></td>
      <td></td>
      <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Override the arrow color for a connection.<br><code>color</code>"</i></td>
    </tr>
    <tr>
      <td>arrow-height</td>
      <td></td>
      <td><i class="fa fa-check"></i></td>
      <td></td>
      <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Used in combination with <code>arrow-min-height</code> to set arrow height.<br><code>number</code>"</i></td>
    </tr>
    <tr>
      <td>arrow-min-height</td>
      <td></td>
      <td><i class="fa fa-check"></i></td>
      <td></td>
      <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Used in combination with <code>arrow-height</code> to set arrow height.<br><code>0</code>"</i></td>
    </tr>
    <tr>
      <td>arrow-min-width</td>
      <td></td>
      <td><i class="fa fa-check"></i></td>
      <td></td>
      <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Used in combination with <code>arrow-width</code> to set arrow width.<br><code>0</code>"</i></td>
    </tr>
    <tr>
      <td>arrow-visibility</td>
      <td></td>
      <td><i class="fa fa-check"></i></td>
      <td></td>
      <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls arrow visibility for directed connections.<br><code>visible</code><br><code>hidden</code>"</i></td>
    </tr>
    <tr>
      <td>arrow-width</td>
      <td></td>
      <td><i class="fa fa-check"></i></td>
      <td></td>
      <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Used in combination with <code>arrow-min-width</code> to set arrow width.<br><code>number</code>"</i></td>
    </tr>
    <tr>
      <td>border-color</td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-check"></i></td>
      <td></td>
      <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls border color.<br><code>color</code>"</i></td>
    </tr>
    <tr>
      <td>border-opacity</td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-check"></i></td>
      <td></td>
      <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls border opacity.<br><code>0..1</code>"</i></td>
    </tr>
    <tr>
      <td>border-width</td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-check"></i></td>
      <td></td>
      <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls border width.<br><code>number</code>"</i></td>
    </tr>
    <tr>
      <td>bullseye-color</td>
      <td><i class="fa fa-check"></i></td>
      <td></td>
      <td></td>
      <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls bullseye color.<br><code>color</code>"</i></td>
    </tr>
    <tr>
      <td>bullseye-opacity</td>
      <td><i class="fa fa-check"></i></td>
      <td></td>
      <td></td>
      <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls bullseye opacity.<br><code>0..1</code>"</i></td>
    </tr>
    <tr>
      <td>bullseye-size</td>
      <td><i class="fa fa-check"></i></td>
      <td></td>
      <td></td>
      <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls bullseye size.<br><code>0..1</code>"</i></td>
    </tr>
    <tr>
      <td>bullseye-visibility</td>
      <td><i class="fa fa-check"></i></td>
      <td></td>
      <td></td>
      <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls bullseye visibility.<br><code>visible</code><br><code>hidden</code>"</i></td>
    </tr>
    <tr>
      <td>color</td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-check"></i></td>
      <td></td>
      <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls shapes' color.<br><code>color</code><br><code>gradient(color, color)</code>"</i></td>
    </tr>
    <tr>
      <td>curvature</td>
      <td></td>
      <td><i class="fa fa-check"></i></td>
      <td></td>
      <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls line curvature.<br><code>0..1</code>"</i></td>
    </tr>
    <tr>
      <td>dash</td>
      <td></td>
      <td><i class="fa fa-check"></i></td>
      <td></td>
      <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls the length of connection dashes (first number) and the distance between them (second number).<br><code>number number</code>"</i></td>
    </tr>
    <tr>
      <td>delay-color</td>
      <td></td>
      <td><i class="fa fa-check"></i></td>
      <td></td>
      <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls color of delay markings.<br><code>color</code><br><code>inherit</code>"</i></td>
    </tr>
    <tr>
      <td>delay-height</td>
      <td></td>
      <td><i class="fa fa-check"></i></td>
      <td></td>
      <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls height of delay markings.<br><code>number</code>"</i></td>
    </tr>
    <tr>
      <td>delay-position</td>
      <td></td>
      <td><i class="fa fa-check"></i></td>
      <td></td>
      <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls delay markings' position along the connection.<br><code>0..1</code>"</i></td>
    </tr>
    <tr>
      <td>delay-stroke-width</td>
      <td></td>
      <td><i class="fa fa-check"></i></td>
      <td></td>
      <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls width of delay markings.<br><code>number</code>"</i></td>
    </tr>
    <tr>
      <td>delay-visibility</td>
      <td></td>
      <td><i class="fa fa-check"></i></td>
      <td></td>
      <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls visibility of delay markings.<br><code>visible</code><br><code>hidden</code>"</i></td>
    </tr>
    <tr>
      <td>delay-width</td>
      <td></td>
      <td><i class="fa fa-check"></i></td>
      <td></td>
      <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls space between delay markings.<br><code>number</code>"</i></td>
    </tr>
    <tr>
      <td>display</td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls inclusion in the map. Hidden objects will be fully removed from the map.<br><code>map</code><br><code>none</code>"</i></td>
    </tr>
    <tr>
      <td>flag</td>
      <td><i class="fa fa-check"></i></td>
      <td></td>
      <td></td>
      <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Defines field and color scale for flags.<br><code>'Field name' with colorPalette</code>"</i></td>
    </tr>
    <tr>
      <td>flag-offset</td>
      <td><i class="fa fa-check"></i></td>
      <td></td>
      <td></td>
      <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls space between flags and their elements.<br><code>number</code>"</i></td>
    </tr>
    <tr>
      <td>flag-size</td>
      <td><i class="fa fa-check"></i></td>
      <td></td>
      <td></td>
      <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls thickness of flags.<br><code>number</code>"</i></td>
    </tr>
    <tr>
      <td>font-color</td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls label font color.<br><code>color</code>"</i></td>
    </tr>
    <tr>
      <td>font-family</td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls label font family.<br><code>family-name</code><br><code>generic-family</code>"</i></td>
    </tr>
    <tr>
      <td>font-size</td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls label font size.<br><code>number</code>"</i></td>
    </tr>
    <tr>
      <td>font-style</td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls label style.<br><code>normal</code><br><code>italic</code>"</i></td>
    </tr>
    <tr>
      <td>font-weight</td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls label font weight.<br><code>normal</code><br><code>bold</code>"</i></td>
    </tr>
    <tr>
      <td>height</td>
      <td><i class="fa fa-check"></i></td>
      <td></td>
      <td></td>
      <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls height of elements that are squares and/or rectangles.<br><code>auto</code><br><code>number</code>"</i></td>
    </tr>
    <tr>
      <td>icon</td>
      <td><i class="fa fa-check"></i></td>
      <td></td>
      <td></td>
      <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Adds an icon as the item's image.<br><code>icon-name</code><br><code>icon-name icon-style</code><br><code>off</code>"</i></td>
    </tr>
    <tr>
      <td>icon-color</td>
      <td><i class="fa fa-check"></i></td>
      <td></td>
      <td></td>
      <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls the icon color.<br><code>color</code>"</i></td>
    </tr>
    <tr>
      <td>image-size</td>
      <td><i class="fa fa-check"></i></td>
      <td></td>
      <td></td>
      <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls image size.<br><code>cover</code><br><code>contain</code>"</i></td>
    </tr>
    <tr>
      <td>image-url</td>
      <td><i class="fa fa-check"></i></td>
      <td></td>
      <td></td>
      <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Provides source url of image.<br><code>url(http://...)</code>"</i></td>
    </tr>
    <tr>
      <td>image-visibility</td>
      <td><i class="fa fa-check"></i></td>
      <td></td>
      <td></td>
      <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls image visibility<br><code>visible</code><br><code>hidden</code>"</i></td>
    </tr>
    <tr>
      <td>label</td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Replaces the default label with a label template.<br><code>none</code><br><code>string template</code>"</i></td>
    </tr>
    <tr>
      <td>label-visibility</td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls label visibility for all types.<br><code>visible</code><br><code>hidden</code>"</i></td>
    </tr>
    <tr>
      <td>layer</td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls whether an item is in the foreground or background.<br><code>auto</code><br><code>background</code>"</i></td>
    </tr>
    <tr>
      <td>length</td>
      <td></td>
      <td><i class="fa fa-check"></i></td>
      <td></td>
      <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls connection resting length.<br><code>number</code>"</i></td>
    </tr>
    <tr>
      <td>margin</td>
      <td><i class="fa fa-check"></i></td>
      <td></td>
      <td></td>
      <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls amount of space between the border of an element and its connections.<br><code>number</code><br><code>none</code>"</i></td>
    </tr>
    <tr>
      <td>opacity</td>
      <td><i class="fa fa-check"></i></td>
      <td></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls loop label opacity and element opacity.<br><code>0..1</code>"</i></td>
    </tr>
    <tr>
      <td>outline-color</td>
      <td><i class="fa fa-check"></i></td>
      <td></td>
      <td></td>
      <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls the color of selected elements' outlines.<br><code>color</code>"</i></td>
    </tr>
    <tr>
      <td>outline-offset</td>
      <td><i class="fa fa-check"></i></td>
      <td></td>
      <td></td>
      <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls the distance between selected elements and their outlines.<br><code>number</code>"</i></td>
    </tr>
    <tr>
      <td>outline-opacity</td>
      <td><i class="fa fa-check"></i></td>
      <td></td>
      <td></td>
      <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls the opacity of selected elements' outlines.<br><code>0..1</code>"</i></td>
    </tr>
    <tr>
      <td>outline-width</td>
      <td><i class="fa fa-check"></i></td>
      <td></td>
      <td></td>
      <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls the width of selected elements' outlines.<br><code>number</code>"</i></td>
    </tr>
    <tr>
      <td>padding</td>
      <td><i class="fa fa-check"></i></td>
      <td></td>
      <td></td>
      <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls amount of space between the border of an element and its contents (image or bullseye).<br><code>number</code>"</i></td>
    </tr>
    <tr>
      <td>path-opacity</td>
      <td></td>
      <td><i class="fa fa-check"></i></td>
      <td></td>
      <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls connection opacity.<br><code>0..1</code>"</i></td>
    </tr>
    <tr>
      <td>pattern</td>
      <td></td>
      <td><i class="fa fa-check"></i></td>
      <td></td>
      <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls connection pattern. Equivalent of style.<br><code>solid</code><br><code>dashed</code>"</i></td>
    </tr>
    <tr>
      <td>pointer-events</td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls whether or not an item can be clicked.<br><code>auto</code><br><code>none</code>"</i></td>
    </tr>
    <tr>
      <td>popover</td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Sets the popover content<br><code>none</code><br><code>string template</code>"</i></td>
    </tr>
    <tr>
      <td>prepost-inset</td>
      <td></td>
      <td><i class="fa fa-check"></i></td>
      <td></td>
      <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls the inset of pre-labels and post-labels.<br><code>number</code>"</i></td>
    </tr>
    <tr>
      <td>prepost-offset</td>
      <td></td>
      <td><i class="fa fa-check"></i></td>
      <td></td>
      <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls the offset of pre-labels and post-labels.<br><code>number</code>"</i></td>
    </tr>
    <tr>
      <td>profile</td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls whether or not the profile can be opened<br><code>on</code><br><code>off</code>"</i></td>
    </tr>
    <tr>
      <td>scale</td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-check"></i></td>
      <td></td>
      <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls element and connection scale (multiple of base size).<br><code>number</code>"</i></td>
    </tr>
    <tr>
      <td>shadow-color</td>
      <td><i class="fa fa-check"></i></td>
      <td></td>
      <td></td>
      <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls shadow color.<br><code>color</code>"</i></td>
    </tr>
    <tr>
      <td>shadow-opacity</td>
      <td><i class="fa fa-check"></i></td>
      <td></td>
      <td></td>
      <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls shadow opacity.<br><code>0..1</code>"</i></td>
    </tr>
    <tr>
      <td>shadow-size</td>
      <td><i class="fa fa-check"></i></td>
      <td></td>
      <td></td>
      <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls shadow size.<br><code>1..5</code>"</i></td>
    </tr>
    <tr>
      <td>shadow-visibility</td>
      <td><i class="fa fa-check"></i></td>
      <td></td>
      <td></td>
      <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls shadow visibility<br><code>visible</code><br><code>hidden</code>"</i></td>
    </tr>
    <tr>
      <td>shape</td>
      <td><i class="fa fa-check"></i></td>
      <td></td>
      <td></td>
      <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls shape.<br><code>circle</code><br><code>square</code><br><code>rectangle</code>"</i></td>
    </tr>
    <tr>
      <td>size</td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-check"></i></td>
      <td></td>
      <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls base size.<br><code>number</code>"</i></td>
    </tr>
    <tr>
      <td>strength</td>
      <td></td>
      <td><i class="fa fa-check"></i></td>
      <td></td>
      <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls connection strength.<br><code>0..1</code>"</i></td>
    </tr>
    <tr>
      <td>style</td>
      <td></td>
      <td><i class="fa fa-check"></i></td>
      <td></td>
      <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls connection style. Equivalent of pattern.<br><code>solid</code><br><code>dashed</code>"</i></td>
    </tr>
    <tr>
      <td>text-align</td>
      <td><i class="fa fa-check"></i></td>
      <td></td>
      <td></td>
      <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls alignment of element labels.<br><code>bottom</code><br><code>center</code>"</i></td>
    </tr>
    <tr>
      <td>text-overflow</td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls text wrapping and truncating.<br><code>off</code><br><code>auto</code><br><code>auto [number]</code><br><code>manual</code><br><code>wrap</code><br><code>wrap [number]</code><br><code>clip</code><br><code>clip [number]</code><br><code>none</code>"</i></td>
    </tr>
    <tr>
      <td>visibility</td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls visibility. Hidden objects will still affect layout and metrics.<br><code>visible</code><br><code>hidden</code>"</i></td>
    </tr>
    <tr>
      <td>width</td>
      <td><i class="fa fa-check"></i></td>
      <td></td>
      <td></td>
      <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls width of elements that are squares and/or rectangles.<br><code>auto</code><br><code>number</code>"</i></td>
    </tr>
  </tbody>
</table>

<script type="text/javascript">

function searchProperties() {
    let searchBox = document.querySelector("#search-box"),
        searchTerm = searchBox.value.toLowerCase(),
        table = document.querySelector("#search-table"),
        rows = table.querySelectorAll("tr"),
        i;

    for(i = 1; i < rows.length; i++) {
        let nameCell = rows[i].querySelector("td"),
            infoCell = rows[i].querySelector("td:last-child"),

            name = nameCell.textContent,
            info = infoCell.querySelector('i').dataset.originalTitle,

            textToSearch = `${name.toLowerCase()} ${info.toLowerCase()}`;

        if(textToSearch.indexOf(searchTerm) > -1) {
            rows[i].style.display = "table-row";
        } else {
            rows[i].style.display = "none";
        }
    }
}

</script>

<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/guides/property-reference.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
