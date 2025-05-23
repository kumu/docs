# How do I customize the order of my legend?

There are three ways to re-order legend entries, depending on how they were added.&#x20;

#### Change the order of the fields

If you added legend entries using the **Color by** tool in the Basic Editor, follow these steps to change the order:

1. Click the menu icon ![](../icons/bars.svg) to bring up the [project settings](../overview/settings.md#project-settings)
2. Select **Fields** from the sidebar on the left
3. Select the same field you selected in the **Color by** tool—it's settings panel will open up
4. Drag and drop field values to change their order (see below gif)
5. Click **Save** at the bottom of the field settings to save your changes, then reload the page

#### Change the order of your customized decoration styles

When you create a customized styling rule for each legend entry, you can drag them in the right order after. Here's how to do this:

1. If applicable, first set the **Color by** tool in the Basic Editor back to "select a field" to turn it off.
2. Use the [element decoration builder](../guides/data-driven-decorations.md#use-decoration-builders-to-create-custom-decorations) (click Decorate Elements in the Basic Editor)to recreate each color coding rule individually. Instead of using **Color by** to automatically color by Type, you would instead create a separate, custom decoration for each possible value in the Type field. Be sure to fill out the **Label for legend** box at the bottom of the decoration builder to make sure rules are added to the legend!
3. After creating all your custom decorations, return to the Advanced Editor and locate the codes generated by Kumu for your custom decorations, cut and past the codes to re-arrange the legend entries the way you want them to appear on your map.

<figure><img src="../.gitbook/assets/re-ordering legeng entry via AE.gif" alt="" width="563"><figcaption><p>re-arranging legend entries via advanced editor</p></figcaption></figure>

#### Change the order in the Advanced Editor

It's also possible to customize the order of **Color by** color-coded legend entries, using the Advanced Editor:

```scss
@settings {
  // When you use the Color By tool, Kumu creates this 
  // element-color rule in the @settings block automatically.
  element-color: categorize("Element Type", red "Education", blue "Finance", green "Agriculture");
}
```

In the code above, you can replace `Element Type` with the name of the field you want to color by, and replace `Education`, `Finance`, and `Agriculture` with actual values from your dataset. Replace `red`, `blue`, and `green` with named colors or hex color codes.

The order of your values dictates how the legend appears. Simply rearrange the values in the order you want your legend to appear on the map.

You can add as many color + value combinations as you want to the comma-separated list inside your `categorize()` parentheses.
