# How do I change the position of my element labels?
## Change element label position for all elements

If you want to change the position of your element labels for all elements, click on the settings button on the right side of your map and look for "Default label position" under "Element Settings". You can change the position of the labels to "bottom" or "center."

## Change element label position for specific set of elements

To change the element label position for a specific set of elements, you'll need to use the [advanced editor](/overview/basic-vs-advanced-editor.html#advanced-editor). You'll be using the `text-align` [property](/guides/property-reference.html) to make the change, where the options are `bottom` and `center`.

To change the element label position from "bottom" to "center" so that the labels will appear inside of the elements, you'll want to add `text-align: center;` to the selector for the specific set of elements. For example, if you want to change the element label position from "bottom" to "center" for all your elements of the type "person" add this to the advanced editor:

```
person {
  text-align: center;
}
```
