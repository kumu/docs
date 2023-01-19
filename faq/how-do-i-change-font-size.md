# How do I change font size?

The quickest way to change font size on your map is through the [default view settings](../guides/default-view-settings.md) menu.

1. Click the settings icon _to open the_ [_Basic Editor_](../overview/view-editors.md#basic-editor)
2. _Click **More Options**, then select **Customize view defaults**Scroll down to the **Font defaults** section, and use the slider to adjust your view's base font size_

_This solution is quick, but not the most flexible—your font size changes will apply to everything on the map, and you're constrained to a maximum font size of `60` and a minimum font size of `1`. For a more flexible solution, you can use the_ [_Advanced Editor_](../overview/view-editors.md#advanced-editor) _to set the `font-size` property directly.One way to do that is in the `@settings` block, like so:_@settings {  font-size: 100;}_This gives you precise control over the font size—you can change the `100` to any positive number. However, this solution still applies your font size to everything on the map. If you want to change the font size for a specific group of elements and connections, you can use_ [_selectors_](../guides/selectors.md)_, like so:_element {  font-size: 75;}_The code snippet above will only change the font size for elements, but will leave connections and loops at the default font size. For more information on how to change the `element` selector to something even more specific (for example, just the elements whose Element Type is "Organization"), see_ [_our full guide on selectors_](../guides/selectors.md)_._
