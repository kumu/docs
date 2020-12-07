# How do I customize the order of my legend?

When you use the [Color by](/guides/data-driven-decorations.html#color-by) tool to color code your elements, legend entries are created automatically, but not always in the order you might want.

There are two ways to customize the order of your legend entries. The simpler solution, appropriate in most cases, is:
1. Set the **Color by** tool to "select a field" to turn it off.
2. Use the [element decoration builder](/guides/data-driven-decorations.html#use-decoration-builders-to-create-custom-decorations) to recreate each color coding rule individually. For example, instead of using **Color by** to automatically color by Type, you would instead create a separate, custom decoration for each possible value in the Type field. Be sure to fill out the **Label for legend** box at the bottom of the decoration builder to make sure rules are added to the legend.
3. At the bottom of the [Basic Editor](/overview/view-editors.html#basic-editor), you'll see your decorations listed. Drag and drop items in the list to change their order in the legend.

Again, this is the fastest and most straightforward solution in most cases, but it's also possible to customize the order of **Color by** color-coded legend entries, using the Advanced Editor:

```
@settings {
  // When you use the Color By tool, Kumu creates this 
  // element-color rule in the @settings block automatically.
  element-color: categorize("Element Type", red "Education", blue "Finance", green "Agriculture");
}
```

In the code above, you can replace `Element Type` with the name of the field you want to color by, and replace `Education`, `Finance`, and `Agriculture` with actual values from your dataset. Replace `red`, `blue`, and `green` with named colors or hex color codes.

You can add as many color + value combinations as you want to the comma-separated list inside your `categorize()` parentheses.

<span class="edit-link"><a href="https://github.com/kumu/compass-docs/blob/master/guides/faq/how-do-i-customize-the-order-of-my-legend.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
