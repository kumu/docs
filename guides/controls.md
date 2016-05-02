# Controls

Controls allow you to customize how people interact with your maps.
You can use them to overlay buttons, images, text and more! Interactive controls
can be used to transform the current view's setting too, such as filter, focus,
and clustering.

![Image of a custom control](/images/custom-controls-intro.png)

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

## Available controls

- [Title control](controls/title-control.md)
- [Text control](controls/text-control.md)
- [Label control](controls/label-control.md)
- [Field-filter control](controls/field-filter-control.md)
- [Cluster control](controls/cluster-control.md)
- [Tagged-timeline control](controls/tagged-timeline-control.md)
- [Color-legend control](controls/color-legend-control.md)
- [Image control](controls/image-control.md)
