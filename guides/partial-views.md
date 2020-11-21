# Partial views

[Views](/guides/views.html) offer a lot of powerful features—[decorations](/guides/decorate.html) for sizing and coloring your data, [filters](/guides/filter.html) for showing/hiding different items, [controls](/guides/controls.html) for adding rich interactivity to your maps, and much more.

For most maps, you'll probably curate one view that highlights your data in the best way possible, but more complex data demands a more complex visual. Different color-coding and sizing rules, levels of focus, cluster connections...in short, to get the most value out of a more complex dataset, you'll need to create several different visual variations.

That's where partial views come in handy!

<p><iframe width="560" height="315" src="https://www.youtube.com/embed/GTGbmis2RZk" frameborder="0" allowfullscreen></iframe></p>

A **partial view** is almost exactly like a normal view—in the Advanced Editor, it's a block of code defining all the rules that affect the visual appearance of your map. But there's one major difference: you can use the [view toggle control](#add-the-view-toggle-control) to allow your readers to switch between your partial views at will, with just the click of a button.

![view toggle gif](/images/view-toggle.gif)


## Recommended workflow for partial views

If you want to build partial views, some Advanced Editor work will be required, but you definitely don't need to code everything by hand if you don't want to.

For an alternative, potentially easier workflow, create a new view in your project and use the [Basic Editor](/overview/view-editors.html#basic-editor) to build out your desired view there, isolated from everything else.

When you're satisfied with your view, open the Advanced Editor and copy all of its code to your clipboard. Return to the original view, and follow the rest of this guide to make sure your copied code ends up in the correct place. You can also watch the quick tip above to see a real-world example of how this works.


## Define partial views in the Advanced Editor

Use an `@view` block to define a partial view:
```
@view "name" {
  // any view code can go in here, including @settings, @controls, @imports, and anything you have copied from other views in your project
}
```
Replace `name` with the name of your partial view (keep the double quotes). This `name` should be unique to the partial view—you'll use it in [`@import`](/guides/imported-views.html) rules and in the view toggle control to refer to your partial view.

Here's how you use a partial view's `name` to `@import` it into other partial views:

```
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

```
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

```
@controls {
  top {
    view-toggle {}
  }
}
```

You can use the `options` property inside the control to list exactly which partial views should be included as options:

```
@controls {
  top {
    view-toggle {
      options: "one-partial", "another-partial", "a-third-partial";
    }
  }
}
```

You can also use the `option {}` syntax if you'd like to customize the list of options _and_ how they're labelled on the map:

```
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

[Check out our controls reference](/guides/controls/controls-reference.md) to see the full list of properties and values recognized by the view toggle control.

<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/guides/partial-views.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
