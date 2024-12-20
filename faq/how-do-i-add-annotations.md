# How do I add annotations?

Sometimes, it's useful to add plain text to a map to annotate or explain different pieces of the visual. Kumu doesn't have built-in support for these kinds of annotations, but you can follow this guide to achieve the same effect.

{% embed url="https://www.youtube.com/embed/PGZZui7XASk" %}

First, create a new element, and use the full text of your annotation as the element's label. Then, change the element's type to `Annotation` and add the following code to your Advanced Editor:

```scss
annotation {
  color: transparent;
  text-align: center;
  shape: rectangle;
  width: auto;
  text-overflow: wrap 50;
  font-size: 20;
}
```

You can change the `50` in the `text-overflow` property to adjust the number of characters that Kumu will allow before wrapping to the next line. You can also use the `font-size` property to set a specific font size.

With your annotation styled, you can drag it into place on your map. Once your satisfied with its location, return to the Advanced Editor and add one more line of code to your block: `layer: background`.

```scss
annotation {
  color: transparent;
  ...
  layer: background;
}
```

`layer: background` allows other items (like connections) to cross over the annotation, and it prevents people from clicking the annotation. If you ever need to move the annotation again, you can remove that line of code, move the element, then add the code back in.

{% hint style="info" %}
You don't have to use the type `Annotation` for your annotations—you can use any element type, as long as the [selector](../guides/selectors.md) (e.g. `annotation`) in your Advanced Editor code matches what you chose.
{% endhint %}
