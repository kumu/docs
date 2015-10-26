# Advanced Settings

Certain features of Kumu are only exposed via the advanced perspectives tab. Here's your guide to those features:

## Custom clustering

You can activate clustering automatically within a perspective by using the <code>cluster</code> setting within the <code>@settings</code> block. Here's the basic format:

```
@settings {
 cluster: "selector" by "attribute" as "type";
}
```

Both <code>selector</code> and <code>type</code> are optional, and multiple clusters can be added by separating them with a comma.  If you just include an attribute name then clustering will behave identical to the existing cluster form.

The <code>selector</code> determines which elements to cluster, <code>attribute</code> determines what to cluster by, and <code>type</code> overrides the element type assigned to the new elements. By default we use the singular form of the attribute name as the type for both the elements and connections that are created.

## Showcasing

To showcase a selection (muting all other map content except that selection), use the `showcase` setting within `@settings` and add a selector:

```
@settings {
  showcase: selector;
}
```

## Predefined focus

To activate a focus automatically within a perspective, use the `focus` setting within `@settings` and add a selector:

```
@settings {
  focus: selector out n
}
```

The `selector` determines which elements to focus on, and `n` is the number of degrees out from that selection you'd like to include in the focus.

## Modifying label wrap behavior

By default Kumu will wrap longer labels and you can force a line break at any point by including a double space. If you need more granularity than we expose a number of settings within @settings for you to use:

```
@settings {
  text-overflow: off; // single line
  text-overflow: auto; // break on double space if present, or auto wrap at 20
  text-overflow: manual; // double space for line break, no auto wrap
  text-overflow: wrap; // wrap at element size, soft
  text-overflow: wrap 20; // wrap at 20 chars, soft
  text-overflow: clip; // truncate to element size, soft
  text-overflow: clip 20; // truncate at 20 chars, soft
}
```

## Adding grid lines

You can add a grid to the background of your map using these settings:

```
@settings {
  grid: on;
  guides: x(0) y(0) circle(100);
  grid-width: 2; // line width
  grid-offset: 20; //spacing between lines
  grid-color: #999;
  guide-width: 4;
  guide-color: #333;
}

```

## Culling

By default we'll hide the connections between any elements that aren't within the current view. This helps boost performance but isn't always the desired behavior. To turn culling off, use these settings:

```
@settings {
  culling: off;
}

```

<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/guides/advanced-settings.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
