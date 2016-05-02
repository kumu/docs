# Custom controls

Custom controls allow you to add new UI elements, images, and text to your map to make browsing your project even easier.

![Image of a custom control](/images/custom-controls-intro.png)

## Location

Custom controls can be assigned to one of six locations on the map:

* top
* top-left
* top-right
* bottom
* bottom-left
* bottom-right

Activating a custom control in the advanced editor starts by picking where you want to place the control. The code for the control then goes within the location:

```
@controls {
  bottom {
    ADD CONTROL HERE
  }
}
```

## The controls

### Title

**Use**

Add a custom title to your map.

**Example**

```
title {
  value: "2016 Network size by betweenness";
}
```

**Supported properties**

* `value` is any plain text string.

### Text

**Use**

Add custom text to your map.

**Example**

```
text {
  value: "Betweenness measures the number of times
  someone is on the shortest path between any two people.";
}
```

**Supported properties**

* `value` is any plain text string.

### Label

**Use**

Add small bold text to your map.

**Example**

```
label {
  value: "© 2016 Kumu Inc.";
}
```

**Supported properties**

* `value` is any plain text string.

### Field filter

**Use**

Filter between one or more field values.

**Example**

```
field-filter {
  field: "Location";
  target: element;
}
```

**Supported properties**

* `field` defines which field should be use for the filter.
* `target` defines whether the filter should apply to elements, connections, or loops. To apply the filter to elements and connections, use `element,connection;`.

### Cluster

**Use**

Add simple button-driven clustering.

**Example**

```
cluster {
  cluster-option {
    value: person by "Projects" as "Project";
    label: "Project";
  }
  cluster-option {
    value: person by "Geographic region" as "Location";
    label: "Location";
  }
}
```

**Supported properties**

* `cluster-option` is included for each button and nests the corresponding settings.
  * `value` supplies the [advanced clustering setting](/clustering.html#advanced-clustering).
  * `label` is the label for the button.

### Tagged timeline

**Use**

Filter a network over time using years defined in the tag field.

*Note: If you include timeline data using the tag field, this controls provides clickable dates that can be used to filter the map. We recommend using years to define when an element/connection was present. You can supply multiple years to be able to allow disjointed timelines (e.g. 2012, 2013, 2016 for an element that was part of the network until 2013, then left and joined again in 2016).*

**Example**
```
tagged-timeline {
      range: 2000..2016;
      target: element;
    }
```
**Supported properties**

* `range` defines the years that should be included as clickable links.
* `target` defines whether the filter should apply to elements, connections, or loops. To apply the filter to elements and connections, use `element,connection;`.

### Color legend

**Use**

Add a color legend and optionally inherit colors from `element-color` set in `@settings`.

**Example**

```
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
```

**Supported properties**

* `direction` vertical (default) or horizontal
* `colors` accepts either inherit or inherit-element-color
* `color` allows you to define each entry in the legend
  * `value` is the color itself ("red" or "#BA462F")
  * `label` is the text for the legend entry

### Image

**Use**

Add a custom image.

**Example**

```
image {
  src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/President_Barack_Obama.jpg/220px-President_Barack_Obama.jpg";
  height: 140;
}
```

**Supported properties**

* `src` defines the URL for the image.
* `height` is the height of the image in pixels, written without units.
