# Presentations

Presentations combine the best of PowerPoint, Prezi, and Kumu into one easy-to-use tool. Combine text, video, images and maps into a single, engaging presentation that anyone can access via URL.

## Create a presentation

Presentations can be accessed through the main menu of your project. When you create a new presentation, you'll land on a title slide, to which you can add a title, subtitle, and background image.

![presentations interface](../images/presentations-ui.png)

Use the plus button in the upper left corner to add a slide. After the title slide, your added slides can be one of several types:

* Title
* Map
* Text
* Image
* Embed

### Title slides

Title slides are useful when you want to signal the start of a new section in your presentation. They let you add a nice splash image with some overlayed text:

![title slide](../images/presentation-title-slide.jpg)

### Map slides

A map slide is any combination of a map and a view. You can choose to have the slide zoom fit by checking the corresponding box, or you can create just the zoom you'd like but zooming in or out.

On a map slide, you can use the dropdown menus above the slide to choose which map and view will be applied. You can pick any map or view in your project.

![change presentation view](../images/change-presentation-view.gif)

You can also activate focus or filter for a given map slide, and Kumu will remember those settings. This is a great way to unfold a map step-by-step for your readers.

### Text slides

Text slides can include both a title and content. The content section supports markdown so you can also include images and other basic formatting (widgets aren't supported though).

![text slide](../images/presentation-text-slide.png)

### Image slides

As you might expect, image slides allow you to upload an image to be displayed full screen on a slide. They're particularly useful for bringing in images of graphs or charts created outside of Kumu. You can also choose to include a title.

![image slide](../images/presentation-image-slide.jpg)

### Embed slides

Embed slides are for interactive web content and support embeds from over [300 different providers](http://embed.ly/providers). Just add the URL of the content you'd like to embed.

## Publish a presentation

Once you're finished creating your presentation, click save and then exit the presentation builder. Click "publish" to publish the presentation and choose whether you'd like to make the presentation public (unless your project is public in which case your presentation is automatically public) or if you'd like to make it even more secure by adding a password.

After you publish, Kumu will give you a link that you and your audience can use to view your presentation.

Want to skip your title slide when you view the presentation? Just add `/embed` to the end of the presentation's link (only supported for public presentations, not private ones).

## Embed a presentation

Presentations can also be embedded just like any other Kumu embed: as an `iframe` on a web page. To get your `iframe` embed code, just publish your presentation, and Kumu will generate the code for you automatically:

![presentation embed code](../images/embed-presentation.png)

Copy/paste the code onto your website, and you're visitors will see a fully interactive Kumu presentation!

## Autoplay a presentation

If you want your presentation to automatically advance to the next slide, use the tool below to create a custom autoplay link. Note that when you enable autoplay on a presentation, Kumu will automatically loop around to the first slide after it reaches the end of the presentation.

Advance to the next slide after  seconds

```
<i class="fa fa-copy" id="copy-icon" onclick="copyCustomUrl()">  </i>
```

Copied to clipboard

function customUrlEffect () { document.getElementById("copy-success").style.opacity = "0"; const url = (() => { try { return new URL(document.getElementById('presentation-url').value) } catch { return '' } })() if (!url) { return } const params = url.search ? url.search.replace(/^\\?/, '').split('&').filter(param => !param.startsWith('autoplay')) : \[] const seconds = Number(document.getElementById('autoplay-seconds').value) const customUrl = params.length > 0 ? \`${url.origin}${url.pathname}?${params.join('&')}\&autoplay=${seconds}\` : \`${url.origin}${url.pathname}?autoplay=${seconds}\` document.getElementById('presentation-url-custom').value = customUrl } function copyCustomUrl() { const customUrl = document.getElementById('presentation-url-custom').value navigator.clipboard.writeText(customUrl) .then(() => document.getElementById("copy-success").style.opacity = "1") }
