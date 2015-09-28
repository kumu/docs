# Frequently Asked Questions

### Can I share my maps with others?

Of course! Check out the [sharing](../advanced-guides/sharing.md) guide to learn about embeds and screenshots or [add a collaborator](../advanced-guides/collaboration.md) to your project.

### Do you have high resolution screenshots available? Or a PDF?

We offer a paid service ($9 per PDF) to create a PDF of any map. Just send the link of your map to [prints@kumu.io](mailto:prints@kumu.io).

### How can I select all elements on my map? All connections?

Use the ***a*** keystroke to select all elements on your map.

### Why does my map keep moving?

Kumu has a custom layout engine which creates a high quality layout regardless of map size. Use the spacebar keystroke to pause the layout. If you'd rather not have the layout change after you're happy with it, select all elements using the ***a*** keystroke and then click the pin button in the toolbar.

### How can I get arrows to show up for the connections on my map?

### 


### Is there a limit to how many collaborators I can have in an account?

Every hosted Kumu account comes with unlimited collaborators. Our Enterprise version is billed in 20-seat packs.

### Does Kumu only create curved connections?

By default all connections are curved. You can change the curvature of connections in one of two ways:

* **Dragging connections** - For pinned maps, if you click and drag a connection you'll be able to change the radius of the curve. This is especially useful in system maps when trying to avoid lines crossing each other unneccessarily.
* **Through the settings menu** - You can set the default curvature of connections using the settings menu. Simply drag the slider to achieve the curvature you want.

### Can I size or color elements based on social network analysis metrics like degree and betweenness centrality?

Yes! Head over to the [Network Analysis Guide](/guides/network-analysis.html) for more information.

### How do I add images to the elements on my map?

To add an image to an element on your map, create an "Image" attribute and then paste the URL as the value for the given element. Also, if you create an "Email" attribute and add an email for a given person or company, Kumu will look whether a gravatar exists for that email and if so use that as the image.

### Can I create dashed connections?

Yep! Currently dashed connections are controlled only through Advanced CSS. Below is the code to create dashed connections for all connections with strength = low:

```
connection["strength"="low"] {
  pattern: dashed
}
```
Note that support for dashed connections isn't great across all browsers, so you may be better off using color instead.

### Is it possible to create nested or layered networks?

Yes, we recommend creating separate maps and then using the description to create links to help ease navigation between various levels or layers. Read the [markdown guide](/guides/markdown.html) to learn how to create links to other maps.

### Does Kumu integrate with data from other tools/platforms?

Integrations with data from other tools/platforms are in progress. Have a platform you're looking to integrate with? <a href="mailto:support@kumu.io">Let us know!</a>

In the meantime, you can always use our handy [import feature](/basics/imports.html).

### What browsers is Kumu compatible with?

Kumu works with the latest versions of:

* [Chrome](https://www.google.com/chrome)
* [Safari](http://www.apple.com/safari/)
* [Firefox](http://www.mozilla.org/)
* [Internet Explorer 10](http://windows.microsoft.com/en-US/internet-explorer/download-ie)

Kumu doesn't work with:

* Internet Explorer 9 and earlier IE versions
* Other browsers not listed above

We've built Kumu utilizing the latest web technologies (HTML5, CSS3 and JavaScript) to create the best experience possible. Unfortunately many browsers are only beginning to support these fully. If you're not already using one of the recommended browsers above, please use the links to download and install the browser before continuing to use Kumu.

Support for mobile is under development. You'll be able to access Kumu on iOS devices but you'll have the best experience by using Kumu on a laptop or desktop computer with one of the supported browsers.
