# Partial views

[Views](/guides/views.html) offer a lot of powerful features—[decorations](/guides/decorate.html) for sizing and coloring your data, [filters](/guides/filter.html) for showing/hiding different items, [controls](/guides/controls.html) for adding rich interactivity to your maps, and much more.

For most maps, you'll probably curate one view that highlights your data in the best way possible, but more complex data demands a more complex visual. Different color-coding and sizing rules, levels of focus, cluster connections...in short, to get the most value out of a more complex dataset, you'll need to create several different visual variations.

That's where partial views come in handy!

A **partial view** is almost exactly like a normal view—in the Advanced Editor, it's a block of code defining all the rules that affect the visual appearance of your map. But there's one major difference: you can use the [view toggle control](/guides/controls/view-toggle-control.html) to allow your readers to switch between your partial views at will, with just the click of a button.

![view toggle gif](/images/view-toggle.gif)

Right now, partial views are only available through the Advanced Editor—the proper syntax is explained below.

## Define partial views in the Advanced Editor

Use an `@view` block to define a partial view:
```
@view "name" {
  // any view code can go in here, including @settings, @controls, and @imports
}
```
Replace `name` with the name of your partial view (keep the double quotes). This `name` should be unique to the partial view—you'll use it in [`@import`](/guides/views-advanced.html#imported-views) rules and in the view toggle control to refer to your partial view.

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


<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/guides/partial-views.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
