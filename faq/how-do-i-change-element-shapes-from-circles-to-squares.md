# How do I change element shapes from circles to squares?

The default shape for elements in Kumu is a circle. If you'd like to change the default element shape to a square, here are a couple ways to do this:

### All elements

Use the following code in the advanced editor to change all elements to squares:
```@settings {
  element-shape: square;
}```

### Specific elements

In the advanced editor, add the following code to make all elements of the type "Person" a square:
```Person {
  shape: square;
}```

*Note: Changing the quality of the map from "Best" to "Fast" will change all element shapes to squares.*
