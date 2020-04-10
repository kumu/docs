# Legends

Adding a legend to your map is an important step to make sure your readers can easily understand your decorations. There are a number of different ways to add and remove legend entries—this guide will explain all of them!


## Add legend entries through the Basic Editor

There are two ways to create your legend from the [Basic Editor](/overview/view-editors.html#basic-editor).
1. Using the **Color by**
1. Using the [decoration builders](/guides/decorate.html#refine-your-decorations)

**Color by** is a great way to get a legend up and running quickly, and the decoration builders are useful when your legend needs to be a bit more customized. Read on to learn more about both options.

#### Use the Color by tool to create a legend

When you use the [Color by](/guides/decorate.html#color-by) tool in the Basic Editor, Kumu will automatically create your color legend, adding an item for each possible value in the field you're coloring by. For example, this map is colored by Element Type using the `bujumbra` scale:

![bujumbra color by](/images/legend-color-by-closeup.png)

This automatic legend feature also works when you're using **Color by** to add [flags](/guides/flags.html).

Note that the **Color by** tool will stop adding legend entries after it runs out of colors in its default color palette (seven colors). To make sure all your field values get included in the legend, you might need to click the expand icon <i class="fa fa-angle-down"></i> and choose a [larger color palette](/guides/color-reference.html). If the **Color by** tool is including some unwanted field values in your legend, try  [deleting the unwanted values](/guides/fields.html#deleting-field-values).

One more caveat about **Color by**: when you're using this tool, it's not possible to remove, replace, or edit individual colors from the color palette. To fully customize the colors in the palette, you can follow the guide to [define your own palette](/guides/color-reference.html#defining-your-own-color-palette). Alternatively, you can read through [the section below](#use-the-decoration-builders-to-add-legend-entries) to learn how to create a custom legend without using the **Color by** tool.


##### Only color by the values being used

In some projects, you might have a long list of field values, but only use _some_ of them on a given map. If that is the case, your **Color by** legend will include _all_ of the possible field values, not just the values being used on your map.

Using Kumu's [computed fields](/guides/computed-fields.html) feature, you can quickly solve this problem and create a legend with only the used values:

1. Open your [project settings](/overview/settings.html#project-settings) and click "Fields"
1. Add  a new field—this new field can have any name, but something like "Color coding field" might be clear and easy to remember.
1. Scroll down to the fields "Advanced settings" section.
1. In the **Expression** box, paste in {% raw %}`{{Field Name}}`{% endraw %}, replacing `Field Name` with the name of the field you originally wanted to color by. For example, if you want to color by the element type field, paste in {% raw %}`{{element type}}`{% endraw %}.
1. Click "Save" to save the field

With that done, you can return to the map, and use the **Color by** tool to color by your new computed field. Regardless of how many possible values you have in the original field, the legend will now only include the values being used on the current map.

For bonus points, use [field relevance settings](/guides/fields.html#field-relevance) to hide your computed field from all profiles.


#### Use the decoration builders to add legend entries

To add custom colors and icons to your legend, use the [element and connection decoration builders](/guides/decorate.html#refine-your-decorations). Once you build out your decoration rule, fill in the "Label for Legend" box at the bottom of the decoration builder, and Kumu will add your decoration to the legend.

![label for legend box](/images/decoration-builder-legend-label.png)

You can use the decoration builders to add many different kinds of items to your legend—for example, icons to indicate that elements or connections are being scaled in size:

![Network map with cool legend entries](/images/legend-scale-closeup.png)

For a full list of legend icons you can add, [jump to the legend reference](#legend-reference).

The legend entries added from the decoration builder will be listed in the Basic Editor among other existing decorations. Decorations that are labelled with bold text are the ones that appear in your legend, and you can click the pencil icon <i class="fa fa-pencil"></i> next to a decoration to edit it and its legend label.

![Existing decorations for network map](/images/existing-decorations-scale.png)

#### Removing legend entries

Legend entries added using the **Color by** tool can only be removed by [defining your own color palette](/guides/color-reference.html#defining-your-own-color-palette) or [deleting the field values](/guides/fields.html#deleting-field-values) that you don't want to see. To do this, you need to delete the underlying field value. This process is different depending on the field's [prompt](#customize-a-field).

For fields that have their prompt set to "Autocomplete" or "None" (this includes the Tags field), you can only delete the field value by removing it from every element, connection, and loop in the project, including the [trash](/overview/kumus-architecture.html#trash).

For all other fields (including Element Type, Connection Type, and Loop Type), follow these steps:
1. Click the menu in the upper left of your map and choose **FIELDS**
1. Click on the field you want to edit
1. Find the value you want to delete. Then, click the delete button <i class="fa fa-ban">  </i> next to the value to delete it.
1. Scroll down and click **SAVE** to save your changes
1. Refresh the page

After you follow these steps, the field value(s) you deleted will no longer show up in prompted lists, in legends, or in controls.

If you used the decoration builder to add a legend entry, you can go to the existing decorations section, click the pencil icon <i class="fa fa-pencil">  </i> next to the decoration, and clear out the Label for Legend box. This will remove the legend item, but keep the decoration—if you'd rather delete both, you can click the delete icon <i class="fa fa-remove" style="color: darkred;">  </i> in the existing decorations section.

Some legend entries get added automatically when you apply different [templates](/guides/templates.html). Here's how to delete those entries:
- For **Person** and **Organization** entries (stakeholder template), and **Stock**, **Flow**, **Variable**, **Source**, and **Sink** entries (stock and flow template), follow the guide to [delete field values](/guides/fields.html#deleting-field-values). Delete these values from the Element Type field.
- For **Adds to / same direction** and **Subtracts from / opposite direction** entries (causal loop template), follow the guide to [delete field values](/guides/fields.html#deleting-field-values). Delete these values from the Connection Type field.
- **Opposite** entry (system template): Open your [default settings](/guides/default-view-settings.html), and, in the **Template settings** section, clear out the "Opposite connection label" box and click **SAVE** at the bottom.

#### Reordering legend entries

There are two ways to re-order legend entries, depending on how they were added. If you added legend entries using the **Color by** tool, follow these steps to change the order:
1. Click the menu icon <i class="fa fa-bars">  </i> to bring up the [project settings](/overview/settings.html#project-settings)
2. Select **Fields** from the sidebar on the left
3. Select the same field you selected in the **Color by** tool—it's settings panel will open up
4. Drag and drop field values to change their order
5. Click **Save** at the bottom of the field settings to save your changes, then reload the page

If you added legend entries using the decoration builder or the Advanced Editor, find your legend entry in the [existing decorations](/overview/view-editors.md#existing-decorations) section, then drag-and-drop the entry to change its order.

![Cascading decorations](/images/cascading-decorations.gif)

## Add legend entries through the Advanced Editor

If you're working on decorations in the [Advanced Editor](/overview/view-editors.html#advanced-editor), you can add a comment above a decoration to tell Kumu that it should be included in the legend. The syntax is:

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

[Controls](/guides/controls.html) in Kumu

You can even combine color-legend controls with the standard legend

### Fully customized legends

Need even more flexibility for your legend, or want to completely customize the style? Using Kumu's -->

## Hide the legend

If you want to completely hide the legend, you can use the Advanced Editor to do so. Here's some sample code to get you started:

```
@controls {
  bottom-left {}
}
```

For more info on why and how this works, check out [our full guide on built-in controls](/guides/controls.html#built-in-controls).


## Legend reference

Below is a list of all the icons you can add to your legend, as well as instructions on how to access the icons from the Basic and Advanced Editors.

<table id="legend-icons-table" class="table border-bottom">
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
