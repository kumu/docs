# Color-legend control

**Use**

Add a color legend to your map.

**Example**

Build a color-legend manually:

```
@controls {
  bottom-left {
    color-legend {
      color {
        value: red;
        label: "All the red things";
      }

      color {
        value: blue;
        label: "All the blue things";
      }
    }
  }
}
```

Automatically build the `color-legend` from the `element-color` value in `@settings`:

```
@controls {
  bottom-left {
    color-legend {
      colors: auto;
    }
  }
}

@settings {
  element-color: categorize("Element type", set2);
}
```

**Supported properties**

* `colors` defaults to `auto` and tries to build the list of colors and labels

[Check out our controls reference](/guides/controls/controls-reference.md) to see the full list of properties and values recognized by the color legend control.

The `color-legend` can be customized using nested `color` blocks which support the following properties:

  * `value` the color itself ("red" or "#BA462F")
  * `label` the text to put next to the color
