# Share and embed maps

If you're looking to share or embed your public or private maps, click the "more" icon (**...**) in the lower right corner and then choose "Share / embed this map". You'll be prompted with this window:

![embed modal](/images/embed-modal.png)

**Title** allows you to add a title to the shareable link. This won't be displayed to your readers—it will simply add a label to the link in your embed modal, so that you can identify it when you have a long list of links that you've created.

**Password**, only available when the project is private, allows you to add a password to protect the map. When people visit the shareable link, they won't be able to see the map until they enter the password.

**Include map overview in sidebar** allows you to include the sidebar in your shared/embedded map. If you don't select this option, the map will be displayed full screen. When your readers start to interact with the map, the sidebar will follow the standard behavior&mdash;when an element, connection, or loop is clicked, the profile will expand.

**Include current position and scale** allows you to override the default "zoom fit" positioning of the map and instead use a custom position and zoom level.



When you're done adjusting the settings, click "Create embed / share link". Then, just copy the share link and send it to a friend, or copy and paste the iframe code into your website to embed.

You can also use the external link button (<i class="fa fa-external-link-square"></i>) to open the map link in a new tab.

<p class="alert alert-warning">
  Anyone who has access to the the share link or the embedded version (and, when applicable, the password) will be able to view the map, even if the project is private.
</p>

<div class="alert alert-warning">
  <p>
    Shared/embedded maps will reflect updates you have made to the content of the map (elements, connections, and loops) and to views. Note that updates may take up to one hour to appear.
  </p>
</div>

## Advanced Options for Embeds

By default, embeds include all of the built-in map controls (search, zoom, and settings). If you don't need them, you can use the URL parameters below to pick and choose what you want to include:

- `search=0` hides the search control
- `zoom=0` hides the zoom buttons
- `settings=0` hides the settings button
- `bare=1` hides all built-in controls
- `simple=1` hides all controls except the zoom buttons
- `scroll=1` allows readers to zoom in and out by scrolling

To use them, just add the desired parameters to the query string of the embed URL.

Here's an example of how you would disable the settings button:

```
embed.kumu.io/abc123?settings=0
```

Note that you need to put a `?` after the default URL before adding custom parameters.

Also, if you are using more than one custom parameter, join them together with `&`. For example, to disable zoom **and** settings, you would use:

```
embed.kumu.io/abc123?zoom=0&settings=0
```

<p class="alert">
  To avoid interfering with page scrolling, scroll-to-zoom is disabled when embeds are served within <code>iframe</code> elements. You can use the <code>scroll=1</code> parameter if you would like to restore scroll-to-zoom behavior.
</p>

## Embed a presentation

In Kumu, you can create [presentations](/guides/presentations.md) to walk your readers through a map, step-by-step. You can also embed presentations on other websites—[check out the presentations guide](/guides/presentations.md#embed-a-presentation).


<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/guides/share-and-embed.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
