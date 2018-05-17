
# Property Reference
Beneath views, Kumu uses a powerful CSS-based language to control the appearance of your maps.

If you're familiar with CSS, the advanced view editor will quickly
become your best friend.  The view builder only exposes a small set
of the available properties.  Being able to write views by hand is
the only way to harness the full power of Kumu.

**Note:** We've adopted standard CSS properties and values wherever possible, straying where
conventional values were irrelevant or misleading (eg `display: map` vs `display: block`),
and adding properties specific to Kumu (such as `bullseye-color`).

All values are unitless.

## Catalog of Supported Properties

The table below lists all of the properties recognized by Kumu. Hover over the information icon at the far right to see additional details and valid values for each property (when are multiple valid values, we've listed them as separate snippets of `inline code`). Scroll to the bottom for a list of available `@settings` properties.

<style>

#search-box {
    width: 100%;
    padding: 5px 10px 5px 10px;
    margin-bottom: .85em;
    border: none;
    border-left: 2px solid #ccc;
}

#search-box:focus {
    outline: none;
}

</style>

<input type="text" id="search-box" onkeyup="searchProperties()" placeholder="Type to filter...">

<table id="search-table" class="property-table table borderless">
  <tbody><tr>
    <th class="text-left">Property</th>
    <th class="text-center">Elements</th>
    <th class="text-center">Connections</th>
    <th class="text-center">Loops</th>
    <th class="text-center"></th>
  </tr>

  <tr data-property="arrow-color">
    <td>arrow-color</td>
    <td></td>
    <td><i class="fa fa-check"></i></td>
    <td></td>
    <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Override the arrow color for a connection.
<br><code>color</code>
"></i></td>
  </tr>

  <tr data-property="arrow-visibility">
    <td>arrow-visibility</td>
    <td></td>
    <td><i class="fa fa-check"></i></button></td>
    <td></td>
    <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls arrow visibility for directed connections.
<br><code>visible</code><br><code>hidden</code>
"></i></button></td>
  </tr>

  <tr data-property="border-color">
    <td>border-color</td>
    <td><i class="fa fa-check"></i></td>
    <td></td>
    <td></td>
    <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls border color for elements.
<br><code>color</code>
"></i></td>
  </tr>

  <tr data-property="border-width">
    <td>border-width</td>
    <td><i class="fa fa-check"></i></td>
    <td></td>
    <td></td>
    <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls border width for elements.
<br><code>number</code>
"></i></td>
  </tr>

  <tr data-property="bullseye-visibility">
    <td>bullseye-visibility</td>
    <td><i class="fa fa-check"></i></td>
    <td></td>
    <td></td>
    <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls the bullseye visibility for elements.
<br><code>visible</code><br><code>hidden</code>
"></i></td>
  </tr>

  <tr data-property="bullseye-size">
    <td>bullseye-size</td>
    <td><i class="fa fa-check"></i></td>
    <td></td>
    <td></td>
    <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls the bullseye size for elements.
<br><code>0..1</code>
"></i></td>
  </tr>

  <tr data-property="bullseye-color">
    <td>bullseye-color</td>
    <td><i class="fa fa-check"></i></td>
    <td></td>
    <td></td>
    <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls the bullseye color for elements.
<br><code>color</code>
"></i></td>
  </tr>

  <tr data-property="bullseye-opacity">
    <td>bullseye-opacity</td>
    <td><i class="fa fa-check"></i></td>
    <td></td>
    <td></td>
    <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls the bullseye opacity for elements.
<br><code>0..1</code>
"></i></td>
  </tr>

  <tr data-property="color">
    <td>color</td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-check"></i></td>
    <td></td>
    <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls color of elements and connections
<br><code>color</code><br>
Additional option for connections only:
<br><code>gradient(color1, color2)</code>
"></i></td>
  </tr>

  <tr data-property="curvature">
    <td>curvature</td>
    <td></td>
    <td><i class="fa fa-check"></i></td>
    <td></td>
    <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls the curvature of connections.
<br><code>0..1</code>
"></i></td>
  </tr>

  <tr data-property="delay-visibility">
    <td>delay-visibility</td>
    <td></td>
    <td><i class="fa fa-check"></i></td>
    <td></td>
    <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls delay visibility for delayed connections.
<br><code>visible</code><br><code>hidden</code>
"></i></td>
  </tr>

  <tr data-property="display">
    <td>display</td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls general inclusion.
