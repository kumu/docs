# Fixed layout

With the fixed layout, you position everything manually. Just click and drag an element to change its location, or click and drag a connection to change its curvature. If you want to change the starting point of a connection (to make it start from another element), click on the starting point of the connection and drag it over to another element. The same steps can be used to change the ending point of a connection.

If you're building a fixed map with [Sketch Mode](/getting-started/first-steps.md#sketch-mode), you can hold the `Alt` key on your keyboard, then click and drag elements and connections to move them.

**Good to know:** The [system templates](https://docs.kumu.io/guides/templates.html#system-template) are set to a fixed layout by default.

## Changing from force-directed to fixed layout:

1. Click on the Settings icon <i class="fa fa-sliders"></i> on the right side of the map
1. Click **MORE OPTIONS** and select **Customize view defaults**
1. Scroll down to the **General settings** section to change the "Layout" to "off"
1. In the same section, change "Default element behavior" to "fixed"

If you would rather do this in the [Advanced Editor](/overview/view-editors.md#advanced-editor), here is the code you can use to switch to a fixed layout:

```
@settings {
    layout: static;
}
```

If you were previously using a force-directed layout, you may need to pin all the existing elements in place. You can do this by pressing `A` on your keyboard to select all, and then by clicking the pin button in the lower right of the element profile or pressing `P` on your keyboard.


<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/guides/layouts/fixed.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
