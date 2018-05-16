
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

The table belows lists all of the properties recognized by Kumu. Hover over the information icon at the far right to see additional details and available values for each property. Scroll to the bottom for a list of available @settings properties.

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

<table id="search-table" class="property-table table">
  <tbody><tr>
    <th class="text-left">Property</th>
    <th class="text-center">Elements</th>
    <th class="text-center">Connections</th>
    <th class="text-center">Loops</th>
    <th class="text-center"></th>
  </tr>

  <tr data-property="arrow-color">
    <td>arrow-color</td>
    <td><i class="fa fa-cancel"></i></td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-cancel"></i></td>
    <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Override the arrow color for a connection.
<code>color</code>
"></i></td>
  </tr>

  <tr data-property="arrow-visibility">
    <td>arrow-visibility</td>
    <td><i class="fa fa-cancel"></i></td>
    <td><i class="fa fa-check"></i></button></td>
    <td><i class="fa fa-cancel"></i></td>
    <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls arrow visibility for directed connections.
<code>visible|hidden</code>
"></i></button></td>
  </tr>

  <tr data-property="border-color">
    <td>border-color</td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-cancel"></i></td>
    <td><i class="fa fa-cancel"></i></td>
    <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls border color for elements.
<code>color</code>
"></i></td>
  </tr>

  <tr data-property="border-width">
    <td>border-width</td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-cancel"></i></td>
    <td><i class="fa fa-cancel"></i></td>
    <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls border width for elements.
<code>number</code>
"></i></td>
  </tr>

  <tr data-property="bullseye-visibility">
    <td>bullseye-visibility</td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-cancel"></i></td>
    <td><i class="fa fa-cancel"></i></td>
    <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls the bullseye visibility for elements.
<code>visible|hidden</code>
"></i></td>
  </tr>

  <tr data-property="bullseye-size">
    <td>bullseye-size</td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-cancel"></i></td>
    <td><i class="fa fa-cancel"></i></td>
    <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls the bullseye size for elements.
<code>0..1</code>
"></i></td>
  </tr>

  <tr data-property="bullseye-color">
    <td>bullseye-color</td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-cancel"></i></td>
    <td><i class="fa fa-cancel"></i></td>
    <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls the bullseye color for elements.
<code>color</code>
"></i></td>
  </tr>

  <tr data-property="bullseye-opacity">
    <td>bullseye-opacity</td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-cancel"></i></td>
    <td><i class="fa fa-cancel"></i></td>
    <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls the bullseye opacity for elements.
<code>0..1</code>
"></i></td>
  </tr>

  <tr data-property="color">
    <td>color</td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-cancel"></i></td>
    <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls color of elements and connections
<code>color</code>
"></i></td>
  </tr>

  <tr data-property="curvature">
    <td>curvature</td>
    <td><i class="fa fa-cancel"></i></td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-cancel"></i></td>
    <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls the curvature of connections.
<code>0..1</code>
"></i></td>
  </tr>

  <tr data-property="delay-visibility">
    <td>delay-visibility</td>
    <td><i class="fa fa-cancel"></i></td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-cancel"></i></td>
    <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls delay visibility for delayed connections.
<code>visible|hidden</code>
"></i></td>
  </tr>

  <tr data-property="display">
    <td>display</td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls general inclusion.
Hidden objects will be fully removed from the map (see visibility).
<code>map|none</code>
"></i></td>
  </tr>

  <tr data-property="font-color">
    <td>font-color</td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls general label font color.
<code>color</code>
"></i></td>
  </tr>

  <tr data-property="font-family">
    <td>font-family</td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls general label font family.
<code>'Helvetica Neue', sans-serif</code>
"></i></td>
  </tr>

  <tr data-property="font-size">
    <td>font-size</td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls general label font size.
<code>number</code>
"></i></td>
  </tr>

  <tr data-property="font-style">
    <td>font-style</td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls general label style.
<code>normal|italic</code>
"></i></td>
  </tr>

  <tr data-property="font-weight">
    <td>font-weight</td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls general label font weight.
<code>normal|bold</code>
"></i></td>
  </tr>

  <tr data-property="height">
    <td>height</td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-cancel"></i></td>
    <td><i class="fa fa-cancel"></i></td>
    <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls height of elements that are squares and/or rectangles
<code>auto|number</code>
"></i></td>
  </tr>

  <tr data-property="image-url">
    <td>image-url</td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-cancel"></i></td>
    <td><i class="fa fa-cancel"></i></td>
    <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls source of element image