Hidden objects will be fully removed from the map (see visibility).
<br><code>map</code><br><code>none</code>
"></i></td>
  </tr>

  <tr data-property="flag">
    <td>flag</td>
    <td><i class="fa fa-check"></i></td>
    <td></i></td>
    <td></i></td>
    <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Defines field and color scale for flags.
<br><code>'Field' with colorPalette</code>
"></i></td>
  </tr>

  <tr data-property="flag-offset">
    <td>flag-offset</td>
    <td><i class="fa fa-check"></i></td>
    <td></i></td>
    <td></i></td>
    <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls space between flags and their elements.
<br><code>number</code>
"></i></td>
  </tr>

  <tr data-property="flag-size">
    <td>flag-size</td>
    <td><i class="fa fa-check"></i></td>
    <td></i></td>
    <td></i></td>
    <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls thickness of flags.
<br><code>number</code>
"></i></td>
  </tr>

  <tr data-property="font-color">
    <td>font-color</td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls general label font color.
<br><code>color</code>
"></i></td>
  </tr>

  <tr data-property="font-family">
    <td>font-family</td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls general label font family.
<br><code>'Helvetica Neue', sans-serif</code>
"></i></td>
  </tr>

  <tr data-property="font-size">
    <td>font-size</td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls general label font size.
<br><code>number</code>
"></i></td>
  </tr>

  <tr data-property="font-style">
    <td>font-style</td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls general label style.
<br><code>normal</code><br><code>italic</code>
"></i></td>
  </tr>

  <tr data-property="font-weight">
    <td>font-weight</td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls general label font weight.
<br><code>normal</code><br><code>bold</code>
"></i></td>
  </tr>

  <tr data-property="height">
    <td>height</td>
    <td><i class="fa fa-check"></i></td>
    <td></td>
    <td></td>
    <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls height of elements that are squares and/or rectangles
<br><code>auto</code><br><code>number</code>
"></i></td>
  </tr>

  <tr data-property="image-url">
    <td>image-url</td>
    <td><i class="fa fa-check"></i></td>
    <td></td>
    <td></td>
    <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls source of element image
