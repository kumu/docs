# Controls

Controls allow you to customize how people interact with your maps. You can use them to overlay buttons, images, text and more! Interactive controls can be used to transform the current view's setting too, such as filter, focus,
and clustering.

<p><iframe width="560" height="315" src="https://www.youtube.com/embed/eBo1St2laTw" frameborder="0" allowfullscreen></iframe></p>

<!-- ![Image of a custom control](/images/custom-controls-intro.png) -->


### Add controls through the Basic Editor

You can use the [Basic Editor](/overview/view-editors.md#basic-editor) to add a few simple types of controls to your map. Click the Settings icon <i class="fa fa-sliders"></i> to open the editor, then click **MORE OPTIONS** and select **Add custom control**. Kumu will open up the controls builder, with a few options pre-selected:

![controls builder ui](/images/control-builder.png)

Use the dropdown menus in the controls builder to set up your control, then, when you're done, click the back arrow <i class="fa fa-arrow-left"></i> to return to the main screen, and click **SAVE**.

### Add controls through the Advanced Editor

To unlock the full set of flexible controls features, you can use the [Advanced Editor](/overview/view-editors.md#advanced-editor). Here's an example of what controls look like in the Advanced Editor:

```
@controls {
  top {
    showcase {
      by: "Element type";
    }
  }
}
```

In general, controls are defined with the `@controls` block, grouped into regions, and customized using properties. You can add multiple controls to a region, and even override or move Kumu's built-in controls. Here's the general syntax that shows how multiple regions can be used, and how multiple controls can be added to the same region:

```
@controls {
  region {
    control {
      property: value;
      property: value;
      ....
    }

    another-control {
      property: value;
      property: value;
      ...
    }
  }

  another-region {
    some-other-control {
      ...
    }
  }
}
```

#### Regions

Adding a custom control to your map starts by picking where you want to place the control.
Controls can be assigned to one of six **regions** on the map:

* `top`
* `top-left`
* `top-right`
* `bottom`
* `bottom-left`
* `bottom-right`

```
@controls {
  top-left {
    title {
      value: "This map has a title!";
    }
  }
}
```

#### Control type

After you set the region, you can choose what **type of control** you are adding. Here are the available control types:

- `title`: [Title control](controls/title-control.html)
- `text`: [Text control](controls/text-control.html)
- `label`: [Label control](controls/label-control.html)
- `showcase`: [Showcase control](controls/showcase-control.html)
- `filter`: [Filter control](controls/filter-control.html)
- `cluster`: [Cluster control](controls/cluster-control.html)
- `tagged-timeline`: [Tagged-timeline control](controls/tagged-timeline-control.html)
- `color-legend`: [Color-legend control](controls/color-legend-control.html)
- `image`: [Image control](controls/image-control.html)
- `sna-dashboard`: [Social Network Analysis Dashboard control](controls/sna-dashboard-control.html)



#### Properties

Controls are customized using **properties**, and each control understands a slightly different set of properties. In the example below, `by` is a property of the `showcase` control that accepts a field name (wrapped in quotes).

```
@controls {
  bottom {
    showcase {
      by: "Element type";
    }
  }
}
```

For a full list of the properties that each control understands, read the individual control guides (linked above), or check out the [controls reference](controls/controls-reference.html).


#### Children

Sometimes, controls need to work with complex lists of options. Since these would be overwhelming to define in a single line, the items are included as **children** of the control instead, and follow a similar syntax to the controls themselves.

In the example below, we call the `option` blocks the "children" of the `showcase` control, and each child includes its own set of properties.

```
@controls {
  top-left {
    showcase {
      option {
        label: "People";
        selector: person;
      }

      option {
        label: "Orgs";
        selector: organization;
      }
    }
  }
}
```

You can read through the individual control guides (linked above) to see which controls accept children and which properties their children understand.


#### Groups

By default, controls are each stored on their own line, and they each have their own set of properties. However, if you want to display a group of controls on one line (for example, along the top of your map), and assign a few common properties and values (for example, `font-size: 16`) to all of them, you can use **groups**.

To group controls, use the following `group` syntax:

```
@controls {
  region {
    group {
      property: value;

      control {
        property: value;
        property: value;
        ...
      }
      another-control {...}
      an-additional-control {...}
    }
  }
}
```

The properties that get set underneath `group` will apply to all controls nested inside the group. And before you ask—yes, it's possible to nest groups inside of other groups as well!


#### Built-in controls

All of Kumu's built-in controls (search, zoom buttons, settings buttons, the [legend](/guides/legends.html)) are handled by the same platform that custom controls are built on. That means you can move the built-in controls around, omit ones you don't need, or even reset the built-in controls and start from scratch.

Although you won't see it in your Advanced Editor, here's the default `@controls` code working behind the scenes:

```
@controls {
  top-left {
    search {}
  }

  top-right {
    zoom-toolbar {}
    settings-toolbar {}
    focus-toolbar {}
  }

  bottom-left {
    legend {}
  }
}
```

You can omit individual controls by including the region in your `@controls` block, without the control inside of it. For example, if you wanted to keep the search bar, but omit all other built-in controls, you could use:

```
@controls {
  top-right {}
  bottom-left {}
}
```

Note that if you add controls to a region in your code, but don't explicitly include the default control, it will be hidden. For example, this code will hide the `zoom-toolbar`, `settings-toolbar`, and `focus-toolbar`:

```
@controls {
  top-right {
    title {
      value: "Oops! I hid some useful controls.";
    }
  }
}
```

If you want to quickly start from scratch without any of Kumu's built-in controls, you can use `reset: true`.

```
@controls {
  reset: true;

  top {
    title {
      value: "Check out my custom controls";
    }
  }

  bottom {
    showcase {
      by: "Element type";
    }
  }
}
```

<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/guides/controls.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
