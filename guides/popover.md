# Popover

Popovers allow you to display fields from the profiles when someone hovers over an element, connection, or loop.

## Activating hover using the advanced editor

To activate hover using the advanced editor, use the `popover` property within `@settings`:

```
@settings {
  popover: "{{description}}";
}
```

You could choose to include a different field or multiple fields by changing the portion within the quotes and wrapping the field name in double brackets. For example, below would include both label and tags (using markdown to bold the label and a double space to create a line break):

```
@settings {
  popover: "**{{label}}**  {{tags}}";
}
```

You could also create different behavior for elements and connections:

```
element {
  popover: "description";
}

connection {
  popover: "label";
  label-visibility: hidden;
}
```

<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/guides/popover.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
