# Fixed layout

With the fixed layout, you position everything manually. Just drag an element to change its location or drag a connection to change its curvature.

To change to a fixed layout:

1. Click on the settings button <i class="fa fa-sliders"></i> on the right side of the map
2. Choose "settings"
3. Scroll down to the map settings section to change "Default element behavior" to "fixed"

If you were previously using a floating layout, you may need to pin all the existing elements in place. You can do this by pressing `A` on your keyboard to select all, and then by clicking the pin button in the lower right of the element profile or pressing `P` on your keyboard.

If you would rather do this in the [Advanced Editor](https://docs.kumu.io/overview/basic-vs-advanced-editor.html#advanced-editor), here is the code you can use to switch to a fixed layout:

```
@settings {
    layout: static;
}
```

**Good to know:** The [system templates](https://docs.kumu.io/guides/templates.html#system-template) are set to a fixed layout by default.

<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/guides/layouts/fixed.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
