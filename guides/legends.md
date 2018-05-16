# Legends

Adding a legend to your map is an important step to make sure your readers can easily understand your decorations. There are a number of different ways to add and remove legend entries—this guide will explain all of them!


### Add legend entries through the Basic Editor

When you use the [Color by](/guides/decorate.md#color-by) tool in the [Basic Editor](/overview/view-editors.md#basic-editor), Kumu will automatically create your color legend, adding an item for each possible value in the field you're coloring by. For example, this map is colored by Element Type using the `bujumbra` scale:

![bujumbra color by](/images/legend-color-by-closeup.png)

This automatic legend feature also works when you're using **Color by** to add [flags](/guides/flags.md).

Note that the **Color by** tool will stop adding legend entries after it runs out of colors in its default color palette (seven colors). To make sure all your field values get included in the legend, you might need to click the expand icon <i class="fa fa-angle-down"></i> and choose a [larger color palette](/guides/color-reference.md). If the **Color by** tool is including some unwanted field values in your legend, try  [deleting the unwanted values](/guides/fields.md#deleting-field-values).

You can also use the [element and connection decoration builders](/guides/decorate.md#refine-your-decorations) to add different kinds of items to your legend—for example, icons to indicate that elements or connections are being scaled in size:

![Network map with cool legend entries](/images/legend-scale-closeup.png)

For a full list of legend icons you can add, [jump to the legend reference](#legend-reference).

The legend entries added from the decoration builder will be listed in the Basic Editor among other existing decorations. Decorations that are labelled with bold text are the ones that appear in your legend.

![Existing decorations for network map](/images/existing-decorations-scale.png)

### Add legend entries through the Advanced Editor

If you're working on decorations in the [Advanced Editor](/overview/view-editors.md#advanced-editor), you can add a comment above a decoration to tell Kumu that it should be included in the legend. The syntax is:

```
/* entry-type: Entry Label */
```

Replace `entry-type` with either `elements` or `connections` to tell Kumu what your decoration rule applies to. Replace `Entry Label` with the text that will appear in the legend. Your decoration rule should start on the next line down in the Advanced Editor.

Here's a working example from a decoration in one of the screenshots above:

```
/* elements: Authors, sized by number of articles written */
author {
  color: #918dc2;
  scale: scale("total articles", 0.5, 3);
  border-width: 1;
  border-color: #fcfcfa;
}
```

Note that you can combine multiple decoration rules into one block of code, and Kumu's legend will combine many of your rules into one legend icon. The code above will create the following entry in the legend, complete with color, border color, and scale:

![fancy legend combo](/images/legend-combo.png)

For a full list of legend icons and how to use them from the Advanced Editor, [jump to the legend reference](#legend-reference).


<!-- ### Use controls to add a legend

[Controls](/guides/controls.md) in Kumu

You can even combine color-legend controls with the standard legend

### Fully customized legends

Need even more flexibility for your legend, or want to completely customize the style? Using Kumu's -->

### Legend reference

Below is a list of all the icons you can add to your legend, as well as instructions on how to access the icons from the Basic and Advanced Editors.

<style>
#legend-icons-table td {
    vertical-align: middle;
}

#legend-icons-table td,
#legend-icons-table th {
    background-color: #fff;
    border: none;
}

#legend-icons-table tr:first-child {
    border: none;
}

#legend-icons-table tr:nth-child(2) {
    border-width: 2.5px;
}

#legend-icons-table pre {
    border: none;
}
</style>

<table id="legend-icons-table" class="table">
    <tbody>
        <tr>
            <th>Legend icon</th>
            <th>Basic Editor workflow</th>
            <th>Advanced Editor code snippet</th>
        </tr>
        <tr>
            <td><img alt="element scale icon" src="/images/legend-element-scale.png"></td>
            <td>Decorate elements ><br>Change size ><br>Scale elements by a field</td>
            <td>
                <pre><code>element {
    scale: scale("betweenness", 0.5, 3);
}</code></pre>
            </td>
        </tr>
        <tr>
            <td><img alt="element color icon" src="/images/legend-element-color.png"></td>
            <td>Decorate elements ><br>Change color ><br>Set a fixed element color</td>
            <td>
                <pre><code>element {
    color: #34b3eb;
}</code></pre>
            </td>
        </tr>
        <tr>
            <td><img alt="element shadow color icon" src="/images/legend-shadow-color.png"></td>
            <td>Decorate elements ><br>Add shadow ><br>color</td>
            <td>
                <pre><code>element {
    shadow-color: #34b3eb;
}</code></pre>
            </td>
        </tr>
        <tr>
            <td><img alt="element bullseye color icon" src="/images/legend-bullseye-color.png"></td>
            <td>Decorate elements ><br>Add bullseye ><br>color</td>
            <td>
                <pre><code>element {
    bullseye-color: #34b3eb;
}</code></pre>
            </td>
        </tr>
        <tr>
            <td><img alt="element border color icon" src="/images/legend-border-color.png"></td>
            <td>None</td>
            <td>
                <pre><code>element {
    border-color: #34b3eb;
}</code></pre>
            </td>
        </tr>
        <tr>
            <td><img alt="connection scale icon" src="/images/legend-connection-scale.png"></td>
            <td>Decorate connections ><br>Change size ><br>Scale connection widths by field</td>
            <td>
                <pre><code>connection {
    scale: scale("strength", 0.5, 3);
}</code></pre>
            </td>
        </tr>
        <tr>
            <td><img alt="connection color icon" src="/images/legend-connection-color.png"></td>
            <td>Decorate connections ><br>Change color ><br>Set a fixed connection color</td>
            <td>
                <pre><code>connection {
    color: #34b3eb;
}</code></pre>
            </td>
        </tr>
        <tr>
            <td><img alt="connection dashed icon" src="/images/legend-connection-dashed.png"></td>
            <td>Decorate connections ><br>Change style ><br>dashed</td>
            <td>
                <pre><code>connection {
    style: dashed;
}</code></pre>
            </td>
        </tr>
    </tbody>
</table>
