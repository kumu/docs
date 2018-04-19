# How do I control label size while scaling element size?

If you're using a quantitative value to [scale the size of elements](/guides/decorate.md#size-by), your labels might sometimes be too big or much too small for some elements. When that happens, you can follow this guide to have more precise control over your label size.

![font size example](/images/color-size-decorations.png)


## Maintain a constant label size

If you used the **Size by** tool in the Basic Editor to create your size decoration, your element labels will have varying sizes:

![scaled label](/images/scaled-text.png)

To make sure your labels always maintains a constant size, even while the circles scale up and down, you can tweak your size decoration in the [Advanced Editor](/overview/view-editors.md#advanced-editor).

Open the Advanced Editor, and find the code that looks similar to this:

```
@settings {
    element-scale: scale("Field", 1, 10);
}
```

In your code, `Field` will be replaced by the name of the field you sized by, and the `1` and `10` will be replaced by the numbers you set when creating the decoration. At this point, you need to change the `element-scale` property to `element-size`, like so:

```
@settings {
    element-size: scale("Field", 1, 10);
}
```

Then, you'll need to change the numbers inside the `scale()` function to create the proper visual effect. This is because the `element-scale` property interprets the numbers as **size multipliers**, while the `element-size` property interprets the numbers as **actual, precise element sizes**.

Try starting with numbers like this:

```
@settings {
    element-size: scale("Field", 20, 200);
}
```

Then, change the `20` and `200` until you see a visual effect on your map that you like.

At this point, your label will maintains a constant size, but if you want to change that size, you can use the `element-font-size` property in the `@settings` block:

```
@settings {
    element-size: scale("Field", 20, 200);
    element-font-size: 20;
}
```

Change the `20` to any number to find a label size that works for you.


## Fine-tune the scaled label size

If you like the look of scaled label sizes, but you don't quite like the way Kumu has scaled them, you can use the Advanced Editor to fine-tune the label size scaling. This is particularly useful when you've aligned element labels to be in the center of the elements, and you want to make sure each labels fits inside its element.

Open up the Advanced Editor, and use the `font-size` property and `scale()` function to set a minimum and maximum label size:

```
element {
    font-size: scale("Field", 10, 50)
}
```

Change the `10` and the `50` while observing the visual changes on your map. Through trial and error, you should be able to find a minimum and maximum value that makes the scale work well for all elements.

If you don't want this setting to apply to all elements, replace `element` with any valid [selector](/guides/selectors.md).

<p class="alert alert-info">
<b>Tip:</b> Find the largest scaled element on the map. Tweak the maximum <code>font-size</code> until the largest element's label looks good. Then, find the smallest scaled element, and adjust the minimum <code>font-size</code> until the label looks good.<br><br>From there, make slight tweaks to the minimum and maximum until all elements on the map look good.
</p>

<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/faq/how-do-i-control-label-size-while-scaling-element-size.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
