# How much data my Kumu project handle?

In a Kumu project, there's no hard limit on how much data you can store. Maps, views, fields, elements, connections, and loops—in theory, your project can fit as many of each item as you want.

However, if you've ever imported a large list of elements and connections into a map, you've probably noticed that the animations and loading times start to slow down. So, while there is no theoretical limit to how much data you can store in a project, there is definitely a practical limit that will be different for each Kumu user.

There are several factors involved that will affect your Kumu project's limit:

- Your computer's processing power (more power = faster maps)
- The browser you're using (currently, Google Chrome runs Kumu the fastest—we check every so often, so we'll update this if need be)
- The speed of your internet connection (especially when the map is first loading up and when you're searching the map for the first time after rereshing the page)
- The renderer you're using: Canvas (slower, but supports more varied decorations), or WebGL (faster, but supports less visual variety)
- The render quality (Canvas renderer only)

If you notice that your project is starting to lag or move slowly in any way, here are a few steps you can take to troubleshoot:
1. In your [default view settings](/guides/default-view-settings.html), change the **quality** from **best** to **low/fast**. Alternatively, you  can switch to the faster WebGL renderer if you copy/paste the following code into your Advanced Editor:
  ```
  @settings {
    renderer: webgl;
  }
  ```
1. Hide images from the map. To do this, open the Advanced Editor and paste in this code snippet: `* { image-visibility: hidden; }`
1. Close as many browser tabs as possible.
1. Exit any applications on your computer that are using a lot of CPU. On Mac, you can use the built-in Activity Monitor tool to help find those applications, and on Windows, you can use Task Manager.

<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/faq/how-much-data-can-kumu-handle.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
