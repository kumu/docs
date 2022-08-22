# Shapes

Shapes are are a useful visual tool when you need to differentiate between different types of elements. Kumu has several tools you can use to customize elements' shapes—this guide will help you pick which tool is the right one for your use case:
- [Assigning shapes manually](#Assigning-shapes-manually)
- [Assigning shapes to specific selections](#Assigning-shapes-to-specific-selections)
- [Assigning shapes to all elements automatically](#Assigning-shapes-to-all-elements-automatically)
- [Assigning shapes from the Advanced Editor](#Assigning-shapes-from-the-Advanced-Editor)


## Assigning shapes manually

If you just need to assign shapes to a handful of elements, we recommend using the [direct decoration toolbar](/guides/direct-decorations.html). Hover over any element, then click the Size/Shape icon <i class="fa fa-arrows-alt">  </i>, and pick a shape from the dropdown.

![shapes direct decoration](/images/shapes-direct-decoration.png)


## Assigning shapes to specific selections

To assign a shape to a specific selection of elements, use the **element decoration builder**.
1. Open the [Basic Editor](/overview/view-editors.html#basic-editor)
2. Click **More Options**, then **Decorate elements**
3. Check the **Add shape** box, and pick a shape
4. If you'd like to add your shape decoration to the legend, fill in the **Legend** box

![decoration builder shapes](/images/shapes-decoration-builder.png)


## Categorizing your elements with shapes automatically

The quickest way to assign shapes to all elements automatically based on their profile data is the **Shape By** tool. Open the Basic Editor, and use the Shape By tool to pick a field from your elements' profiles. Note that Shape By only works with fields that can hold one value, like Element Type.

![simple shape by](/images/shape-by-simple.png)

When you use Shape By, legend entries will be created for you automatically.

![legend shapes](/images/shapes-legend.png)


## Assigning shapes from the Advanced Editor

In the Advanced Editor, you can use the `shape` property to assign shapes. Here's the basic syntax:

```
element {
  shape: circle;
}
```

You can replace `element` with any element [selector](/guides/selectors.html), and `circle` with any valid shape:
- `circle`
- `triangle`
- `square`
- `rectangle`
- `pill`
- `diamond`
- `pentagon`
- `hexagon`
- `octagon`

<p class="alert alert-info">
  <b>Two things to note:</b> 
<br>
1. When choosing the `rectangle` or `pill` shapes, you also need to indicate their "width" and "height": 
<br>
2. To change the size of any shape other than the `square`, `rectangle` or `pill`, use the "size" property, instead of width/height.
</p>

Instead of setting a shape directly, you can also use the `categorize()` function to assign shapes based on a field:

```
element {
  shape: categorize("Element Type");
}
```

The `categorize()` function has its own list of default shapes, but you can list your own shapes to customize which ones are used, and in what order:

```
element {
  shape: categorize("Element Type", diamond, hexagon, triangle);
}
```

Or, list a shape and a specific field value to control precisely how those shapes get assigned:

```
element {
  shape: categorize("Element Type", diamond "Person", hexagon "Organization");
}
```

Finally, if you'd like your categorized shapes to be automatically added to the legend, use the `element-shape` rule inside a `@settings` block:

```
@settings {
  element-shape: categorize("Element Type", diamond, hexagon, triangle);
}
```

<div class="alert alert-warning">
  <p>
    By default, the <a href="/guides/templates/geo.html" class="alert-link">geo template</a> limits you to squares and straight lines, but if you want it to support all shapes, add <code>@settings { renderer: canvas; }</code> to your Advanced Editor.
  </p>
</div>

<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/guides/shapes.html" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
