# @settings

Certain features of Kumu are only exposed via the advanced editor of your current view within an `@settings` block. Here's your guide to those features:

## Custom clustering

You can activate clustering automatically within a view by using the <code>cluster</code> setting within the <code>@settings</code> block. Here's the basic format:

```
@settings {
 cluster: "selector" by "field" as "type";
}
```

Both <code>selector</code> and <code>type</code> are optional, and multiple clusters can be added by separating them with a comma.  If you just include a field name then clustering will behave identical to the existing cluster form.

The <code>selector</code> determines which elements to cluster, <code>field</code> determines what to cluster by, and <code>type</code> overrides the element type assigned to the new elements. By default we use the singular form of the field name as the type for both the elements and connections that are created.

## Showcasing

To showcase a selection (muting all other map content except that selection), use the `showcase` setting within `@settings` and add a selector:

```
@settings {
  showcase: selector;
}
```
This will highlight the selection and any connections between that selection. You can further customize what is include in the showcase by including `!strict` (only the selection) or `!loose` (selection and anything directly connected to it):

```
@settings {
  showcase: selector !strict;
}
```

## Adjusting the opacity of the showcase behavior

When you hover over any element or connection we'll automatically showcase that selection, meaning that we mute the other elements in the map that are beyond one degree from the selection. If you'd like to disable this or tweak how muted the showcase behavior is, use the `background-opacity` setting:

```
@settings {
  background-opacity: 1;
}

```

## Predefined focus

To activate a focus automatically within a view, use the `focus` setting within `@settings` and add a selector:

```
@settings {
  focus: selector out n;
}
```

The `selector` determines which elements to focus on, and `n` is the number of degrees out from that selection you'd like to include in the focus.

## Modifying label wrap behavior

By default, Kumu wraps longer labels and allows you to force a line break at any point by including a double space. If you need more granularity, we expose a number of settings within @settings for you to use:

```
@settings {
  text-overflow: off; // single line
  text-overflow: auto; // break on double space if present, or auto wrap at 20
  text-overflow: auto 10; // break on double space if present, or auto wrap at 10. Replace 10 with any number to customize.
  text-overflow: manual; // double space for line break, no auto wrap
  text-overflow: wrap 10; // wrap at 10 chars, soft. Replace 10 with any number to customize.
  text-overflow: clip 10; // truncate at 10 chars, soft. Replace 10 with any number to customize.
}
```

## Adjusting connection length based on custom field

By default our layout algorithm treats all connections the same (same spring strength and length). If you'd like to modify that behavior to have shorter or stronger connections based on a given connection field, you can do so by adding the following (example based on using a quantitative "strength" field):

```
@settings {
  connection-strength: scale("strength", 0, 1);
  connection-size: scale("strength", 1, 20);
}
```

This also works for `connection-length` as well. You can also use this to assign specific strength and size values based on qualitative values for connections:

```
connection["level of influence"="high"] {
  connection-strength: 1;
}

connection["level of influence"="low"] {
  connection-strength: 0.2;
}

```

## Adding grid lines

You can add a grid to the background of your map using this line in the @settings block:

```
@settings {
  layout-grid: auto;
}
```

For more control over the grid settings, use these settings:

```
@settings {
  layout-grid: on;
  layout-guides: x(0) y(0) circle(100);
  layout-grid-width: 2; // line width
  layout-grid-offset: 20; //spacing between lines
  layout-grid-color: #999;
  layout-guide-width: 4;
  layout-guide-color: #333;
}

```

## Culling

By default we'll hide the connections between any elements that aren't within the current view. This helps boost performance but isn't always the desired behavior. To turn culling off, use these settings:

```
@settings {
  culling: off;
}

```
For example, say a connection went from one corner of a systems map to another–as you zoomed in you would stop seeing that connection cross the map (since those elements that are part of the connection are no longer in the viewable area). In this case, if you were to turn culling off, you would continue to see those connections even upon zooming in.


## Changing the color of the selection

When you select an element you'll see a colored ring appear around it (or rectangle based on which template you are using). This color is also based on whether you are using a light or dark theme. If you'd like to change this color, use `selection-color` within `@settings`:

```
@settings {
  selection-color: orange;
}

```

## WebGL Renderer

You can switch from using our standard canvas-based renderer to a WebGL renderer. The WebGL renderer is helpful when working with large maps and should be able to handle networks with thousands of elements and connections. To switch renderers, just add:

```
@settings {
  renderer: webgl;
}

```

WebGL [isn't supported by all browsers yet](http://caniuse.com/#feat=webgl) so be cautious when using it on public maps where you want people with older browsers to be able to see the map.

<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/guides/advanced-settings.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
