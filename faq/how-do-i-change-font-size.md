# How do I change font size?

The quickest way to change font size on your map is through the [default view settings](/guides/default-view-settings.html) menu.

1. Click the settings icon <i class="fa fa-sliders" /> to open the [Basic Editor](/overview/view-editors.html#basic-editor)
1. Click **More Options**, then select **Customize view defaults**
1. Scroll down to the **Font defaults** section, and use the slider to adjust your view's base font size

This solution is quick, but not the most flexible—your font size changes will apply to everything on the map, and you're constrained to a maximum font size of `60` and a minimum font size of `1`. For a more flexible solution, you can use the [Advanced Editor](/overview/view-editors.html#advanced-editor) to set the `font-size` property directly.

One way to do that is in the `@settings` block, like so:

```
@settings {
  font-size: 100;
}
```

This gives you precise control over the font size—you can change the `100` to any positive number. However, this solution still applies your font size to everything on the map. If you want to change the font size for a specific group of elements and connections, you can use [selectors](/guides/selectors.html), like so:

```
element {
  font-size: 75;
}
```

The code snippet above will only change the font size for elements, but will leave connections and loops at the default font size. For more information on how to change the `element` selector to something even more specific (for example, just the elements whose Element Type is "Organization"), see [our full guide on selectors](/guides/selectors.html).

<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/faq/how-do-i-change-font-size.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
