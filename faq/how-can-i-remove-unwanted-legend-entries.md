# How do I remove unwanted legend entries?

How to delete entries from your legend, depends on how those legend entries were created. Below you can find instructions for all types of legend entries.&#x20;

**1.Delete field values from the legend**\
Legend entries added using the **Color by** tool can only be removed by setting the Color by dropdown in the Basic Editor back to "Select a field" or by [deleting the field values](../guides/fields.md#deleting-field-values) that you don't want to see. To do this, you need to delete the underlying field value. This process is different depending on the field's [prompt](how-can-i-remove-unwanted-legend-entries.md#customize-a-field).

For fields that have their prompt set to "Autocomplete" or "None" (this includes the **Tags** field), you can only delete the field value by removing it from _every_ element, connection, and loop in the project, including the [trash](../overview/kumus-architecture.md#trash).

For all other fields (including **Element Type, Connection Type,** and **Loop Type**), follow these steps:

1. Click the menu in the upper left of your map and choose **FIELDS**
2. Click on the field you want to edit
3. Find the value you want to delete. Then, click the delete button next to the value to delete it.
4. Scroll down and click **SAVE** to save your changes
5. Refresh the page

After you follow these steps, the field value(s) you deleted will no longer show up in prompted lists, in legends, or in controls.

**2.Delete custom decorations from the legend**\
If you used the decoration builder to add a legend entry, you can go to the existing decorations section, click the pencil icon next to the decoration, and clear out the Label for Legend box. This will remove the legend item, but keep the decoration—if you'd rather delete both, you can click the trash icon in the existing decorations section.

**3.Delete automatic legend entries**\
Some legend entries get added automatically when you apply different [templates](../guides/templates.md). Here's how to delete those entries:

* For **Person** and **Organization** entries (stakeholder template), and **Stock**, **Flow**, **Variable**, **Source**, and **Sink** entries (stock and flow template), follow the guide to [delete field values](../guides/fields.md#deleting-field-values). Delete these values from the Element Type field.
* For **Adds to / same direction** and **Subtracts from / opposite direction** entries (causal loop template), follow the guide to [delete field values](../guides/fields.md#deleting-field-values). Delete these values from the Connection Type field.
* **Opposite** entry (systems template): Open the Basic Editor on the right-hand side, click Customize Defaults, and in the **Template settings** section, clear out the "Opposite connection label" box and click **SAVE** at the bottom.

**4.Delete manual legend entries created in the advanced editor**\
Any legend entries that you created by [adding code to the advanced editor](../overview/advanced-editor-hub/color-reference.md#defining-your-own-color-palette) can be deleted by simply deleting the code again from the advanced editor.&#x20;
