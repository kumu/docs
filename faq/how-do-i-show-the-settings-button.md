# How do I show the Settings button?

If you've been playing around with [controls](../guides/controls.md), there's a chance you may have inadvertently hidden the settings button, the zoom toolbar, and/or the focus toolbar. This happens anytime you place a control in the "top-right" region, without explicitly telling Kumu you still want to see the other buttons that normally live there.

This guide offers some quick fixes to bring any of those buttons back.&#x20;

For more context on why custom controls are able to hide the default buttons, [see our full guide on controls](../guides/controls.md#built-in-controls).

## Move top right controls to a different region

If you're okay with your controls being in a different region of the map, and not in the top-right, follow these steps:

1. Press `T` on your keyboard to open the right-hand side panel. If it's not already showing the Advanced Editor, click "Switch to advanced editor" at the bottom.
2. At the top of the advanced editor, look for the `@controls` block of code, then locate the `top-right` block of code inside it.
3. Change `top-right` to any other region: `top`, `bottom`, `top-left`, `bottom-left`, or `bottom-right`.

After that, the default buttons will be visible again on the map.

## Move the default buttons to a different region

If you really want your custom control to be in the top-right, and you'd rather move the default buttons somewhere else, follow these steps:

1. Press `T` on your keyboard to open the right side panel. If it's not already showing the Advanced Editor, click "Switch to advanced editor" at the bottom.
2. At the top of the advanced editor, look for `@controls {`. Place your cursor after the curly bracket `{`, and press `Enter` on your keyboard to move to the next line.
3. On the next line, type the name of a different controls region: `top`, `bottom`, `top-left`, `bottom-left`, or `bottom-right`. Type a space, then a curly bracket `{`, then hit `Enter` again to open a new block.
4. Inside that block of code, add the controls code for the settings toolbar, zoom toolbar, and focus toolbar, as shown in the complete example below:

```scss
@controls {
  // Replace top-left with any region other than top-right
  top-left {
    zoom-toolbar {}
    settings-toolbar {}
    focus-toolbar {}
  }
}
```

{% hint style="info" %}
Even if the settings button is hidden, it's always possible to open the settings panel by pressing `T` on your keyboard.
{% endhint %}
