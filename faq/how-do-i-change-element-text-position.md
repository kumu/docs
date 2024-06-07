# How do I change the position of my element labels?

{% hint style="info" %}
It's not possible to control text position when you're using the [SNA template](../guides/templates.md#sna-social-network-analysis-template), or any view that has "fast" quality or uses the WebGL renderer.
{% endhint %}

## Change element label position for all elements

If you want to change the position of your element labels for all elements, follow these steps:

1. Click on the settings icon ![](../icons/sliders-h.svg) on the right side of your map
2. Click **Customize defaults**
3. Look for "Default label position" under "Element defaults". You can change the position of the labels to "bottom" or "center."

## Change element label position for specific set of elements

To change the element label position for a specific set of elements, you'll need to use the [advanced editor](../overview/view-editors.md#advanced-editor). You'll be using the `text-align` [property](../overview/advanced-editor-hub/property-reference.md) to make the change, where the options are `bottom` and `center`.

To change the element label position from "bottom" to "center" so that the labels will appear inside of the elements, you'll want to add `text-align: center;` under a [selector](../guides/selectors.md) for the specific set of elements. For example, if you want to change the element label position from "bottom" to "center" for all your elements of the type "person" add this to the advanced editor:

```scss
person {
  text-align: center;
}
```
