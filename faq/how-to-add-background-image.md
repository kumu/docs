# How can I add a background image (e.g. map or logo) to my Kumu map?

To add a background image to a map, you'll need to be willing to dive into the [Advanced Editor](/overview/basic-vs-advanced-editor.html#advanced-editor). The following instructions assume you're adding a geo map but they can be used for adding any background image.

1. Create an element named "background".
2. Add the following code to the advanced editor:
```
#background {
    image-url: url(https://dl.dropboxusercontent.com/u/9002358/Kumu%20-%20Do%20Not%20Delete/world-map.png);
    layer: background;
    image-resolution: original;
    size: 5000;
    image-size: contain;
    shape: square;
    label-visibility: none;
    color: transparent;
}
```
3. If you need to adjust the position of the image element in the map you'll need to remove the `layer: background;` line. Adjust the position and then add back that line when you are done.e

**Notes:**
* "background" is the name of the element that will contain the background image in this example, but can be anything you want. Just name the element you add in step one the same thing that you put in the code above.
* `image-resolution` can have values of auto, original, or any number. The number you include (e.g. 1000) will adapt the resolution for an image of that width (1000px).
* `layer: background;` will turn off culling and pointer events for the background image. This means you can't select the element or move it. If you need to reposition the element, remove `layer: background;`, reposition the element, and then add that line back in.

As always, if you have any questions on how this works, email us at [support@kumu.io](mailto:support@kumu.io) for help!
