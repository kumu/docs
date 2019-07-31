# How can my readers switch between maps and views?

When you share a project with your audience, and you've worked hard to create different maps or views, you'll want to make it easy for your readers to switch between those maps or views. There are a few different ways to do this—read through this FAQ to find out which option works best for you.

## Send readers directly to your project
<p class="alert alert-warning">
If you're working on a private project, this solution will only work for you and people you <a class="alert-link" href="/overview/collaboration.html#add-a-contributor">add as contributors</a>.
</p>

When you open your project, you'll see a link in the URL bar of your browser. Simply copy that link and share it with your audience, and they'll be able to use the map and view dropdowns to see all of your work. Note that your readers will see a nearly identical Kumu interface, but they won't be able to edit the project (unless it's someone you have [added as a contributor](/getting-started/first-steps.html#add-a-contributor)).

This is the simplest solution, but it might not be intuitive for readers who haven't used map and view dropdowns to navigate a Kumu project before. In that case, you'll want to use one of the three solutions below.


## Create a presentation

When you [create a presentation](/guides/presentations.md) in Kumu, you can apply a different map and/or view to each slide. When people view the presentation, they can click between slides to see your work, along with any explanatory text you want to include.

If you have a private project, you can also password-protect the presentation for extra security, and share the password only with your audience.

## Use partial views

Partial views can be used with the [view toggle control](/guides/controls/view-toggle-control.html) to allow readers to switch views at will, without leaving the current map. For more information, check out the [full guide on partial views](/guides/partial-views.html).


## Add map and view links to the Map Overview

It's possible to add hyperlinks to the Map Overview that readers can click to apply different views to the current map, or switch between maps. To edit the Map Overview, click anywhere on the white space of the map, then click the left side panel to start editing.

To create a link to another view, you'll use this pattern:
```
[link label](#map-slug/view-slug)
```
Replace `link label` with descriptive text. This is what your readers will see when they're looking at your links.

Then, replace `map-slug` with the [slug](/guides/slugs.html) of your map. The easiest way to find your `map-slug` is to look at the URL bar when your map is open. The pattern of the URL on any project is:

```
https://kumu.io/YourUsername/project-slug#map-slug/view-slug
```

The `#map-slug` will start with the `#` symbol and come after the project name and before a backslash `/`. The `view-slug` comes right after that backslash `/`. Copy both of these (including the `#` and `/`) and paste them inside parentheses after `[link label]` in your Map Overview.

If you're linking to the default view for a map, you can omit the `view slug`. Your end result would look similar to this:

```
[link label](#map-slug)
```

When you're done creating all the map and view links, you can [create a new share/embed link](/guides/share-and-embed.md) and send it to your audience.


<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/faq/how-can-readers-switch-maps-and-views.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
