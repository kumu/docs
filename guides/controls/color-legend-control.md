# Color-legend control

**Use**

Add a color legend and optionally inherit colors from `element-color` set in `@settings`.

**Example**

```
@controls {
  bottom-left {
    // inherited colors
    color-legend {
      colors: inherit;
    }

    // explicit colors
    color-legend {
      color {
        value: red;
        label: "Red things";
      }

      color {
        value: blue;
        label: "Blue things";
      }
    }
  }
}

```

**Supported properties**

* `direction` vertical (default) or horizontal
* `colors` accepts either inherit or inherit-element-color
* `color` allows you to define each entry in the legend
  * `value` is the color itself ("red" or "#BA462F")
  * `label` is the text for the legend entry
