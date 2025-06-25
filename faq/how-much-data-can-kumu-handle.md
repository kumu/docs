# How much data can my Kumu project handle?

In a Kumu project, there's no hard limit on how much data you can store. Maps, views, fields, elements, connections, and loops—in theory, your project can fit as many of each item as you want.

However, if you've ever imported a large list of elements and connections into a map, you've probably noticed that the animations and loading times start to slow down. So, while there is no theoretical limit to how much data you can store in a project, there is definitely a practical limit that will be different for each Kumu user, depending on how much data you have and what it contains.

There are several factors involved that will affect your Kumu project's limit:

* Your computer's processing power
* The browser you're using (Google Chrome, Edge, Firefox, and Safari are the best options)
* The speed of your internet connection, especially when the map is first loading up, and when you're searching the map for the first time after refreshing the page
* The renderer you're using: Canvas (slower, but supports more varied decorations), or WebGL (faster, but supports less visual variety)

### Optimizing for large maps

If you notice that your project is starting to lag or move slowly in any way, here are a couple of remedies to try:&#x20;

1. **Switch to the Big Data template**

This template already has settings built-in that make it easier to work with larger datasets. To switch templates, click the Settings icon on the right side of your map to open the Basic Editor. Then, select Customize defaults from the list. In the menu that appears, scroll down to the General settings section. In that section, you can use the Template dropdown menu to select a different template. Don't forget to click SAVE at the bottom to finish the process.

2. **Hide images in your map**

If you're map is using lots of images, hiding them (or deleting them from your dataset entirely) can help. To do this, open the Advanced Editor and paste in this code snippet:

```scss
* {
  image-visibility: hidden;
}
```

3. **Switch to a lower quality**

To switch to a lower quality, click the Settings icon on the right side of your map to open the Basic Editor. Then, select Customize defaults from the list. In the menu that appears, scroll down to the General settings section. In that section, change the **Quality** from **high** to **low/fast**.

4. **Switch to a WebGL renderer**

Switching to the faster WebGL renderer will have a comparable if not slightly better effect on performance. To do that, copy/paste the following code into your Advanced Editor (click Settings > choose Switch to Advanced Editor at the bottom of the menu):

```scss
@settings {
  renderer: webgl;
}
```

If none of these steps seem to be helping enough, [prompted focus mode](../guides/focus.md#prompted-mode) is worth considering. It's a different reading experience, but it's good for large maps, because it allows the reader to start with nothing on the screen, and work their way up to a larger map, instead of starting with the entire map and whittling their way down to the portion they actually want to read.

Similarly, you can use a filtered view that starts with very little data and allows your audience to view _parts_ of your additional data through a dynamic control. Here is the basic syntax to paste into your Advanced Editor (for more info, please visit the [Filter controls guide](../guides/controls/filter-control.md)):&#x20;

```
@controls {
  bottom {
    filter {
      target: element;
      by: "element type"; [or any other field you'd like to use here]
      as: buttons; [option to replace to "dropdown" if you have lots of options]
      multiple: false;
      default: "Person"; [or any other field you'd like to use here. Option to set "default: hide-all;" to start with nothing]
    }
  }
}
```

Finally, there are a few other steps that are unlikely to have a big impact, but might help a little:

1. Close as many browser tabs as possible.
2. Exit any applications on your computer that are using a lot of CPU. On Mac, you can use the built-in Activity Monitor tool to help find those applications, and on Windows, you can use Task Manager.
