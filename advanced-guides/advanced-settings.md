# Advanced Settings

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
