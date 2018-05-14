# How do I change element shapes from circles to squares?

The default shape for elements in Kumu is a circle. If you'd like to change all elements or certain elements to a square, you can do so using the [Advanced Editor](/overview/view-editors.md#advanced-editor).

## All elements

Use the following code in the advanced editor to change all elements to squares:

```
@settings {
  element-shape: square;
}
```

## Specific elements

To change only specific elements to squares, you'll need to write a [selector](/guides/selectors.md) in the Advanced Editor to tell Kumu which elements to change. Then, you'll use the `shape` property to tell Kumu that those elements should be `square`. Here's an example that selects all elements with the element type "Person" and makes them squares:

```
person {
  shape: square;
}
```

<p class="alert alert-warning">
Changing the quality of the map from "Best" to "Fast" will change all element shapes to squares.
</p>

<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/faq/how-do-i-change-element-shapes-from-circles-to-squares.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
