# How do I control text wrapping?

<p class="alert alert-warning">
It's not possible to control text-wrapping when you're using the <a href="/guides/templates.html#sna-social-network-analysis-template" class="alert-link">SNA template</a>, or any view that has "fast" quality or uses the WebGL renderer.
</p>

When you want to fit text inside of an element, or just make sure that labels underneath elements aren't too wide, you can customize your **text-wrapping**.

As long as you aren't using the [SNA template](/guides/templates.html#sna-social-network-analysis-template), "fast" quality, or the WebGL renderer, you can force a line break in the label of an element, connection, or loop by adding a **double-space** inside the label.

Here's a screenshot of an element before adding any double-spaces:

![element with unusually long label](/images/unusually-long-label.png)

And here's a screenshot of that same element, with a double-space between the words "with" and "an", and with a double-space between the words "unusually" and "long".

![element with unusually long label broken up using double-spaces](/images/unusually-long-label-double-space.png)

For a solution that's a bit more automated, and doesn't require you to open each profile and tinker with double-spaces in every label, you can use the `text-overflow` property in the Advanced Editor. You can use `text-overflow` inside of [`@settings`](/guides/default-view-settings.html#change-default-view-settings-in-the-advanced-editor), or inside of a block that starts with any [selector](/guides/selectors.html).

```
@settings {
  text-overflow: auto 20;
}

element {
  text-overflow: wrap 10;
}
```

The table below has a description of all the possible values you can use for the `text-overflow` property, and what the effect of each one is.

| Value | Effect on text overflow |
| --- | --- |
| `off` | Text wrapping will be turned off completely. |
| `auto` | Shorthand for `auto 20` (see `auto [number]` explanation). |
| `auto [number]` | Text will wrap at the first space it finds after `[number]` characters (e.g. `10` characters if you specify `auto 10`). If you add a double-space anywhere in the label, the entire label will only wrap at double-spaces. |
| `manual` | Text will only wrap at double-spaces. |
| `wrap` | Shorthand for `wrap 20` (see `wrap [number]` explanation). |
| `wrap [number]` | Text will wrap at the first space it finds after `[number]` characters (e.g. `10` characters if you specify `wrap 10`). Double-spaces will be ignored and will nor force text to wrap. |
| `clip` | Shorthand for `clip 20` (see `clip [number]` explanation). |
| `clip [number]` | Text will clip and be replaced with an ellipsis after `[number]` characters (e.g. `10` characters if you specify `clip 10`). Text will never wrap.  |

<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/faq/how-do-i-control-text-wrapping.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
