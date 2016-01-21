# Layout
There are a number of layout options when using Kumu.

## Fixed
With the fixed layout, you position everything manually. Just drag an element to change its location or drag a connection to change its curvature. The systems templates are set to a fixed layout by default.

To change to a fixed layout, use the map overview and change "Default element behavior" to "fixed". If you were previously using a floating layout, you may also need to pin all the existing elements in place. You can do this by hitting "a" to select all, and then by clicking the pin button in the bottom toolbar.

## Force-directed
With the force-directed layout, we do our best to position everything automatically based on defined layout settings. While we've picked defaults that should work for most maps, if you have an especially interconnected or sparse map you may need to tweak these settings. The settings are:

- Gravity
- Element charge
- Connection length
- Connection strength

If you find your map has become a hairball, try the following:

- Decrease gravity
- Increase element charge
- Lower connection strength

## Scatter
With the scatter layout, you can position elements based on an XY plot. You can choose any quantitative attribute to use for each axis. To get started, paste the below into the advanced tab of your perspective:

```
@settings {
  layout: scatter;
  layout-x: "position * 200";
  layout-y: "influence * 100";
  layout-grid: true;
  layout-guides: x(0) y(0) y(1000) x(1000) x(-1000);
  layout-guide-color: #333;
  layout-bounds: -1000 0 1000 1000;
}
```

Swap out "attribute" on both the "layout-x" and "layout-y" lines for the names of the attributes you'd like to use. Here's a rundown on how each line works:

- **layout-x:** Defines the attribute used for the x axis. Also can include a multiplier. We recommend starting with 200 if you're using a -5 to +5 scale.
- **layout-y:** Defines the attributes used for the y axis. Also can include a multiplier. We recommend starting with 100 if you are using a 0 to 10 scale.
- **layout-grid:** Defines whether the grid should be shown, options are `True` or `False`.
- **layout-guides:** Defines the locations of the dominant lines on the grid. Define these based on the multiplier used (10 * 100 = 1000).
- **layout-guide-color:** Defines the color used for the guides.
- **layout-bounds:** Defines where the grid lines should end. If not defined, they extend forever.

<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/guides/layout.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
