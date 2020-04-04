# Controls reference

While it's possible to [build controls using the Basic Editor](/guides/controls.md#add-controls-through-the-basic-editor), using the [Advanced Editor](/overview/view-editors.md#advanced-editor) is the only way to unlock the full flexibility of controls. This guide lists each `property` that can be used in the Advanced Editor, each possible `value` the properties can accept, and which `@controls` can recognize the properties and values.

There are two reference tables in this guide—the first lists properties for **static** controls (nothing happens when map readers click on these controls), and the second lists properties for **interactive** controls (map readers can interact with the map by clicking on these controls).

Hover over the information icon <i class="fa fa-info-circle" data-placement="left" data-html="true" title="I ❤︎ information!"></i> at the far right of the table rows to see additional details and valid values for each property (when there are multiple valid values, we've listed them as separate snippets of `inline code`). All values are unitless.

If you find a property or a value that's not documented here, [let us know](mailto:support@kumu.io)!

[Jump to the reference for interactive controls](#interactive-controls).

<!-- TODO: document children properties -->

## Static controls

<input type="text" id="static-search-box" class="search-box" onkeyup="searchProperties('static')" placeholder="Type to filter...">

<table id="static-search-table" class="table borderless controls-reference">
  <tbody>
    <tr>
      <th class="text-left">Property</th>
      <th class="text-center">Color-legend</th>
      <th class="text-center">Image</th>
      <th class="text-center">Label</th>
      <th class="text-center">Text</th>
      <th class="text-center">Title</th>
      <th class="text-center">SNA-dasboard</th>
      <th class="text-center"></th>
    </tr>
    <tr>
      <td>background-color</td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Defines background color of control
  <br><code>color</code>
  "</i></td>
    </tr>
    <tr>
      <td>color</td>
      <td><i class="fa fa-check"></i></td>
      <td></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Defines color of control's text
  <br><code>color</code>
  "</i></td>
    </tr>
    <tr>
      <td>font-family</td>
      <td><i class="fa fa-check"></i></td>
      <td></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-check"></i></td>
      <td></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Defines font family of control's text
  <br><code>family-name</code><br><code>generic-family</code>
  "</i></td>
    </tr>
    <tr>
      <td>font-size</td>
      <td></td>
      <td></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-check"></i></td>
      <td></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Defines size of control's text
  <br><code>number</code>
  "</i></td>
    </tr>
    <tr>
      <td>font-style</td>
      <td><i class="fa fa-check"></i></td>
      <td></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Defines style of control's text
  <br><code>normal</code><br><code>italic</code>
  "</i></td>
    </tr>
    <tr>
      <td>font-weight</td>
      <td><i class="fa fa-check"></i></td>
      <td></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-check"></i></td>
      <td></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Defines weight of control's text
  <br><code>number</code>
  "</i></td>
    </tr>
    <tr>
      <td>height</td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Defines height of control
  <br><code>number</code>
  "</i></td>
    </tr>
    <tr>
      <td>label</td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Adds a label above the control
  <br><code>'My Label'</code>
  "</i></td>
    </tr>
    <tr>
      <td>margin</td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Defines space between the control and other controls on the map
  <br><code>number</code>
  "</i></td>
    </tr>
    <tr>
      <td>metrics</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Defines which metrics will be included in the dashboard
  <br><code>element-count</code><br><code>connection-count</code><br><code>density</code><br><code>reciprocity</code><br><code>diameter</code><br><code>average-degree</code><br><code>average-path-length</code>
  "</i></td>
    </tr>
    <tr>
      <td>opacity</td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Defines opacity of the control
  <br><code>0..1</code>
  "</i></td>
    </tr>
    <tr>
      <td>padding</td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Defines space between the control's border and its contents
  <br><code>number</code>
  "</i></td>
    </tr>
    <tr>
      <td>src</td>
      <td></td>
      <td><i class="fa fa-check"></i></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Defines the source of the image
  <br><code>url</code>
  "</i></td>
    </tr>
    <tr>
      <td>text-align</td>
      <td></td>
      <td></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Defines alignment of text within the control
  <br><code>center</code><br><code>left</code><br><code>right</code>
  "</i></td>
    </tr>
    <tr>
      <td>value</td>
      <td></td>
      <td></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-check"></i></td>
      <td></td>
      <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Any plain text string. Markdown and some HTML are allowed.
  <br><code>string</code>
  <br><br>Text controls recognize some inline HTML
  "</i></td>
    </tr>
    <tr>
      <td>width</td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-check"></i></td>
      <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Defines width of control
  <br><code>number</code>
  "</i></td>
    </tr>
  </tbody>
</table>


## Interactive controls

<input type="text" id="interactive-search-box" class="search-box" onkeyup="searchProperties('interactive')" placeholder="Type to filter...">

<table id="interactive-search-table" class="controls-reference table borderless">
  <tbody>
        <tr>
          <th class="text-left">Property</th>
          <th class="text-center">Filter</th>
          <th class="text-center">Showcase</th>
          <th class="text-center">Cluster</th>
          <th class="text-center">Tagged-timeline</th>
          <th class="text-center">View toggle</th>
          <th class="text-center"></th>
        </tr>
        <tr>
          <td>as</td>
          <td><i class="fa fa-check"></i></td>
          <td><i class="fa fa-check"></i></td>
          <td><i class="fa fa-check"></i></td>
          <td><i class="fa fa-check"></i></td>
          <td><i class="fa fa-check"></i></td>
          <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Defines how the control is presented
      <br><code>labels</code><br><code>buttons</code><br><code>dots</code><br><code>dropdown</code>
      "</i></td>
        </tr>
        <tr>
          <td>background-color</td>
          <td><i class="fa fa-check"></i></td>
          <td><i class="fa fa-check"></i></td>
          <td><i class="fa fa-check"></i></td>
          <td><i class="fa fa-check"></i></td>
          <td></td>
          <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Defines background color of control
      <br><code>color</code>
      "</i></td>
        </tr>
        <tr>
          <td>by</td>
          <td><i class="fa fa-check"></i></td>
          <td><i class="fa fa-check"></i></td>
          <td><i class="fa fa-check"></i></td>
          <td></td>
          <td></td>
          <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Defines the field to filter, showcase, or cluster by
      <br><code>'Field Name'</code>
      "</i></td>
        </tr>
        <tr>
          <td>color</td>
          <td><i class="fa fa-check"></i></td>
          <td><i class="fa fa-check"></i></td>
          <td><i class="fa fa-check"></i></td>
          <td><i class="fa fa-check"></i></td>
          <td><i class="fa fa-check"></i></td>
          <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Defines color of control's text (labels, placeholders, and summaries only)
      <br><code>color</code>
      "</i></td>
        </tr>
        <tr>
          <td>default</td>
          <td><i class="fa fa-check"></i></td>
          <td><i class="fa fa-check"></i></td>
          <td></td>
          <td><i class="fa fa-check"></i></td>
          <td><i class="fa fa-check"></i></td>
          <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Defines which options should be selected by default
      <br><code>none</code><br><code>show-all</code><br><code>select all</code><br><code>'field value 1', 'field value 2',...</code>
      "</i></td>
        </tr>
        <tr>
          <td>except</td>
          <td><i class="fa fa-check"></i></td>
          <td><i class="fa fa-check"></i></td>
          <td></td>
          <td></td>
          <td></td>
          <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Allows you to remove field values from the available choices
      <br><code>'field value 1', 'field value 2',...</code>
      "</i></td>
        </tr>
        <tr>
          <td>font-family</td>
          <td><i class="fa fa-check"></i></td>
          <td><i class="fa fa-check"></i></td>
          <td><i class="fa fa-check"></i></td>
          <td><i class="fa fa-check"></i></td>
          <td><i class="fa fa-check"></i></td>
          <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Defines font family of control's text (labels, placeholders, and summaries only)
      <br><code>family-name</code><br><code>generic-family</code>
      "</i></td>
        </tr>
        <tr>
          <td>font-size</td>
          <td><i class="fa fa-check"></i></td>
          <td><i class="fa fa-check"></i></td>
          <td><i class="fa fa-check"></i></td>
          <td><i class="fa fa-check"></i></td>
          <td><i class="fa fa-check"></i></td>
          <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Defines size of control's text (labels, placeholders, and summaries only)
      <br><code>number</code>
      "</i></td>
        </tr>
        <tr>
          <td>font-style</td>
          <td><i class="fa fa-check"></i></td>
          <td><i class="fa fa-check"></i></td>
          <td><i class="fa fa-check"></i></td>
          <td><i class="fa fa-check"></i></td>
          <td><i class="fa fa-check"></i></td>
          <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Defines style of control's text (labels, placeholders, and summaries only)
      <br><code>normal</code><br><code>italic</code>
      "</i></td>
        </tr>
        <tr>
          <td>font-weight</td>
          <td><i class="fa fa-check"></i></td>
          <td><i class="fa fa-check"></i></td>
          <td><i class="fa fa-check"></i></td>
          <td><i class="fa fa-check"></i></td>
          <td><i class="fa fa-check"></i></td>
          <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Defines weight of control's text (labels, placeholders, and summaries only)
      <br><code>number</code>
      "</i></td>
        </tr>
        <tr>
          <td>height</td>
          <td><i class="fa fa-check"></i></td>
          <td><i class="fa fa-check"></i></td>
          <td><i class="fa fa-check"></i></td>
          <td><i class="fa fa-check"></i></td>
          <td><i class="fa fa-check"></i></td>
          <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Defines height of control
      <br><code>number</code>
      "</i></td>
        </tr>
        <tr>
          <td>margin</td>
          <td><i class="fa fa-check"></i></td>
          <td><i class="fa fa-check"></i></td>
          <td><i class="fa fa-check"></i></td>
          <td><i class="fa fa-check"></i></td>
          <td><i class="fa fa-check"></i></td>
          <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Defines space between the control and other controls on the map
      <br><code>number</code>
      "</i></td>
        </tr>
        <tr>
          <td>mode</td>
          <td></td>
          <td><i class="fa fa-check"></i></td>
          <td></td>
          <td></td>
          <td></td>
          <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls how the selection is showcased. <code>normal</code> is the default and showcases the selection plus any connections between the showcased elements. <code>loose</code> showcases the selection plus neighboring elements. <code>strict</code> only showcases the selection itself.
      <br><code>normal</code><br><code>loose</code><br><code>strict</code>
      "</i></td>
        </tr>
        <tr>
          <td>multiple</td>
          <td><i class="fa fa-check"></i></td>
          <td><i class="fa fa-check"></i></td>
          <td><i class="fa fa-check"></i></td>
          <td><i class="fa fa-check"></i></td>
          <td><i class="fa fa-check"></i></td>
          <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Controls whether more than one option can be selected at a time
      <br><code>TRUE</code><br><code>FALSE</code>
      "</i></td>
        </tr>
        <tr>
          <td>only</td>
          <td><i class="fa fa-check"></i></td>
          <td><i class="fa fa-check"></i></td>
          <td></td>
          <td></td>
          <td></td>
          <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Allows you to explicitly define which field values should be included as available choices
      <br><code>'field value 1', 'field value 2',...</code>
      "</i></td>
        </tr>
        <tr>
          <td>opacity</td>
          <td><i class="fa fa-check"></i></td>
          <td><i class="fa fa-check"></i></td>
          <td><i class="fa fa-check"></i></td>
          <td><i class="fa fa-check"></i></td>
          <td><i class="fa fa-check"></i></td>
          <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Defines opacity of the control
      <br><code>0..1</code>
      "</i></td>
        </tr>
        <tr>
          <td>options</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td><i class="fa fa-check"></i></td>
          <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Allows you to explicitly define which options should be included as available choices
      <br><code>'partial-view-1', 'partial-view-2',...</code>
      "</i></td>
        </tr>
        <tr>
          <td>padding</td>
          <td><i class="fa fa-check"></i></td>
          <td><i class="fa fa-check"></i></td>
          <td><i class="fa fa-check"></i></td>
          <td><i class="fa fa-check"></i></td>
          <td><i class="fa fa-check"></i></td>
          <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Defines space between the control's border and its contents
      <br><code>number</code>
      "</i></td>
        </tr>
        <tr>
          <td>placeholder</td>
          <td><i class="fa fa-check"></i></td>
          <td><i class="fa fa-check"></i></td>
          <td><i class="fa fa-check"></i></td>
          <td><i class="fa fa-check"></i></td>
          <td><i class="fa fa-check"></i></td>
          <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="The text to display when nothing is selected<br>(for <code>as: dropdown</code> only)
      <br><code>string</code>
      "</i></td>
        </tr>
        <tr>
          <td>range</td>
          <td></td>
          <td></td>
          <td></td>
          <td><i class="fa fa-check"></i></td>
          <td></td>
          <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Defines the years that should be included
      <br><code>year..year</code>
      "</i></td>
        </tr>
        <tr>
          <td>summary</td>
          <td><i class="fa fa-check"></i></td>
          <td><i class="fa fa-check"></i></td>
          <td><i class="fa fa-check"></i></td>
          <td><i class="fa fa-check"></i></td>
          <td><i class="fa fa-check"></i></td>
          <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Summarizes the options that have been selected<br>(for <code>as: dropdown</code> only)
      <br><code>string</code>
      "</i></td>
        </tr>
        <tr>
          <td>target</td>
          <td><i class="fa fa-check"></i></td>
          <td><i class="fa fa-check"></i></td>
          <td></td>
          <td><i class="fa fa-check"></i></td>
          <td></td>
          <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Defines whether the filter should apply to elements, connections, or loops.
      <br><code>selector</code>
      "</i></td>
        </tr>
        <tr>
          <td>width</td>
          <td><i class="fa fa-check"></i></td>
          <td><i class="fa fa-check"></i></td>
          <td><i class="fa fa-check"></i></td>
          <td><i class="fa fa-check"></i></td>
          <td><i class="fa fa-check"></i></td>
          <td><i class="fa fa-info-circle" data-placement="left" data-html="true" title="Defines width of control
      <br><code>number</code>
      "</i></td>
        </tr>
  </tbody>
</table>

<script type="text/javascript">

function searchProperties(tableName) {
    let searchBox, searchTerm, table, rows, i, cells, textToSearch;

    searchBox = document.querySelector("#"+ tableName + "-search-box");
    searchTerm = searchBox.value.toLowerCase();
    table = document.querySelector("#"+ tableName + "-search-table");
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

<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/guides/controls/controls-reference.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
