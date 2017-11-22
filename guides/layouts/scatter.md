# Scatter layout

With the scatter layout, elements are positioned in an XY plot using element fields. You can choose any quantitative field for each axis -- or even use mathematical expressions if you're up for it!

Want to see a finished scatter plot before you get started? Check out our [scatter plots blog post](https://blog.kumu.io/introducing-scatter-plots-b5fb1e2040e3).

## Set up your scatter plot

To apply the scatter layout to your map, the first step is to add `layout: scatter` to your `@settings`.

```
@settings {
    layout: scatter;
}
```

Then, use `layout-x` and `layout-y` to tell Kumu which element fields contain the x and y coordinates.

```
@settings {
    layout-x: "field1";
    layout-y: "field2";
}
```

Replace `field1` and `field2` with the appropriate fields in your map, but don't forget to keep the quotation marks.

After you set up your fields, you will probably need to multiply them by a constant value in order to improve the map's zoom-in and zoom-out interaction.

```
@settings {
    layout-x-multiplier: 100;
    layout-y-multiplier: 100;
}
```

We've found that `100` is a sensible default multiplier, but depending on your data, you may want to raise or lower it to make the zoom feel right. In general we've had success with layouts that are roughly 1000 x 1000, but there are no hard limits, if you want to get creative.

### Expressions

The values for `layout-x` and `layout-y` can be simple field expressions such as `layout-x: "degree"`. But that's not all they can be. You can also use complex mathematical expressions to build your scatter plots.

```
@settings {
  layout: scatter;
  layout-x: "1000 * betweenness";
  layout-y: "500 * max(1, log(outdegree / indegree))";
}
```

**Note:** Since spaces aren't allowed in variable names, you need to use
the camelcased version of the field name. For example, ``"levelOfInfluence * 100"`` instead of `"level of influence * 100"`.

Notice there's no need to use the `-multiplier` settings if you're comfortable writing expressions instead. The rest of the scatter plot settings still apply.

We're using the [mathjs](http://mathjs.org) library under the hood so if you want to learn more we recommend checking out the following links:

- http://mathjs.org/docs/expressions/syntax.html
- http://mathjs.org/docs/reference/functions.html

## Add grids, bounds, and guides

To add a grid and bounds to your scatter plot, you can use `layout-grid`, and `layout-bounds-*`.

```
@settings {
    layout-grid: on;
    layout-bounds-xmin: 0;
    layout-bounds-ymin: 0;
    layout-bounds-xmax: 100;
    layout-bounds-ymax: 100;
}
```

If you want your gridlines to extend forever, just skip `layout-bounds-*`.

You can also add eye-catching lines within the bounds of your scatter plot, using `layout-guides`.

```
@settings {
    layout-guides: x(25) x(50) x(75) y(42) circle(1, 2, 3);
}
```

Use `x(value)` to add a vertical guide, `y(value)` to add a horizontal guide, or `circle(radius, x, y)` to add a circle with center at `x, y`.

Bonus: You can customize the width and color of your grids and guides, too.

```
@settings {
    layout-guide-width: 2;
    layout-guide-color: #428cba;
    layout-grid-color: #252525;
    layout-grid-width: 1;
}
```

##Put it all together

In this guide, we broke down the code into pieces for clarity, but in an actual Kumu view, you'll put it all into one `@settings` block.

```
@settings {
    layout: scatter;
    layout-x: "field1";
    layout-y: "field2";
    layout-x-multiplier: 100;
    layout-y-multiplier: 100;
    layout-grid: on;
    layout-bounds-xmin: 0;
    layout-bounds-ymin: 0;
    layout-bounds-xmax: 100;
    layout-bounds-ymax: 100;
    layout-guides: x(25) x(50) x(75) y(42);
    layout-guide-width: 5;
    layout-guide-color: #252525;
    layout-grid-color: #909090;
    layout-grid-width: 2;
}
```

<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/guides/layouts/scatter.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
