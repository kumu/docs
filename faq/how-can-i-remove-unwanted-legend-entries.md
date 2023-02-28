# How do I remove unwanted legend entries?

Legend entries added using the **Color by** tool can only be removed by [defining your own color palette](../guides/color-reference.md#defining-your-own-color-palette) or [deleting the field values](../guides/fields.md#deleting-field-values) that you don't want to see. To do this, you need to delete the underlying field value. This process is different depending on the field's [prompt](how-can-i-remove-unwanted-legend-entries.md#customize-a-field).

For fields that have their prompt set to "Autocomplete" or "None" (this includes the Tags field), you can only delete the field value by removing it from every element, connection, and loop in the project, including the [trash](../overview/kumus-architecture.md#trash).

For all other fields (including Element Type, Connection Type, and Loop Type), follow these steps:

1. Click the menu in the upper left of your map and choose **FIELDS**
2. Click on the field you want to edit
3. Find the value you want to delete. Then, click the delete button next to the value to delete it.
4. Scroll down and click **SAVE** to save your changes
5. Refresh the page

After you follow these steps, the field value(s) you deleted will no longer show up in prompted lists, in legends, or in controls.

If you used the decoration builder to add a legend entry, you can go to the existing decorations section, click the pencil icon next to the decoration, and clear out the Label for Legend box. This will remove the legend item, but keep the decoration—if you'd rather delete both, you can click the delete icon in the existing decorations section.

Some legend entries get added automatically when you apply different [templates](../guides/templates.md). Here's how to delete those entries:

* For **Person** and **Organization** entries (stakeholder template), and **Stock**, **Flow**, **Variable**, **Source**, and **Sink** entries (stock and flow template), follow the guide to [delete field values](../guides/fields.md#deleting-field-values). Delete these values from the Element Type field.
* For **Adds to / same direction** and **Subtracts from / opposite direction** entries (causal loop template), follow the guide to [delete field values](../guides/fields.md#deleting-field-values). Delete these values from the Connection Type field.
* **Opposite** entry (system template): Open your [default settings](../guides/default-view-settings.md), and, in the **Template settings** section, clear out the "Opposite connection label" box and click **SAVE** at the bottom.
