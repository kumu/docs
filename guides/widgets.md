# Widgets

We've built a [flexible widget framework](https://github.com/kumu/widgets) to make it easy to embed your favorite content within Kumu. Widgets are curently supported for:

* Vimeo ```[[vimeo/:id]]```
* YouTube ```[[youtube/:id]]```
* Slideshare ```[[slideshare/:id]]```
* Speaker Deck ```[[speakerdeck/:id]]```

## The Widgets

### Vimeo

Use the code below to embed a Vimeo video in the profile. Simply swap the ID for the ID of the video you'd like to include and add a descriptive title (optional).

```
[[vimeo/36519586 "a story for tomorrow by gnarly bay"]]
```

![gnarly bay](/images/embed-me.png)

### YouTube

You can find the ID for a given YouTube video within the URL of the video. Just grab the portion after the ```?v=``` part of the URL.

```
[[youtube/mXiFqI-mekw]]
```

![youtube](/images/youtube-widget.png)

### Slideshare

We've added pre-built aspect ratios to deliver content with the right height and width. Add ```?aspect=hd``` to embed the content with an HD aspect ratio.

```
[[slideshare/32200030?aspect=hd "Changing behavior through persuasive design"]]
```

![slideshare](/images/slideshare-widget.png)

### Speaker Deck

Or rely on our standard defaults by not including anything (we've worked hard to make sure they are right for the majority of things you'll embed from a given platform).
```
[[speakerdeck/39d28e80a7840130b36006a0b9603b35 "The product is the byproduct"]]
```

![speakerdeck](/images/speakerdeck-widget.png)

## Aspect Ratios and Other Settings

Each widget has a default aspect ratio as listed below:

* Vimeo [hd]
* YouTube [hd]
* Slideshare [sd]
* Speaker Deck [sd]

Add ```?aspect=hd``` or ```?aspect=sd``` after the ID for any widget to change from the default.

## What other widgets do you need? <a href="mailto:jeff@kumu.io">Tell us!</a>

<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/guides/widgets.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
