# How do I scale elements without the text size changing?

If you're using a quantitative value to scale the size of elements but don't want the font size to scale, you can use a `size: scale (...)` rather than the standard `scale: scale(...)`. The standard scale behavior changes both the element size and font size accordingly.

Instead of the format being scale: scale(...) it's actually size: scale(...) where "(...)" are the bounds for the scale. When using the "size" scale, use the actual element sizes (say "10" and "40") that you want to be the bounds for the scale rather than using the standard scale multiplier values you'd use in the standard "scale" (1x and 6x, etc.).

Example:

**Standard Scale:**
```
element {
  scale: scale(1, 4);
}
```

**Size scale:**
```
element {
  size: scale(10, 40);
}
```
