# Sharing

## Embeds

If you're looking to share your map by including it in another website, click the embed button (<i class="fa fa-code"></i>) on the right hand side of the map. You'll be prompted with the following modal:

<img class="img-responsive" src="/images/embed-modal.png" />

**Include map overview in sidebar** allows you to include the sidebar in the embed. If you don't select this option the embed will have the map displayed full screen until you click on an element or connection and then the profile will expand.

**Include current position and scale** allows you to override the default positioning of the map and instead use the current position and zoom of the map as displayed in your browser.

Click "Embed this Map" to create the embed.

<img class="img-responsive" src="/images/embed-modal-created.png" />

Copy and paste the iframe code into your website and you're ready to go. You can also use the external link button (<i class="fa fa-external-link-square"></i>) to open the embed in a new tab. You can use the link for this website as a share link to send to others. Note that anyone will be able to access the map using this link without requiring a password so only share the link if you are okay with this.

### Advanced Options for Embeds

By default embeds include the whole user interface for Kumu. We often find that most embeds don't actually need the finder, footer, and screenshots. Not only were they not needed, they actually distracted users from the embed's content and purpose.

You can hide the finder, footer, and screenshot button through url parameters. We support the following parameters on embeds:

* **finder=0**
* **footer=0**
* **screenshot=0**
* **simple=1** (shorthand for all three above)

These are advanced settings so we've left them out of the standard embed settings. To use them simply tack them onto the end of your existing embed url.

To disable the footer and screenshots you'd use something like
```
kumu.io/embed/abc?footer=0&screenshot=0
```

To include the bare minimum, use the simple shorthand instead
```
kumu.io/embed/abc?simple=1
```

<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/guides/sharing.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
