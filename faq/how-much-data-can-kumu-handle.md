# How much data my Kumu project handle?

In a Kumu project, there's no hard limit on how much data you can store. Maps, views, fields, elements, connections, and loops—in theory, your project can fit as many of each item as you want.

However, if you've ever imported a large list of elements and connections into a map, you've probably noticed that the animations and loading times start to slow down. So, while there is no theoretical limit to how much data you can store in a project, there is definitely a practical limit that will be different for each Kumu user.

There are several factors involved that will affect your Kumu project's limit:

- Your computer's processing power
- The browser you're using (Google Chrome, Edge, Firefox, and Safari are the best options)
- The speed of your internet connection, especially when the map is first loading up, and when you're searching the map for the first time after refreshing the page
- The renderer you're using: Canvas (slower, but supports more varied decorations), or WebGL (faster, but supports less visual variety)

If you notice that your project is starting to lag or move slowly in any way, you can try switching to a lower quality or different renderer.

To switch to a lower quality, open your [default view settings](/guides/default-view-settings.html), and change the **quality** from **best** to **low/fast**.

Switching to the faster WebGL renderer will have a comparable if not slightly better effect on performance. To do that, copy/paste the following code into your Advanced Editor:

```
@settings {
  renderer: webgl;
}
```

If you're not a fan of the squares and straight lines that come with lower quality and the WebGL renderer, you could alternatively hide all images from the map. To do this, open the Advanced Editor and paste in this code snippet:

```
* {
  image-visibility: hidden;
}
```

If none of these steps seem to be helping enough, [prompted focus mode](/guides/focus.html#prompted-mode) is worth considering. It's a different reading experience, but it's good for large maps, because it allows the reader to start with nothing on the screen, and work their way up to a larger map, instead of starting with the entire map and whittling their way down to the portion they actually want to read.

Finally, there are a few other steps that are unlikely to have a big impact, but might help a little:
1. Close as many browser tabs as possible.
2. Exit any applications on your computer that are using a lot of CPU. On Mac, you can use the built-in Activity Monitor tool to help find those applications, and on Windows, you can use Task Manager.

<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/faq/how-much-data-can-kumu-handle.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
