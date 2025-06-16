# How do I remove unneeded controls?

When you're adding [controls](../guides/controls.md) through the Basic Editor, you might sometimes add a duplicate control by accident, or add a control that says "No values found for \[some field name]". To remove any of those unneeded controls, you can use the Basic Editor or the Advanced Editor.

## Basic Editor

* Click the settings icon on the right ![](../icons/sliders-h.svg) to open the Basic Editor, then scroll down to "Add custom control"**.**  You'll see all existing controls listed out below.
* When hovering over an existing control, click on the edit pencil to edit your existing control, or click on the trash icon to delete it:

<figure><img src="../.gitbook/assets/Screenshot 2025-06-16 at 1.03.11 PM.png" alt=""><figcaption></figcaption></figure>

## Advanced Editor

Open up the Advanced Editor, and, unless you have added [partial views](../guides/partial-views.md), there will be a block of code right at the top starting with `@controls`.

```scss
// Line 1 of your Advanced Editor:
@controls {
  ...There will be other code inside this block
}
```

If you don't want _any_ controls or "No values found for \[some field name]" messages on your map, simply delete the entire `@controls` block, then click "Save" at the bottom of the editor.

If you have some controls in there that you would like to preserve, you'll first need to learn the basics of how to read `@controls` code, so that you can tell which controls you want to delete and which you want to keep.&#x20;

* If you want to delete all controls in a certain region of your map, then delete all the code saying `top`, or `top-left`, or `bottom` etc. Delete the whole block to delete all the controls in that region.&#x20;
* If you want to delete just one control, locate it in the list of your controls and delete that whole block. You can recognize a control block by the fact that the first line is `filter`, or `showcase`, or `cluster`, or `focus`.&#x20;

You can learn more about reading `@controls` code in [our full guide on controls](how-do-i-get-rid-of-unneeded-controls.md#add-controls-through-the-advanced-editor). Of course you can always send us an email at support@kumu.io to help out!
