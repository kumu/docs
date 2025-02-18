# How do I make elements transparent?

Sometimes you might want to make elements transparent, so you can use them as labels elsewhere on the map. Here's how to do that!

### In the Basic Editor

1. Click on Settings and scroll down to Decorate Elements
2. Set the condition for which elements you want to make transparent (e.g. all elements, selected elements, or a custom rule)
3. Select the "Change color" checkbox
4. Click in the text box to pick your color and simply type "transparent"
5. Click the blue "Done" button at the bottom

### In the Advanced Editor

Use the following code, and adjust for a different [selector](../guides/selectors.md) if needed:&#x20;

```
element {
color: transparent;
text-align: center;
}
```
