# Advanced Settings

Certain features of Kumu are only exposed via the advanced perspectives tab. Here's your guide to those features:

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
