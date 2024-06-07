# Flags

Flags are a [data-driven decoration](data-driven-decorations.md) created specifically for multi-pick fields (fields like Tags that can hold more than one value). When you decorate elements with flags, Kumu draws colored arcs around the outside of those elements. Each flag represents one of the possible values in the multi-pick field.

![Flags example](../images/flags-with-filter.png)

If you're using the **Color by** tool in the Basic Editor, and you select a multi-pick field, Kumu will automatically use flags to color code your elements.

{% hint style="info" %}
Is the Color by tool applying flags for a field that isn't a multi-pick field? Try [changing the field's limit](fields.md#customize-a-field) to "One" instead of "One or more".
{% endhint %}

In the Advanced Editor, you can use the `flags` property to add flags. Here's the basic syntax:

```scss
element {
    flag: "Field" with colorPalette;
}
```

You can replace `element` with any element [selector](selectors.md), `Field` with any multi-pick field, and `colorPalette` with any palette from our [color reference](../overview/advanced-editor-hub/color-reference.md). To further customize the flags' appearance, you can use the `flag-size` property to control the thickness of the flags, and the `flag-offset` property to control the distance between the flags and their element.

You can also activate flags using the `@settings` block, like so:

```scss
@settings {
  element-flag: "Leverage Analysis" with neon2;
}
```

The advantage of using `@settings` to apply flags is that all of your colors and the corresponding field values will be added to your map's legend.

The downside of using `@settings` to apply flags is that the decoration will always be applied to _all_ the elements on your map—which might not always be desirable! But, it's easy to turn off flags for certain elements using `flag: none`, like so:

```scss
@settings {
  element-flag: "Leverage Analysis" with neon2;
}

element["Should I have flags?"="No!"] {
  flag: none;
}
```

This code uses the `@settings` block to add flags to all elements, then, taking advantage of Kumu's [cascade rules](flags.md#cascading-decorations), it uses `flag: none` to turn off flags for a smaller selection of elements.

You can also manually assign colors to values if you just want to choose specific colors for specific values, or if you don't want to highlight the whole set.

```scss
@settings {
  element-flag: "Leverage Analysis" with yellow "bright spot", #2dc63f "frozen";
}
```

The syntax is `color "value"`. You can replace `color` with a named color or an [HTML hex color code](https://www.w3schools.com/colors/colors\_hexadecimal.asp), and you can replace `value` with an actual value from your field. If you're coding more than one `color "value"`, separate them with a comma.

![flag decorations](../images/flags-manual.png)

By default, the [geo template](templates/geo.md) limits you to squares and straight lines, but if you want it to support flags as well, add `@settings { renderer: canvas; }` to your Advanced Editor.