<code>url(http://...)</code>
"></i></td>
  </tr>

  <tr data-property="image-size">
    <td>image-size</td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-cancel"></i></td>
    <td><i class="fa fa-cancel"></i></td>
    <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls element image size
<code>cover|contain</code>
"></i></td>
  </tr>

  <tr data-property="image-visibility">
    <td>image-visibility</td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-cancel"></i></td>
    <td><i class="fa fa-cancel"></i></td>
    <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls element image visibility
<code>visible|hidden</code>
"></i></td>
  </tr>

  <tr data-property="label-visibility">
    <td>label-visibility</td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls label visibility for all types.
<code>visible|hidden</code>
"></i></td>
  </tr>

  <tr data-property="length">
    <td>length</td>
    <td><i class="fa fa-cancel"></i></td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-cancel"></i></td>
    <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls connection resting length
<code>number</code>
"></i></td>
  </tr>

  <tr data-property="margin">
    <td>margin</td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-cancel"></i></td>
    <td><i class="fa fa-cancel"></i></td>
    <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls amount of space between the border of an element
and its connections.
<code>number|none</code>
"></i></td>
  </tr>

  <tr data-property="opacity">
    <td>opacity</td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-cancel"></i></td>
    <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls general element and connection opacity.
<code>0..1</code>
"></i></td>
  </tr>

  <tr data-property="padding">
    <td>padding</td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-cancel"></i></td>
    <td><i class="fa fa-cancel"></i></td>
    <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls amount of space between the border of an element
and its core (image / bullseye).
<code>number</code>
"></i></td>
  </tr>

  <tr data-property="pattern">
    <td>pattern</td>
    <td><i class="fa fa-cancel"></i></td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-cancel"></i></td>
    <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls the pattern of a connection (solid / dashed).
<code>number</code>
"></i></td>
  </tr>

  <tr data-property="scale">
    <td>scale</td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-cancel"></i></td>
    <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls element and connection scale (multiple of base size).
<code>number</code>
"></i></td>
  </tr>

  <tr data-property="size">
    <td>size</td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-cancel"></i></td>
    <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls the base element and and connection size.
<code>number</code>
"></i></td>
  </tr>

  <tr data-property="shadow-visibility">
    <td>shadow-visibility</td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-cancel"></i></td>
    <td><i class="fa fa-cancel"></i></td>
    <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls element shadow visibility
<code>visible|hidden</code>
"></i></td>
  </tr>

  <tr data-property="shadow-size">
    <td>shadow-size</td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-cancel"></i></td>
    <td><i class="fa fa-cancel"></i></td>
    <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls element shadow size.
<code>1..5</code>
"></i></td>
  </tr>

  <tr data-property="shadow-color">
    <td>shadow-color</td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-cancel"></i></td>
    <td><i class="fa fa-cancel"></i></td>
    <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls element shadow color.
<code>color</code>
"></i></td>
  </tr>

  <tr data-property="shadow-opacity">
    <td>shadow-opacity</td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-cancel"></i></td>
    <td><i class="fa fa-cancel"></i></td>
    <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls element shadow opacity.
<code>0..1</code>
"></i></td>
  </tr>

   <tr data-property="shape">
    <td>shape</td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-cancel"></i></button></td>
    <td><i class="fa fa-cancel"></i></td>
    <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls element shape.
<code>circle|square|rectangle</code>
"></i></button></td>
  </tr>

  <tr data-property="strength">
    <td>strength</td>
    <td><i class="fa fa-cancel"></i></td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-cancel"></i></td>
    <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls connection strength.
<code>0..1</code>
"></i></td>
  </tr>

  <tr data-property="style">
    <td>style</td>
    <td><i class="fa fa-cancel"></i></td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-cancel"></i></td>
    <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls connection style.
<code>solid|dashed</code>
"></i></td>
  </tr>

  <tr data-property="text-align">
    <td>text-align</td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-cancel"></i></td>
    <td><i class="fa fa-cancel"></i></td>
    <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls alignment of element labels.
<code>bottom|center</code>
"></i></td>
  </tr>

  <tr data-property="visibility">
    <td>visibility</td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls general visibility.
Hidden objects will still affect the layout.
<code>visible|hidden</code>
"></i></td>
  </tr>

  <tr data-property="width">
    <td>width</td>
    <td><i class="fa fa-check"></i></td>
    <td><i class="fa fa-cancel"></i></td>
    <td><i class="fa fa-cancel"></i></td>
    <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls width of elements that are squares and/or rectangles
<code>auto|number</code>
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
