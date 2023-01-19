# How do I customize link text in popovers?

When you're designing [popovers](/guides/popovers.md), it's possible to include clickable links that take people to other webpages.

To do this, paste the link into a field, then [set the field's type to "URL"](/guides/fields.md#customize-a-field). Popovers will automatically recognize the link, and make it clickable:

![](/images/popover-link-raw.png)

Often, it's nice to have custom text for these links too, instead of just the raw link. To accomplish that, you can take advantage of the fact that [popovers support Markdown syntax](/guides/popovers.md#using-markdown-to-style-the-popover). More specifically, you can enter a Markdown link, like the one you see below, into a field in a Kumu profile:

```
[Open Kumu's website](https://kumu.io)
```

Then, in Kumu, [set the field's type to "Text"](/guides/fields.md#customize-a-field). With that done, Kumu will show the custom link text in both the [profile](/guides/profiles.md) and in popovers.

![](/images/popover-link-custom-text.png)


