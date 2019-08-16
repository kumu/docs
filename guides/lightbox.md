# Lightbox

In Kumu, you can embed content from external providers into a **lightbox**.

<!-- ![Lightbox showing a loop in Kumu](/images/lightbox-kumu.png) -->

![Lightbox showing a YouTube video in Kumu](/images/lightbox-youtube.png)

To show content in a lightbox, start by finding a link to the embeddable version of the external content. Once you have the link, just add add `?lightbox` to the end for the default lightbox, or add `?lightbox=full` for a nearly-fullscreen lightbox.

Add the completed link into one of the following places in your map:
- The Map Overview located in the [side panel](/overview/map-editor.html#side-panel)
- The text for any [presentation](/guides/presentations.html) slide
- The Description field in any [profile](/guides/profiles.html)
- Any custom field with its [field type](/guides/fields.html#customize-a-field) set to Text or URL

<!-- content's URL. For Kumu maps, you can simply open the map and copy the link from the URL bar. For content from other providers, you'll need to find a link  -->

<!-- Note: if your lightbox embeds Kumu content from another location in the same Kumu project, feel free to omit the first part of the URL:

```
Instead of this:
https://kumu.io/MyUsername/my-project/#my-map

Use this:
#my-map
``` -->


<p class="alert alert-info">
<b>Tip:</b> Add the lightbox to a custom field named <code>URL</code> with its type set to URL, and the lightbox will open when your element, connection, or loop is double-clicked.
</p>

<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/guides/lightbox.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
