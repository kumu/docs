# Decorate

Decorations in Kumu allow you to change the color and size of elements, connections, and loops in your map. They are a powerful way to guide your map readers toward valuable insights about your system or network.

![Color and size decorations](/images/color-size-decorations.png)

It's possible to [change the color or size of individual elements and connections](/faq/how-do-i-decorate-a-single-element-or-connection.md), but it's much faster and more scaleable to create decoration rules based on the  information stored inside your elements and connections.

To add that information, you'll use the panel on the left side of the map, which is called the **profile**.

## Use the profile to add additional information

Each element, connection, and loop has a profile that can be used to store additional information in various fields.

<img src="/images/introduction-profile.png" class="plain">

Label, Type, Description, and Tags are all examples of fields. Use these fields to provide additional context for each element and connection, and click **+NEW FIELD** to add a custom field.

After you fill out data in the profiles, you can use the [Basic Editor](/overview/view-editors.md#basic-editor) or the [Advanced Editor](/overview/view-editors.md#advanced-editor) to add decorations.

## Decorate in the Basic Editor

To open the Basic Editor, open your map and click the Settings icon <i class="fa fa-sliders"></i> on the right side of the map.

![basic editor](/images/overview-basic-editor.png)

You'll see four of Kumu's most commonly used view settings, and the first two—**Size by** and **Color by**—can help you create basic decorations.

### Size by

**Size by** allows you to scale the size of your elements based on numbers stored inside them. For example, if you have a map of organizations, you could create a field called "Net Assets" and fill out the numbers for each element. Then you can use the Basic Editor to scale the size the organizations according to their Net Assets, allowing you to quickly compare everyone's resources.

<p><iframe width="560" height="315" src="https://www.youtube.com/embed/ej9IONabGH8" frameborder="0" allowfullscreen></iframe></p>

Don't like the default sizes? Click the expand icon <i class="fa fa-angle-down"></i> next to the **Size by** dropdown to fine-tune your sizing options.

In this example, we sized people by the number of views they received on their videos of the ALS ice bucket challenge:

![Ice bucket challenge map](/images/size-scaled-elements.png)

Note that if you don't have any fields with numbers, the **Size by** dropdown menu won't have any options in it. If you don't have this kind of data available, try using Kumu's [Metrics](/guides/metrics.md) feature to create some!

<p class="alert alert-warning">
    Are your fields with numbers not showing up in the <b>Size by</b> dropdown? Try <a class="alert-link" href="/guides/fields.md#customize-a-field">changing the field type to "Number"</a>.
</p>


### Color by

**Color by** allows you to color-code your elements based on any field. Simply select a field from the dropdown, and any elements that have data in that field will be colored!

<p><iframe width="560" height="315" src="https://www.youtube.com/embed/a0FgR7gXFVk" frameborder="0" allowfullscreen></iframe></p>

Don't like the default colors? Click the expand icon <i class="fa fa-angle-down"></i> next to the **Color by** dropdown to fine-tune your coloring options. This example colors by Element Type using the `bujumbra` scale:

![bujumbra color by](/images/color-by-element-type-bujumbra.png)

The default color scale, `neon2`, can support seven different colors. If you need more colors (for example if you have 10 or 11 different element types), [check out our color reference](/guides/color-reference.md) to find a scale that will work for your data.

If you color by a multi-pick field like Tags, Kumu will color code your elements with flags (colored arcs around the outside of your elements). Each flag represents one of the possible values in the multi-pick field.

![Flags example](/images/flags-with-filter.png)

To learn more about flags, [read the full guide](/guides/flags.md).


### Refine your decorations

If you need more precise control over your size and color decorations, you can click the **MORE OPTIONS** link underneath the four core tools in the Basic Editor.

![More options in the basic editor](/images/overview-customize-this-view.png)

Select **Decorate elements** to bring up the Decoration Builder for elements.

![Element decoration builder](/images/element-decoration-builder.png)

Or, select **Decorate connections** to bring up the Decoration Builder for connections.

![Connection decoration builder](/images/connection-decoration-builder.png)

Use the dropdown menus at the top of the builders to choose which elements or connections you are decorating. The options are:

- Decorate all elements/connections
- Decorate custom selection
- Decorate selected elements/connections
- Decorate similar elements/connections

Note that the last two options won't appear in the dropdown menu unless you selected one or more elements/connections *before* you opened up the Decoration Builder.

If you chose to decorate a custom selection, you can use the tools below the first dropdown menu to build your custom selection. For example, you can set the three boxes to `Element Type` `is` `Person` to tell Kumu that you are only decorating elements who have the type "Person" in their [profile](/guides/profiles.md).

After you have built your selection, feel free to play with all the decoration options to find a visual effect that brings insight to your map!

![Element decoration options](/images/element-decorations.jpeg)

Click the **Done** button to apply your decoration, and if you don't like the way it looks, just find the decoration rule in the [existing decorations](/overview/view-editors.md#existing-decorations) section of the Basic Editor, and click the pencil icon <i class="fa fa-pencil"></i> to edit it.

![Existing decorations](/images/basic-editor-existing-decorations.png)

You can also add your decorations to the legend by filling out the **Legend** box at the bottom of the Decoration Builder. For more information on legends, [check out the full legends guide](/guides/legends.md).


## Decorate in the Advanced Editor

If you've seen or used [Cascading Style Sheets (CSS)](https://developer.mozilla.org/en-US/docs/Web/CSS), decorating in the Advanced Editor will look and feel very familiar.

![Advanced Editor](/images/advanced-editor-hf.png)

If you haven't seen or used CSS, don't worry! Most Advanced Editor code follows the same simple pattern:
```
selector {
    property: value;
}
```
`selector` can be replaced with any valid [selector](/guides/selectors.md), and you can read our [property reference](/guides/property-reference.md) to find documentation on `properties` and their possible `values`. You can also use many standard [CSS properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference) throughout the Advanced Editor.

For example, if you were mapping a network of politicians, you could add a field called "Political Party", fill out the data for each element, then use this code to add a few decorations:

```
element ["Political Party"] {
    size: 40;
    border-width: 2;
}

element["Political Party"="Democrat"] {
    border-color: blue;
}

element["Political Party"="Republican"] {
    border-color: red;
}
```

The first section, starting with `element ["Political Party"]` changes the size and border width of all elements with any value in the "Political Party" field. The section section, which refines the selector to `element["Political Party"="Democrat"]`, gives the Democrats a blue border. The third section changes the selector again to target Republicans, then gives them all a red border.

There's much more you can do with the Advanced Editor—it's one of the most powerful tools in Kumu! [Read the full Advanced Editor guide](/overview/view-editors.html#advanced-editor) to learn more.


## Cascading decorations

Decorations are applied in a cascading order. If you're decorating via the Basic Editor, this means that your most recently created decorations can override your older decorations. For example, if you save a decoration that makes half of the elements blue, then you add another decoration that makes all of the elements green, your end result will be a map full of green elements. The second rule you created will override the first rule.

You can click and drag decorations in the [existing decorations](/overview/view-editors.md#existing-decorations) section of the Basic Editor to reorder them, changing which rule gets applied in the end.

![Cascading decorations](/images/cascading-decorations.gif)

If you're decorating via the Advanced Editor, Kumu will read and apply your decoration code from top to bottom. In the example below, all elements will first be colored blue (`#428cba`), but then will be changed to green (`#5cb85c`).

```
/* Color everything blue */
element {
  color: #428cba;
  shadow-color: #428cba;
}

/* Color everything green */
element {
  color: #5cb85c;
  shadow-color: #5cb85c;
}
```

<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/guides/decorate.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
