# Filter

Filters allow you to show and hide elements, connections or loops based on information stored in their [fields](/guides/fields.html). This guide will help you master filters, one of the most powerful tools in Kumu!

<p class="alert alert-info">
Before you start: <a class="alert-link" href="/guides/fields.html">use fields</a> to add additional information to your elements, connections, and loops.
</p>


## Filter in the Basic Editor

Click the Settings icon <i class="fa fa-sliders"></i> on the right side of the map, then click the icon to the right of **Filter** to open up your filter settings.

![filter](/images/overview-filter.png)

If you're filtering by element or connection type, simply un-check the types you want to hide. To filter using other fields, use the "also include" and "but ignore" fields. Click the rocket icon <i class="fa fa-rocket"></i> to the right of the input of each field to select what you want to hide or make visible.

If you've hidden certain elements and connections using the type checkboxes, you can use the **Also include** tool to bring things back into view. But, you first have to un-check some of the boxes above, or this tool will have no effect.

Use the **But ignore** tool to hide elements and connections from your map. Anything you add here will override the settings in the checkboxes above and the **Also include** tool.


## Filter in the Advanced Editor

If you prefer working in the Advanced Editor, you can use the `include` and `ignore` properties in the `@settings` block to activate filters. Here's the basic syntax:

```
@settings {
    include: selector;
    ignore: selector;
}
```

You can replace `selector` with any valid [selector](/guides/selectors.html). For example, here is the code for a view that includes elements with the element type "Person" but ignores all elements who have no Tags in their profile:

```
@settings {
    include: person;
    ignore: element[!"tags"];
}
```

If you want to include or ignore multiple different selections, you can separate selectors with a comma. Here's the code for a view that includes three different selections:
1. All connections
1. All elements with the element type "Organization"
1. All people with the tag "Board of Directors"

```
@settings {
    include: connection, organization, element["tags"*="Board of Directors"];
}
```

#### Ignore orphans

You can also use the `ignore-orphans` property in the `@settings` block to automatically filter out any elements that have no connections. Possible values for this property are `true` or `false`.

```
@settings {
    ignore-orphans: true;
}
```


<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/guides/filter.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
