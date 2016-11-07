# How can I add a background image (like a map) to my Kumu map?

We are actively pursuing a geo maps feature that would allow users to plot a network map against a geographic map. While we're working on that, we've provided a temporary workaround with multiple uses allowing you to add a background image to a map. This enables the ability to add a geographic map to your Kumu map.

To add a background image to a map, you'll need to dive into the [Advanced Editor](/overview/basic-vs-advanced-editor.html#advanced-editor) and add some code. The following instructions assume you're adding a geo map but can be used for any background image.

* Create an element named "Geo".
* Add the following code to the advanced editor:
```
#geo {
  image-url: url(https://dl.dropboxusercontent.com/u/9002358/Kumu%20-%20Do%20Not%20Delete/world-map.png);
  image-size: contain;
  size: 5000;
  font-size: 0;
  shape: square;
  color: transparent;
  opacity: 0.2;
  pointer-events: none;
}
```
* Add this line to the `@settings` section at the top of the advanced editor: `culling: off;`.
* Toggle `pointer-events: none;` off to readjust the positioning of the image in the map. You'll need to remove that line from the code above whenever you need to reposition the image, then add it back in after you're done.

**Notes:**
* "Geo" is the name of the element that will contain the background image in this example, but can be anything you want. Just name the element you add in step one the same thing that you put in the code above.
* "Culling: off" means that even when zoomed in on the map, you'll still see all connections going from elements in the zoomed window to other places in the map.
* `pointer-events: none;` just means that you can't select this element, allowing you to click on other elements in the window.

As always, if you have any questions on how this works, email us at support@kumu.io for help!
