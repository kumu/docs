# Embeds

If you're looking to share your map by including it in another website, click the more menu (...) in the lower right corner and then choose "embed map on another website". You'll be prompted with the following window:

<img class="img-responsive" src="/images/embed-modal.png" />

**Include map overview in sidebar** allows you to include the sidebar in the embed. If you don't select this option the embed will have the map displayed full screen until you click on an element or connection and then the profile will expand.

**Include current position and scale** allows you to override the default positioning of the map and instead use the current position and zoom of the map as displayed in your browser.

Click "Create embed" to generate the embed code.

Copy and paste the iframe code into your website and you're ready to go. You can also use the external link button (<i class="fa fa-external-link-square"></i>) to open the embed in a new tab. You can use the link for this website as a share link to send to others. Note that anyone will be able to access the map using this link without requiring a password so only share the link if you are okay with this.

## Advanced Options for Embeds

By default, embeds include all of the built-in map controls (search, zoom, and settings). If you don't need them you can use the url params below to cherrypick the ones you want to include:

- **search=0** hide the search control
- **zoom=0** hide the zoom buttons
- **settings=0** hide the settings button
- **bare=1** shorthand for hiding all built-in controls
- **simple=1** shorthand for hiding all but the zoom buttons

To use them just add the desired parameters to the query string of the embed url.

Here's an example of how you would disable the settings button:

```
embed.kumu.io/abc?settings=0
```

To disable zoom and settings you would use:

```
embed.kumu.io/abc?zoom=0&settings=0
```

To hide all of the built-in controls use the `bare` shorthand:

```
embed.kumu.io/abc?bare=1
```

<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/guides/embeds.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
