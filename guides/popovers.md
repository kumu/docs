# Popovers

[Profiles](/guides/profiles.html) are great for including detailed background information about what you’re mapping. But sometimes they can be a bit overkill, and they do take up a lot of precious screen space. Sometimes you want to share just a little bit more context about an element or connection without having to open the profile.

**Popovers** allow you to display fields from the profiles when someone hovers over an element, connection, or loop.

<p><iframe width="560" height="315" src="https://www.youtube.com/embed/8BsjL6iXO5g" frameborder="0" allowfullscreen></iframe></p>


<div class="alert alert-warning">
  <p>
    When you're editing the map, the <a href="/guides/direct-decorations.html" class="alert-link">direct decorations toolbar</a> will hide popovers.
  </p>
  <p>
    However, anyone who has view-only access to the map or is viewing a <a href="/guides/presentations.html" class="alert-link">presentation</a> or a <a href="/guides/share-and-embed.html" class="alert-link">shared/embedded map</a> will still see your popovers (the direct decorations toolbar is hidden for them, since they can't make edits to your map).
  </p>
  <p>
    If you're building popovers and just want to see how they look before you publish, you can either follow the instructions in the <a href="/guides/direct-decorations.html" class="alert-link">direct decorations guide</a> to turn off the direct decorations toolbar, or simply click the ellipsis icon <i class="fa fa-ellipsis-h">  </i> in the bottom right corner and select "Switch to preview mode".
  </p>
</div>


## Basic popover syntax

Popovers are added through the Advanced Editor, using a simple syntax.

{% raw %}
```
selector {
  popover: "{{Field name}}";
}
```
{% endraw %}

Replace `selector` with any valid [selector](/guides/selectors.html), and replace `Field name` with the name of any of your fields. Remember to wrap each field name in double curly brackets {% raw %} `{{}}` {% endraw %} and wrap the entire popover value in double quotes.

For example, here is the code for an **element** popover that includes the **label** and **element type**:

{% raw %}
```
element {
  popover: "{{label}} {{element type}}";
}
```
{% endraw %}

<p class="alert alert-info">
When using the <strong>Type</strong> field in popovers, you need to specify whether it is <strong>Element</strong> Type, <strong>Connection</strong> Type, or <strong>Loop</strong> Type. For example, use <code>{% raw %}{{connection type}}{% endraw %}</code> when adding Type to a connection's popover.
</p>

## Using markdown to style the popover

You can use [markdown](/guides/markdown.html) to add italics, bold text, videos, and more to your popover. You can also add double spaces to create line breaks.

Here's a popover that uses markdown to style the label, add a horizontal rule, and add line breaks in between the fields:

{% raw %}
```
chapter {
  popover: "### {{label}}  ---  {{topic sentence}}  {{image}}";
}
```
{% endraw %}

![](/images/soil-biodiversity-markdown-popover.png)

Note that popovers automatically recognize images, so there's no need to style those with markdown. This works with hyperlinks as well—just use something like {% raw %} `{{website}}` {% endraw %} or {% raw %} `{{image}}` {% endraw %} in your popover, and the popover will render it properly.

Popovers also recognize multi-pick fields (like Tags) and will render them as bulleted lists.



## Resizing the popover

Kumu sets default popover sizes based on how much content is in each popover, but you can override these defaults using the `popover-height`, `popover-width`, and `popover-padding` properties. `height` and `width` control the vertical and horizontal size of the popover box, and `padding` controls the space between the edge of the popover and its contents.

{% raw %}
```
chapter {
    popover: "### {{label}}  ---  {{topic sentence}}  {{image}}";
    popover-height: 200;
    popover-width: 300;
    popover-padding: 3;
}
```
{% endraw %}

**Good to know:**
- `popover-width` is a great tool if you want to set a maximum width for images that you want to include in the popover. Kumu will resize the image to fit your `popover-width` without stretching or distorting the image.
- If the height of your content exceeds your `popover-height`, Kumu will add a vertical scroll bar to your popover.

## Use cases

Here are just a few cases where we think popovers are useful!

### Show connection labels on demand

Sometimes you want to use connection labels to add information (such as role or nature of a relationship) but don’t want those showing up on the map all the time. In that case, just add the following:

{% raw %}
```
connection {
  label-visibility: hidden;
  popover: "{{label}}";
}
```
{% endraw %}

![](/images/hawaii-board-connection-popover.png)

### Bring the profile into the popover

The profile is great when you have a lot of information in the description as well as a number of fields. But when you only have one or two fields, sometimes it is easier to disable the profile and just use popovers instead.

Our first step is to disable the profile for everything on the map:

```
* {
  profile: false;
}
```

We can then activate the popover for all elements and connections:

{% raw %}
```
element, connection {
   popover: "### {{label}}  {{image}}  {{description}}";
}
```
{% endraw %}

![](/images/elon-musk-profile-popover.png)

### Highlight key facts and figures

Ever sized elements or connections based on a quantitative data, but didn’t want people to have to dig through the profile to find the number? Use popovers to display those values instead:

{% raw %}
```
element {
  popover: "**Money raised for:** ${{money raised for}}  **Money raised against:** ${{money raised against}}"
}
```
{% endraw %}

![](/images/ca-ballot-quantitative-popover.png)



<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/guides/popover.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
