# How do I change the shape of an element?

Kumu supports circles and rectangles for your element shapes—your map will default to either all circles or all rectangles, depending on which [template](/guides/templates.html) you pick:
- The [SNA](/guides/templates.html#sna-social-network-analysis-template) and [Geo](/guides/templates/geo.html) templates default to all rectangles (squares, to be precise!)
- All other templates default to all circles

## Change from circles to rectangles

There are two ways to change from circles to rectangles. The first way is to use your [default view settings](/guides/default-view-settings.html) to change **quality** from **best** to **low/fast**. The downside of this approach is that, since it uses our fast renderer, you won't be able to add images to any elements, add arrows to connections, use curved connections, or customize the width & height of your rectangles.

If those downsides are dealbreakers for you, it's possible to use the Advanced Editor to change circles to rectangles instead, with this code:

```
@settings {
  element-shape: rectangle;
}
```

This setting will change all elements to rectangles, which will have square dimensions by default. To customize width and height of rectangles, you can use the `element-width` and `element-height` properties, like so:

```
@settings {
  element-shape: rectangle;
  element-width: 40;
  element-height: 20;
}
```

To change only specific elements to squares, you can write a [selector](/guides/selectors.md) in the Advanced Editor to tell Kumu which elements to change. Then, you'll use the `shape`, `width`, and `height` properties to tell Kumu how to style each element. Here's an example that selects all elements with the element type "Person" and makes them rectangles with `auto` width (expands to fit the Label text) and a height of `20`:

```
person {
  shape: rectangle;
  width: auto;
  height: 20;
}
```

## Change rectangles/squares to circles

Likewise, there are two ways to change from rectangles/squares to circles. If your map has squares by default, you're likely using the SNA or Geo templates. To make all those elements circles instead, you can add this snippet of code in your Advanced Editor:

```
@settings {
  renderer: canvas;
}
```

Alternatively, on the SNA template, you can use your [default view settings](/guides/default-view-settings.html) to change **quality** from **low/fast** to **best**. (This change won't affect the Geo template.)

If you're using `canvas` as the `renderer`, and your quality is set to **best**, but you're _still_ not seeing circles, you can add this snippet of code to the very bottom of your Advanced Editor:

```
@settings {
  element-shape: circle;
}
```

Or, you can use a [selector](/guides/selectors.html) to be more specific:

```
person {
  shape: circle;
}
```


## Use shapes that are _not_ circles or squares

While Kumu doesn't support other shapes officially, there's a workaround that allows you to use **any shape** for your elements: find an image of the shape, and set it as the background image for an element.

Here's a more detailed step-by-step:
1. Outside of Kumu, find or create an image of the shape you want to use.
1. Use the [element decoration builder](https://docs.kumu.io/guides/decorate.html#refine-your-decorations) to upload your image as a decoration for a selection of elements.
1. Click **Save** at the bottom of the settings panel to save your changes.

Optionally, you can use the decoration builder to set the color of your custom-shaped elements to match the background color of your map. If you're using the light theme (default on all templates except SNA), this color is `#fcfcfa`. If you're using the dark theme (default on the SNA template), this color is `#252525`.

Note that `#fcfcfa` and `#252525` will make it _look_ like your elements have transparent backgrounds, but it will not actually make them transparent. To make your elements' background colors truly transparent, you can use this snippet of code in your Advanced Editor:

```
element {
  color: transparent;
}
```

Replace `element` with a [selector](/guides/selectors.html) that matches the elements you want to decorate.

#### Sample shapes

![oval](/images/oval.png)

![rounded-square](/images/rounded-square.png)

![triangle](/images/triangle.png)

![hexagon](/images/hexagon.png)



<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/faq/how-do-i-change-element-shape.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
