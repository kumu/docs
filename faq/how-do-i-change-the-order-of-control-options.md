# How do I change the order of control options?

After you add a [control](/guides/controls.html) to your map, you might need to rearrange the order of buttons or dropdown options in that control. The best way to accomplish this is to use the `only` option in your control in the Advanced Editor.

Normally, the `only` option is used to restrict the available options in your control. Imagine we have a "Sector" field with the following values:
- Finance
- Agriculture
- Healthcare
- Education

If we only want "Finance" and "Agriculture" to appear in our control, we could use the `only` option to do that:

```
@controls {
  top {
    filter {
      target: element;
      by: "Sector";

      // Restrict our filter options from many sectors down to just two:
      only: "Finance", "Agriculture";
    }
  }
}
```

However, when you pass options to the `only` property, Kumu will list the options on the map in the exact order you specified.

In our example above, imagine we want the order of our options to be "Finance", "Education", "Healthcare", and finally "Agriculture". To accomplish that, we can pass that list to the `only` option:

```
@controls {
  top {
    filter {
      target: element;
      by: "Sector";

      // Allow all our possible options to show up on the map,
      // but make sure they are in this specific order:
      only: "Finance", "Education", "Healthcare", "Agriculture";
    }
  }
}
```

<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/faq/how-do-i-change-the-order-of-control-options.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
