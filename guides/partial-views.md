# Partial views

[Views](views.md) offer a lot of powerful features—[decorations](decorate.md) for sizing and coloring your data, [filters](filter.md) for showing/hiding different items, [controls](controls.md) for adding rich interactivity to your maps, and much more. Different views [can also be layered on top of one another via the `@import` syntax](imported-views.md).

For most maps, you'll probably curate one view that highlights your data in the best way possible, but more complex data demands a more complex visual. Different color-coding and sizing rules, levels of focus, cluster connections...in short, to get the most value out of a more complex dataset, you'll need to create several different visual variations.

That's where partial views come in handy!

{% embed url="https://www.youtube.com/embed/GTGbmis2RZk" %}

A **partial view** is almost exactly like a normal view—in the Advanced Editor, it's a block of code defining all the rules that affect the visual appearance of your map. But there's one major difference: you can use the [view toggle control](partial-views.md#add-the-view-toggle-control) to allow your readers to switch between your partial views at will, with just the click of a button.

![view toggle gif](../images/view-toggle.gif)

## Recommended workflow for partial views

If you want to build partial views, some Advanced Editor work will be required, but you definitely don't need to code everything by hand if you don't want to.

For an alternative, potentially easier workflow, create a new view in your project and use the [Basic Editor](../overview/view-editors.md#basic-editor) to build out your desired view there, isolated from everything else.

When you're satisfied with your view, open the Advanced Editor and copy all of its code to your clipboard. Return to the original view, and follow the rest of this guide to make sure your copied code ends up in the correct place. You can also watch the quick tip above to see a real-world example of how this works.

## Define partial views in the Advanced Editor

Use an `@view` block to define a partial view:

```scss
@view "name" {
  // any view code can go in here, including @settings, @controls, @imports, and anything you have copied from other views in your project
}
```

Replace `name` with the name of your partial view (keep the double quotes). This `name` should be unique to the partial view—you'll use it in [`@import`](imported-views.md) rules and in the view toggle control to refer to your partial view.

Here's how you use a partial view's `name` to `@import` it into other partial views:

```scss
// Here's where the base settings are defined
@view "base-settings" {
  element {
    size: 40;
  }
}

// Partial One imports the base and adds its own settings
@view "partial-one" {
  @import "base-settings";

  element {
    color: green;
  }
}

// Partial Two also imports the base, but adds different settings than Partial One
@view "partial-two" {
  @import "base-settings";

  element {
    color: blue;
  }
}
```

If you just need to define some base settings that will apply to all your partial views, you can also simply do that at the top of the Advanced Editor, outside of any `@view` block, like so:

```scss
// Here's where the base settings are defined
element {
  size: 40;
}

// Partial One adds its own settings
@view "partial-one" {
  element {
    color: green;
  }
}

// Partial Two adds different settings than Partial One
@view "partial-two" {
  element {
    color: blue;
  }
}
```

## Add the view toggle control

To allow readers to switch between your partial views, you can add a view toggle control. Here's the syntax for adding the view toggle control in the Advanced Editor:

```scss
@controls {
  top {
    view-toggle {}
  }
}
```

You can use the `options` property inside the control to list exactly which partial views should be included as options:

```scss
@controls {
  top {
    view-toggle {
      options: "one-partial", "another-partial", "a-third-partial";
    }
  }
}
```

You can also use the `option {}` syntax if you'd like to customize the list of options _and_ how they're labelled on the map:

```scss
@controls {
  top {
    view-toggle {
      option {
        value: "one-partial";
        label: "Toggle first view";
      }

      option {
        value: "another-partial";
        label: "Toggle second view";
      }

      option {
        value: "a-third-partial";
        label: "Toggle third view";
      }
    }
  }
}
```

[Check out our controls reference](../overview/advanced-editor-hub/controls-reference.md) to see the full list of properties and values recognized by the view toggle control.

## The partial view cascade

Kumu's advanced editor applies decorations in a cascading order. This means that your most recently created decorations _can_ override your older decorations. Read more about this basic rule [here](data-driven-decorations.md#the-decorations-cascade). When using partial views, you might sometimes notice that your partial view isn't overriding the decorations of your default view. Read on below to learn how that works, and how you can work around it.

**Basic rule:** A separate element block of code will always override an @settings block, even when dealing with partial views.

**Rule for partial views:** This means that the simplified loading order with a "default view" and an "active partial" view becomes like this (first to last, meaning last decoration "wins" and is applied to your map):

1. @settings for current view
2. @settings for active partial view
3. other advanced editor code for current view
4. other advanced editor code for active partial view

**Example:** In the following code, you can see that the default view is using an element block to color the elements "orange", while the partial view is set up to color the elements either red, green, or blue based on the value in their Tags field.

```scss
@view "My Partial View" {
  @settings{
    element-color: categorize("Tags", red, green, blue);
  }
}

@controls {
  top {
    view-toggle {
      as: labels;
    }
  }
}

@settings {
  template: stakeholder;
}

element {
  color: orange;
}
```

As a result, activating the partial view will _not_ change the color of your elements, in accordance with the cascading rule.

To work around that, use the following code:

```scss
@view "My Partial View" {
  @settings{
    element-color: categorize("Tags", red, green, blue);
  }
}

@controls {
  top {
    view-toggle {
      as: labels;
    }
  }
}

@settings {
  template: stakeholder;
  element-color: orange;
}
```

Moving the element color within an @settings block allows your partial view to override the default view. If you're encountering any issues with this, don't hesitate to reach out to support@kumu.io.
