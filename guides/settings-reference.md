# @settings reference

In the [Advanced Editor](/overview/view-editors.html#advanced-editor), the `@settings` block can be used to tweak default settings and add all kinds of powerful features to your view.

The `@settings` block supports all decoration properties listed in the [property reference](/guides/property-reference.html), as long as you prefix each property with one of the following:
- `*-` if you want to apply the rule to all items
- `element-` to apply the rule to elements only
- `connection-` to apply the rule to connections only
- `loop-` to apply the rule to loops only

But, `@settings` also supports its own list of exclusive properties. The table below lists all properties that can be used exclusively inside an `@settings` block, describes their effect on the view, and lists valid values for each property (when there are multiple valid values, we've listed them as separate snippets of `inline code`).

There are just few more things you should know about the valid values listed below:

<table class="table border-bottom">
  <tbody>
    <tr>
      <th>Where you see...</th>
      <th>You can use...</th>
    </tr>
    <tr>
      <td><code>selector</code></td>
      <td>Any <a href="/guides/selectors.html">selector</a></td>
    </tr>
    <tr>
      <td><code>color</code></td>
      <td>Any CSS web color or hex color code</td>
    </tr>
    <tr>
      <td><code>number</code></td>
      <td>Any number</td>
    </tr>
    <tr>
      <td><code>'field name'</code></td>
      <td>The name of any of your <a href="/guides/fields.html">fields</a>, wrapped in single or double quotes</td>
    </tr>
    <tr>
      <td><code>element type</code></td>
      <td>Any text/string value</td>
    </tr>
  </tbody>
</table>

All values are unitless.


## Supported properties

<input type="text" id="settings-search-box" class="search-box" onkeyup="searchProperties('settings')" placeholder="Type to filter...">

<style>
  th:first-child {
    width: 200px;
  }

  td:nth-child(3) div:not(:first-child) {
    margin-top: 1.5rem;
  }
</style>

<table id="settings-search-table" class="table border-bottom">
  <tbody>
    <tr>
      <th class="text-left">Property</th>
      <th class="text-left">Description</th>
      <th class="text-left">Possible values</th>
    </tr>
    <tr>
      <td>attenuation</td>
      <td>Determines whether elements and connections maintain their size relative to the background map (available for the Geo template only)</td>
      <td><div><code>on</code></div><div><code>off</code></div></td>
    </tr>
    <tr>
      <td>background-color</td>
      <td>Sets the canvas' background color</td>
      <td><div><code>color</code></div></td>
    </tr>
    <tr>
      <td>background-opacity</td>
      <td>Sets the opacity of items outside of a showcased selection</td>
      <td><div><code>0..1</code></div></td>
    </tr>
    <tr>
      <td>bridge</td>
      <td>Activates bridging. See the <a href="/guides/bridge.html#bridge-in-the-advanced-editor">bridge guide</a> for more information.</td>
      <td><div><code>element-selector</code></div></td>
    </tr>
    <tr>
      <td>cluster</td>
      <td>Activates clustering. See the <a href="/guides/clustering.html#activate-clustering-in-the-advanced-editor">cluster guide</a> for more information.</td>
      <td><div><code>'field name'</code></div><div><code>element-selector by 'field name'</code></div><div><code>element-selector by 'field name' as 'element type'</code></div></td>
    </tr>
    <tr>
      <td>culling</td>
      <td>Determines whether elements and connections are hidden when the reader zooms in very close</td>
      <td><div><code>on</code></div><div><code>off</code></div></td>
    </tr>
    <tr>
      <td>focus</td>
      <td>Activates focus. See the <a href="/guides/focus.html#activate-focus-in-the-advanced-editor">focus guide</a> for more information.</td>
      <td><div><code>selector out number</code></div></td>
    </tr>
    <tr>
      <td>focus-direction</td>
      <td>Specifies which connections should be included in focus. See the <a href="/guides/focus.html#focus-direction">focus guide</a> for more information.</td>
      <td><div><code>in</code></div><div><code>out</code></div><div><code>all</code></div></td>
    </tr>
    <tr>
      <td>font-cutoff</td>
      <td>Sets the minimum font size at which labels will display when the map is zoomed out. Set to <code>0</code> to always display labels, regardless of zoom level.</td>
      <td><div><code>number</code></div></td>
    </tr>
    <tr>
      <td>foreground-opacity</td>
      <td>Sets the opacity of showcased items </td>
      <td><div><code>0..1</code></div></td>
    </tr>
    <tr>
      <td>geo-location</td>
      <td>Sets the field that will be used to geo-locate elements</td>
      <td><div><code>'field name'</code></div><div><code>string-template</code></div></td>
    </tr>
    <tr>
      <td>geo-style</td>
      <td>Sets the style of the geo map</td>
      <td><div><code>auto</code></div><div><code>streets</code></div><div><code>satellite</code></div></td>
    </tr>
    <tr>
      <td>ignore</td>
      <td>Ignores a selection. See the <a href="/guides/filter.html#filter-in-the-advanced-editor">filter guide</a> for more information.</td>
      <td><div><code>selector</code></div></td>
    </tr>
    <tr>
      <td>include</td>
      <td>Includes a selection. See the <a href="/guides/filter.html#filter-in-the-advanced-editor">filter guide</a> for more information.</td>
      <td><div><code>selector</code></div></td>
    </tr>
    <tr>
      <td>layout</td>
      <td>Sets the layout type</td>
      <td><div><code>force</code></div><div><code>static</code></div><div><code>scatter</code></div></td>
    </tr>
    <tr>
      <td>layout-bounds-xmax</td>
      <td>Sets a maximum x coordinate that grid and guide lines can extend to</td>
      <td><div><code>number</code></div></td>
    </tr>
    <tr>
      <td>layout-bounds-xmin</td>
      <td>Sets a minimum x coordinate that grid and guide lines can extend to</td>
      <td><div><code>number</code></div></td>
    </tr>
    <tr>
      <td>layout-bounds-ymax</td>
      <td>Sets a maximum y coordinate that grid and guide lines can extend to</td>
      <td><div><code>number</code></div></td>
    </tr>
    <tr>
      <td>layout-bounds-ymin</td>
      <td>Sets a minimum y coordinate that grid and guide lines can extend to</td>
      <td><div><code>number</code></div></td>
    </tr>
    <tr>
      <td>layout-gravity</td>
      <td>Sets the gravity for the force-directed layout</td>
      <td><div><code>number</code></div></td>
    </tr>
    <tr>
      <td>layout-grid</td>
      <td>Determines whether a grid will be shown</td>
      <td><div><code>on</code></div><div><code>off</code></div></td>
    </tr>
    <tr>
      <td>layout-grid-color</td>
      <td>Sets the color of the grid</td>
      <td><div><code>color</code></div></td>
    </tr>
    <tr>
      <td>layout-grid-offset</td>
      <td>Sets the space between grid lines</td>
      <td><div><code>number</code></div></td>
    </tr>
    <tr>
      <td>layout-grid-width</td>
      <td>Sets the thickness of grid lines</td>
      <td><div><code>number</code></div></td>
    </tr>
    <tr>
      <td>layout-guide-color</td>
      <td>Sets the color of guide lines</td>
      <td><div><code>color</code></div></td>
    </tr>
    <tr>
      <td>layout-guide-width</td>
      <td>Sets the thickness of guide lines</td>
      <td><div><code>number</code></div></td>
    </tr>
    <tr>
      <td>layout-guides</td>
      <td>Sets the x or y coordinate for each guide line, or the origin and radius of a circle</td>
      <td><div><code>x(number)</code></div><div><code>y(number)</code></div><div><code>circle(x, y, r)</code></div><div><code>circle(r)</code></div></td>
    </tr>
    <tr>
      <td>layout-particle-charge</td>
      <td>Sets the particle charge for the force-directed layout</td>
      <td><div><code>number</code></div></td>
    </tr>
    <tr>
      <td>layout-preset</td>
      <td>Chooses a preset version of the force-directed layout</td>
      <td><div><code>auto</code></div><div><code>dense</code></div><div><code>hairball</code></div></td>
    </tr>
    <tr>
      <td>layout-spring-length</td>
      <td>Sets the spring length for the force-directed layout</td>
      <td><div><code>number</code></div></td>
    </tr>
    <tr>
      <td>layout-spring-strength</td>
      <td>Sets the spring strength for the force-directed layout</td>
      <td><div><code>number</code></div></td>
    </tr>
    <tr>
      <td>layout-x</td>
      <td>Sets the field used to determine elements' x coordinate in the scatter layout</td>
      <td><div><code>'field name'</code></div></td>
    </tr>
    <tr>
      <td>layout-x-multiplier</td>
      <td>Sets a number that will be multiplied by each elements <code>layout-x</code> field to determine their final x coordinate</td>
      <td><div><code>number</code></div></td>
    </tr>
    <tr>
      <td>layout-y</td>
      <td>Sets the field used to determine elements' x coordinate in the scatter layout</td>
      <td><div><code>'field name'</code></div></td>
    </tr>
    <tr>
      <td>layout-y-multiplier</td>
      <td>Sets a number that will be multiplied by each elements <code>layout-y</code> field to determine their final y coordinate</td>
      <td><div><code>number</code></div></td>
    </tr>
    <tr>
      <td>notification-color</td>
      <td>Sets the color of asterisks created by <a href="/guides/issues.html">Issues</a></td>
      <td><div><code>color</code></div></td>
    </tr>
    <tr>
      <td>profile</td>
      <td>Controls whether or not profiles can be opened</td>
      <td><div><code>on</code></div><div><code>off</code></div></td>
    </tr>
    <tr>
      <td>quality</td>
      <td>Sets the render quality</td>
      <td><div><code>fast</code></div><div><code>best</code></div></td>
    </tr>
    <tr>
      <td>radar</td>
      <td>Determines whether a radar will be shown</td>
      <td><div><code>on</code></div><div><code>off</code></div></td>
    </tr>
    <tr>
      <td>radar-axes</td>
      <td>Sets the labels for radar axes</td>
      <td><div><code>Axis 1, Axis 2, Axis 3...</code></div></td>
    </tr>
    <tr>
      <td>radar-font-color</td>
      <td>Sets the color of radar labels</td>
      <td><div><code>color</code></div></td>
    </tr>
    <tr>
      <td>radar-font-family</td>
      <td>Sets the font family of radar labels</td>
      <td><div><code>family-name</code></div><div><code>generic-family</code></div></td>
    </tr>
    <tr>
      <td>radar-font-size</td>
      <td>Sets the font size for radar labels</td>
      <td><div><code>number</code></div></td>
    </tr>
    <tr>
      <td>radar-ring-color</td>
      <td>Sets the color between radar rings</td>
      <td><div><code>color</code></div></td>
    </tr>
    <tr>
      <td>radar-ring-opacity</td>
      <td>Sets the opacity of radar rings</td>
      <td><div><code>0..1</code></div></td>
    </tr>
    <tr>
      <td>radar-ring-size</td>
      <td>Sets the distance between radar rings</td>
      <td><div><code>number</code></div></td>
    </tr>
    <tr>
      <td>radar-ring-size-inner</td>
      <td>Sets the radius of the inner radar ring</td>
      <td><div><code>number</code></div></td>
    </tr>
    <tr>
      <td>radar-rings</td>
      <td>Sets the labels for radar rings</td>
      <td><div><code>Ring 1, Ring 2, Ring 3...</code></div></td>
    </tr>
    <tr>
      <td>renderer</td>
      <td>Chooses which rendered will be used</td>
      <td><div><code>canvas</code></div><div><code>webgl</code></div></td>
    </tr>
    <tr>
      <td>scale-max</td>
      <td>Sets the maximum allowed zoom level</td>
      <td><div><code>number</code></div></td>
    </tr>
    <tr>
      <td>scale-min</td>
      <td>Sets the minimum allowed zoom level</td>
      <td><div><code>number</code></div></td>
    </tr>
    <tr>
      <td>selection-color</td>
      <td>Sets the color of the ring that appears around selected elements</td>
      <td><div><code>color</code></div></td>
    </tr>
    <tr>
      <td>showcase</td>
      <td>Activates showcase. See the <a href="/guides/showcase.html#customize-showcase-settings-in-the-advanced-editor">showcase guide</a> for more information.</td>
      <td><div><code>selector</code></div></td>
    </tr>
    <tr>
      <td>template</td>
      <td>Chooses a template</td>
      <td><div><code>causal-loop</code></div><div><code>custom</code></div><div><code>geo</code></div><div><code>sna</code></div><div><code>stakeholder</code></div><div><code>stock-and-flow</code></div><div><code>systems</code></div><div><code>systems-leverage</code></div></td>
    </tr>
    <tr>
      <td>theme</td>
      <td>Sets the view's overall theme</td>
      <td><div><code>light</code></div><div><code>dark</code></div></td>
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

<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/guides/settings-reference.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
