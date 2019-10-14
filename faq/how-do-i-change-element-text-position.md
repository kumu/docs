# How do I change the position of my element labels?

<p class="alert alert-warning">
It's not possible to control text position when you're using the <a href="/guides/templates.html#sna-social-network-analysis-template" class="alert-link">SNA template</a>, or any view that has "fast" quality or uses the WebGL renderer.
</p>

## Change element label position for all elements

If you want to change the position of your element labels for all elements, follow these steps:

1. Click on the Settings icon <i class="fa fa-sliders"></i> on the right side of your map
1. Click **MORE OPTIONS**, and select **Customize defaults**
1. Look for "Default label position" under "Element defaults". You can change the position of the labels to "bottom" or "center."

## Change element label position for specific set of elements

To change the element label position for a specific set of elements, you'll need to use the [advanced editor](/overview/view-editors.md#advanced-editor). You'll be using the `text-align` [property](/guides/property-reference.html) to make the change, where the options are `bottom` and `center`.

To change the element label position from "bottom" to "center" so that the labels will appear inside of the elements, you'll want to add `text-align: center;` under a [selector](/guides/selectors.md) for the specific set of elements. For example, if you want to change the element label position from "bottom" to "center" for all your elements of the type "person" add this to the advanced editor:

```
person {
  text-align: center;
}
```

<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/faq/how-do-i-change-element-text-position.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
