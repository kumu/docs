# How do I get rid of unneeded controls?

When you're adding [controls](/guides/controls.html) through the Basic Editor, you might sometimes add a duplicate control by accident, or add a control that says "No values found for [some field name]". To remove any of those unneeded controls, you can use the Advanced Editor.

Open up the Advanced Editor, and, unless you have added [partial views](/guides/partial-views.html), there will be a block of code right at the top starting with `@controls`.

```
// Line 1 of your Advanced Editor:
@controls {
  ...There will be other code inside this block
}
```

If you don't want _any_ controls or "No values found for [some field name]" messages on your map, simply delete the entire `@controls` block, then click "Save" at the bottom of the editor.

If you have some controls in there that you would like to preserve, you'll first need to learn the basics of how to read `@controls` code, so that you can tell which controls you want to delete and which you want to keep. You can learn more about reading `@controls` code in [our full guide on controls](/guides/controls.html#add-controls-through-the-advanced-editor).

<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/faq/how-do-i-get-rid-of-unneeded-controls.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
