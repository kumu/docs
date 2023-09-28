# Grids & Guides

Grids & guides are a great tool when you need to add some structure or context to the background of your map. Kumu supports the following underlays:

* [Grids](underlays.md#add-a-grid)
* [Guides](underlays.md#add-guides)
* [Radars](underlays.md#add-a-radar)
* [Background images](underlays.md#add-a-background-image)

_This video below explains how to create Grids & Guides in the advanced editor. Want to know how to use them in the Basic Editor? Please jump to the sections listed above._&#x20;

{% embed url="https://www.youtube.com/embed/2dmzQ-2rIrQ" %}

## Add a grid

**In the Basic Editor**

1. Click the settings icon ![](../icons/sliders-h.svg)to open the [Basic Editor](../overview/view-editors.md#basic-editor)
2. Click "More" and then select "Grids & Guides" to open the menu
3. Check the "Show grid" checkbox to make the grid appear&#x20;

You can use the settings below **Grid** to adjust color, offset and width of your grid.

<figure><img src="../.gitbook/assets/Grids and guides (1).png" alt=""><figcaption><p>Add a grid</p></figcaption></figure>

**In the Advanced Editor**

![grid showcase](../images/grid-showcase.png)

You can use the `layout-grid` property of `@settings` in the Advanced Editor to add a grid:

```scss
@settings {
  layout-grid: on;
}
```

Once you have the grid turned on, you can customize the distance between gridlines using `layout-grid-offset` and customize the width of lines using `layout-grid-width`.

```scss
@settings {
  layout-grid: on;
  layout-grid-offset: 20;
  layout-grid-width: 1.5;
}
```

By default, gridlines will extend infinitely. But, you can use the `layout-bounds-xmin`, `layout-bounds-xmax`, `layout-bounds-ymin`, and `layout-bounds-ymax` properties to set a stopping point for the gridlines.

```scss
@settings {
  layout-grid: on;
  layout-bounds-xmin: 0;
  layout-bounds-ymin: 0;
  layout-bounds-ymax: 550;
  layout-bounds-xmax: 500;
}
```

![grid with bounds](../images/grid-guides-bounds.png)

Finally, you can use the `layout-grid-color` property to customize the color of gridlines (replace `color` with any CSS web color or hex color code):

```scss
@settings {
  layout-grid-color: color;
}
```

## Add guides

**In the Basic Editor**

To add a guide to your map, follow the following steps:&#x20;

1. Click the settings icon ![](../icons/sliders-h.svg)to open the [Basic Editor](../overview/view-editors.md#basic-editor)
2. Click "More" and then select "Grids & Guides" to open the menu
3. Adjust the guide settings and click "Add guide" to make the guide show up on your map

<figure><img src="../.gitbook/assets/Guides.png" alt=""><figcaption><p>Add guides</p></figcaption></figure>

Guides can be _horizontal_, _vertical_, or even a _circle_. To remove an existing guide, click the "Remove" button.

**In the Advanced Editor**&#x20;

You can use the Advanced Editor to add vertical, circular, or horizontal guidelines. Here's the basic syntax for vertical and horizontal lines:

```scss
@settings {
  layout-guides: x(coordinate), y(coordinate);
}
```

Replace `coordinate` with any number, indicating the x or y coordinate where you would like the guide to be drawn. `x(coordinate)` draws a vertical line, and `y(coordinate)` draws a horizontal line.

To draw circular guidelines, you can choose between two different syntaxes:

```scss
@settings {
  layout-guides: circle(radius), circle(x, y, radius);
}
```

If you're using the `circle(radius)` syntax, replace `radius` with any number to draw a circle with that radius. When you're using this syntax, the circle will always be centered at `0, 0`.

If you'd like to center your circle somewhere else, for example, an x coordinate of 40 and a y coordinate of 20, you can use the `circle(x, y, radius)` syntax. Replace `x` with the center's x coordinate, `y` with the center's y coordinate, and `radius` with the circle's radius.

**Note:** to add more than one guide, just leave a space between the guide declarations. Here's an example that adds two vertical lines, one horizontal line, one circle with radius `100` centered at `0, 0`, and one circle with radius `100` centered at `100, 50`:

```scss
@settings {
  theme: dark;
  layout-guides: x(0) x(100) y(0) circle(100) circle(100, 50, 100);
}
```

![guides example](../images/guides-dark.png)

For additional styling, use the `layout-guide-width` and `layout-guide-color` properties to customize the width and color of guides.

## Add a radar

You can add a radar of concentric circles to your background to play with positining of your elements. If you want to pin elements in place, visit [this guide here](../faq/how-do-keep-elements-from-moving.md).

![default radar](../images/radar-default.png)

You can use the `radar` property of `@settings` in the Advanced Editor to add a radar:

```scss
@settings {
  radar: on;
}
```

The radar will come with a few default rings and axes, which you can easily override using the `radar-rings` and `radar-axes` properties. Each comma-separated value in those properties will create and label a new ring or axis:

```scss
@settings {
  radar: on;
  radar-rings: INTENT, DESIGN, FEEDBACKS, PARAMETERS;
  radar-axes: BEFORE PROBLEM, FIRST CONCERN, PROBLEM, CRISIS, ADAPT OR RESTORE;
}
```

![systems leverage radar](../images/systems-leverage-radar.png)

You can customize your radars extensively, changing the color, font color, the distance between rings, etc. To see a full list of supported properties and learn how they customize the radar, head over to our [@settings reference](../overview/advanced-editor-hub/settings-reference.md) (type "radar" to filter the list).

## Add a background image

For full instructions on adding a background image, see [our full images guide](images.md#add-a-background-image).
