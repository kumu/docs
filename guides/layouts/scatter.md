# Scatter

With the scatter layout, elements are positioned in an XY plot using element fields. You can choose any quantitative field for each axis -- or even use mathematical expressions if you're up for it!

![scatter plot with labels](../../images/scatter-plot-with-labels.png)

Want to see a finished scatter plot before you get started? Check out our [scatter plots blog post](https://blog.kumu.io/introducing-scatter-plots-b5fb1e2040e3).

## Set up your scatter plot

To apply the scatter layout to your map, the first step is to open the [Advanced Editor](../../overview/view-editors.md#advanced-editor) add `layout: scatter` to your `@settings`.

```scss
@settings {
    layout: scatter;
}
```

Then, use `layout-x` and `layout-y` to tell Kumu which element fields contain the x and y coordinates.

```scss
@settings {
    layout-x: "field1";
    layout-y: "field2";
}
```

Replace `field1` and `field2` with the appropriate fields in your map, but don't forget to keep the quotation marks.

After you set up your fields, you will probably need to multiply them by a constant value in order to improve the map's zoom-in and zoom-out interaction.

```scss
@settings {
    layout-x-multiplier: 100;
    layout-y-multiplier: 100;
}
```

We've found that `100` is a sensible default multiplier, but depending on your data, you may want to raise or lower it to make the zoom feel right. In general we've had success with layouts that are roughly 1000 x 1000, but there are no hard limits, if you want to get creative.

### Expressions

The values for `layout-x` and `layout-y` can be simple field expressions such as `layout-x: "degree"`. But that's not all they can be. You can also use complex mathematical expressions to build your scatter plots.

```scss
@settings {
  layout: scatter;
  layout-x: "1000 * betweenness";
  layout-y: "500 * max(1, log(outdegree / indegree))";
}
```

**Note:** Since spaces aren't allowed in variable names, you need to use the camelcased version of the field name. For example, `"levelOfInfluence * 100"` instead of `"level of influence * 100"`.

Notice there's no need to use the `-multiplier` settings if you're comfortable writing expressions instead. The rest of the scatter plot settings still apply.

We're using the [mathjs](http://mathjs.org) library under the hood so if you want to learn more we recommend checking out the following links:

* [https://mathjs.org/docs/expressions/syntax.html](https://mathjs.org/docs/expressions/syntax.html)
* [https://mathjs.org/docs/reference/functions.html](https://mathjs.org/docs/reference/functions.html)

## Put it all together

In this guide, we broke down the code into pieces for clarity, but in an actual Kumu view, you'll put it all into one `@settings` block.

```scss
@settings {
  layout: scatter;
  layout-x: "field1";
  layout-y: "field2";
  layout-x-multiplier: 100;
  layout-y-multiplier: 100;
}
```

## Add grids, bounds, and guides

You can have the scatter plot cover your entire Kumu map, or you can give it bounds, so that it knows where it begins and ends. Similarly, you can also add a guide to your scatter plot, in order for it to have a clearly defined Y and X axis.&#x20;

This is the code that allows you to do that:&#x20;

```
@settings {
  layout-bounds-xmin: -1000; 
  layout-bounds-ymin: 0; 
  layout-bounds-xmax: 1000; 
  layout-bounds-ymax: 1500; 
  layout-guides: x(-1000) x(0) x(1000) y(500);
  }
```

Have a play with the numbers to adjust what your scatter plot looks like!

## Add X and Y-axis labels

You might encounter some maps with scatter plots that have labels on the X and Y axes for easier interpretation. Note that these are not a function of the scatter layout, but rather 'hacky' workarounds explained here:&#x20;

**Hacky workaround number 1**

This method is simply creating transparent elements, so that only the label remains, and placing them where you'd like them to be on the map:

1. Create two elements, one for each label
2. [Make the elements transparent](../../frequently-asked-questions/how-do-i-make-elements-transparent.md)
3. Place the elements on the scatter plot (either through their X and Y coordinates, or by simply dragging & [pinning](../../faq/how-do-keep-elements-from-moving.md) them in place)

<figure><img src="../../.gitbook/assets/Screenshot 2025-02-18 at 4.16.39 PM.png" alt=""><figcaption></figcaption></figure>

**Hacky workaround 2**

This method involves creating two controls that are stylized. Note that with this method the scatter labels always exist at the edges of your Kumu map, so this method is not optimal when your scatter has bounds.&#x20;

Use this code to create the controls (just update the labels 'Betweenness' and 'Degree' with your own preferred labels):&#x20;

```
@controls {
  top-left {
    search {}

    text {
      value: "<h1>↑</h1><h4>Betweenness</h4><h1>↓</h1>";
      margin-top: 110px;
    }
  }

  bottom {
    text {
      value: "#### Degree";
      margin-bottom: -42.5;
    }

    text {
      value: "<h1>←&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→</h1>";
    }
  }
}

```

<figure><img src="../../.gitbook/assets/Screenshot 2025-02-18 at 4.31.21 PM.png" alt=""><figcaption></figcaption></figure>
