# Image

**Use**

The image control can be used to overlay an image on top of your map. This is a great way to add custom legends, charts, or graphics to support the current view.

**Example**

```
@controls {
  bottom-right {
    image {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/President_Barack_Obama.jpg/220px-President_Barack_Obama.jpg";
      height: 140;
    }
  }
}
```

**Supported properties**

* `src` the url of the image to include (must be wrapped in quotes)
* `width` override the width of the image (optional)
* `height` override the height of the image (optional)

[Check out our controls reference](/guides/controls/controls-reference.md) to see the full list of properties and values recognized by the image control.
