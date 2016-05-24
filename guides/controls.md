# Controls

Controls allow you to customize how people interact with your maps.
You can use them to overlay buttons, images, text and more! Interactive controls
can be used to transform the current view's setting too, such as filter, focus,
and clustering.

![Image of a custom control](/images/custom-controls-intro.png)

## Example

Controls are currently in beta and can only be added through the [advanced editor](../getting-started/basic-vs-advanced-editor.md). Here's an example of what controls look like:

```
@controls {
  top {
    showcase {
      by: "Element type";
    }
  }
}
```

In general, controls are defined with the `@controls` block, grouped into regions, and customized using properties. You can add multiple controls to a region and even override the default controls built into Kumu. Here's the general syntax that shows how multiple regions can be used, and how multiple controls can be added to the same region:

```
@controls {
  region {
    control {
      property: value;
      property: value;
      ....
    }
    
    another-control {
      property: value;
      property: value;
      ...
    }
  }
  
  another-region {
    some-other-control {
      ...
    }
  }
}
```

## Regions

Adding a custom control to your map starts by picking where you want to place the control.
Controls can be assigned to one of six regions on the map:

* top
* top-left
* top-right
* bottom
* bottom-left
* bottom-right

```
@controls {
  top-left {
    title {
      value: "This map has a title!";
    }
  }
}
```

## Properties

Controls are customized using properties, and each control has its own unique set of properties that it accepts. In the example below, `by` is a property of the `showcase` control that accepts a field name (wrapped in quotes).

```
@controls {
  bottom {
    showcase {
      by: "Element type";
    }
  }
}
```

You'll want to read the individual guides (further below) to learn which options are available for each control.

## Children

Sometimes controls need to work with complex lists of options. Since these would be overwhelming to define in a single line, the items are included as children of the control instead, and follow a similar syntax to the controls themselves.

In the example below, we call the `option` blocks the "children" of the `showcase` control, and each child includes its own set of properties.

```
@controls {
  top-left {
    showcase {
      option {
        label: "People";
        selector: person;
      }
      
      option {
        label: "Orgs";
        selector: organization;
      }
    }
  }
}
```

## Available controls

- [Title control](controls/title-control.md)
- [Text control](controls/text-control.md)
- [Label control](controls/label-control.md)
- [Showcase control](controls/showcase-control.md)
- [Filter control](controls/filter-control.md)
- [Cluster control](controls/cluster-control.md)
- [Tagged-timeline control](controls/tagged-timeline-control.md)
- [Color-legend control](controls/color-legend-control.md)
- [Image control](controls/image-control.md)

## Advanced

### Overriding built-in controls

All of Kumu's built-in controls (search, zoom buttons, settings buttons) are now handled by the same platform that custom controls are built on. That means you can move the built-in controls around, omit ones you don't need, or even reset the built-in controls and start from scratch.

By default, @controls looks like this:

```
@controls {
  top-left {
    search {}
  }
  
  top-right {
    zoom-toolbar {}
    settings-toolbar {}
  }
}
```

If you wanted to keep search but drop the others you could use:

```
@controls {
  top-left {
    search {}
  }
  
  top-right {}
}
```

Or, if you wanted to start from scratch without any of Kumu's built-in controls you could use something like:

```
@controls {
  reset: true;
  
  top {
    title {
      value: "Check out my custom controls";
    }
  }
  
  bottom {
    showcase {
      by: "Element type";
    }
  }
}
```