<br><code>url(http://...)</code>
"></i></td>
  </tr>

  <tr data-property="image-size">
    <td>image-size</td>
    <td><i class="fa fa-check"></i></td>
    <td></td>
    <td></td>
    <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls element image size
<br><code>cover</code><br><code>contain</code>
"></i></td>
  </tr>

  <tr data-property="image-visibility">
    <td>image-visibility</td>
    <td><i class="fa fa-check"></i></td>
    <td></td>
    <td></td>
    <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls element image visibility
<br><code>visible</code><br><code>hidden</code>
"></i></td>
  </tr>

  <tr data-property="label-visibility">
    <td>label-visibility</td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls label visibility for all types.
<br><code>visible</code><br><code>hidden</code>
"></i></td>
  </tr>

  <tr data-property="length">
    <td>length</td>
    <td></td>
    <td><i class="fa fa-check"></i></td>
    <td></td>
    <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls connection resting length
<br><code>number</code>
"></i></td>
  </tr>

  <tr data-property="margin">
    <td>margin</td>
    <td><i class="fa fa-check"></i></td>
    <td></td>
    <td></td>
    <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls amount of space between the border of an element
and its connections.
<br><code>number</code><br><code>none</code>
"></i></td>
  </tr>

  <tr data-property="opacity">
    <td>opacity</td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-check"></i></td>
    <td></td>
    <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls general element and connection opacity.
<br><code>0..1</code>
"></i></td>
  </tr>

  <tr data-property="padding">
    <td>padding</td>
    <td><i class="fa fa-check"></i></td>
    <td></td>
    <td></td>
    <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls amount of space between the border of an element
and its core (image / bullseye).
<br><code>number</code>
"></i></td>
  </tr>

  <tr data-property="path-opacity">
    <td>path-opacity</td>
    <td></td>
    <td><i class="fa fa-check"></i></td>
    <td></td>
    <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls the opacity of connections.
<br><code>0..1</code>
"></i></td>
  </tr>

  <tr data-property="pattern">
    <td>pattern</td>
    <td></td>
    <td><i class="fa fa-check"></i></td>
    <td></td>
    <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls the pattern of a connection.
<br><code>solid</code><br><code>dashed</code>
"></i></td>
  </tr>

  <tr data-property="pointer-events">
    <td>pointer-events</td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls whether or not an item can be clicked.
<br><code>auto</code><br><code>none</code>
"></i></td>
  </tr>

  <tr data-property="scale">
    <td>scale</td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-check"></i></td>
    <td></td>
    <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls element and connection scale (multiple of base size).
<br><code>number</code>
"></i></td>
  </tr>

  <tr data-property="size">
    <td>size</td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-check"></i></td>
    <td></td>
    <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls the base element and and connection size.
<br><code>number</code>
"></i></td>
  </tr>

  <tr data-property="shadow-visibility">
    <td>shadow-visibility</td>
    <td><i class="fa fa-check"></i></td>
    <td></td>
    <td></td>
    <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls element shadow visibility
<br><code>visible</code><br><code>hidden</code>
"></i></td>
  </tr>

  <tr data-property="shadow-size">
    <td>shadow-size</td>
    <td><i class="fa fa-check"></i></td>
    <td></td>
    <td></td>
    <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls element shadow size.
<br><code>1..5</code>
"></i></td>
  </tr>

  <tr data-property="shadow-color">
    <td>shadow-color</td>
    <td><i class="fa fa-check"></i></td>
    <td></td>
    <td></td>
    <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls element shadow color.
<br><code>color</code>
"></i></td>
  </tr>

  <tr data-property="shadow-opacity">
    <td>shadow-opacity</td>
    <td><i class="fa fa-check"></i></td>
    <td></td>
    <td></td>
    <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls element shadow opacity.
<br><code>0..1</code>
"></i></td>
  </tr>

   <tr data-property="shape">
    <td>shape</td>
    <td><i class="fa fa-check"></i></td>
    <td></button></td>
    <td></td>
    <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls element shape.
<br><code>circle</code><br><code>square</code><br><code>rectangle</code>
"></i></button></td>
  </tr>

  <tr data-property="strength">
    <td>strength</td>
    <td></td>
    <td><i class="fa fa-check"></i></td>
    <td></td>
    <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls connection strength.
<br><code>0..1</code>
"></i></td>
  </tr>

  <tr data-property="style">
    <td>style</td>
    <td></td>
    <td><i class="fa fa-check"></i></td>
    <td></td>
    <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls connection style.
<br><code>solid</code><br><code>dashed</code>
"></i></td>
  </tr>

  <tr data-property="text-align">
    <td>text-align</td>
    <td><i class="fa fa-check"></i></td>
    <td></td>
    <td></td>
    <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls alignment of element labels.
<br><code>bottom</code><br><code>center</code>
"></i></td>
  </tr>

  <tr data-property="text-overflow">
    <td>text-overflow</td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls text wrapping and truncating.
<br><code>off</code><br><code>auto</code><br><code>manual</code><br><code>wrap</code><br><code>wrap [number]</code><br><code>clip</code><br><code>clip [number]</code>
"></i></td>
  </tr>

  <tr data-property="visibility">
    <td>visibility</td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls general visibility.
Hidden objects will still affect the layout.
<br><code>visible</code><br><code>hidden</code>
"></i></td>
  </tr>

  <tr data-property="width">
    <td>width</td>
    <td><i class="fa fa-check"></i></td>
    <td></td>
    <td></td>
    <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls width of elements that are squares and/or rectangles
<br><code>auto</code><br><code>number</code>
"></i></td>
  </tr>

</tbody></table>

<script type="text/javascript">

function searchProperties() {
    let searchBox, searchTerm, table, rows, i, cells, textToSearch;

    searchBox = document.querySelector("#search-box");
    searchTerm = searchBox.value.toLowerCase();
    table = document.querySelector("#search-table");
    rows = table.querySelectorAll("tr");

    for(i = 1; i < rows.length; i++) {
        cell = rows[i].querySelector("td");
        textToSearch = cell.innerHTML.toLowerCase();

        if(textToSearch.indexOf(searchTerm) > -1) {
            rows[i].style.display = "table-row";
        } else {
            rows[i].style.display = "none";
        }
    }
}

</script>

### @settings Supported Properties

@settings properties are best grouped into a number of categories based on what they can control.

**Map transformations**

* focus (selector, prompt)
* filter
* cluster
* showcase
* culling

**Labels**

* text-overflow (off, auto, manual, wrap, clip)

**Grids & guides**

* grid
* grid-width
* grid-offset
* grid-color
* guides
* guide-width
* guide-color

<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/guides/property-reference.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
