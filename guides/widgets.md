# Widgets

We've built a [flexible widget framework](https://github.com/kumu/widgets) to make it easy to embed your favorite content within Kumu. Widgets are curently supported for:

* Lists ```[[list/loops]], [[list "selector"]] or [[list "field"]]```
* Vimeo ```[[vimeo/:id]]```
* YouTube ```[[youtube/:id]]```
* Slideshare ```[[slideshare/:id]]```
* Speaker Deck ```[[speakerdeck/:id]]```
* SoundCloud ```[[soundcloud/:id]]```
* audioBoom ```[[audioboom/:id]]```

...where ```:id``` is the unique code included in the embed code from any of the above services.

Widgets can be included in the map overview and in the description field for any element, connection or loop.

## The Widgets

### Lists

Use the code below to create a list of links to all the loops in your map. Just swap `loops` for `elements` or `connections` and you'll have a list of elements or connections instead!

```
[[list/loops]]
```
![List widget](/images/list-loops.png)

Try clicking on a link and you'll be taken to the profile for that item. If you hover over a link that item will be showcased on the map.

**Limiting by type.**
Rather than including all elements, you may want to build a list of only elements of a certain type. Entering `[[list/person]]` would create a list of only the elements with type "person". Note: This only works for single-word values. If you have more complex values for the type field, use the selector guidance below.

**Limiting by selector.**
You can further limit the list by using any [selector](selectors.html). The format is `[[list "selector"]]`. For example, you could use this to build a list of just those people who are highly influential `[[list "person['level of influence'='high']"]]`.

**Change the showcase behavior.**
You can override the default showcase behavior used in the list widget to also highlight what is connected to the given selection.

Below is an example of how to change the showcase behavior for a list of all elements with type "person":
```
[list/person?mode=loose]
```

Below is an example of how to change the showcase behavior if you are using the list widget format where you use a custom selector:
```
[list?mode=loose "selector"]
```

<div class="alert alert-warning">

<strong>Important!</strong> You need to modify the selector to use single quotes instead of double quotes otherwise the list widget will not work. For example, a generic selector <strong>["field label"="value"]</strong> would need to be re-written as <strong>['field label'='value']</strong>.

</div>

**Creating lists of field values.**
You can also create a list of all the values for a particular field. This list allows you to hover over any value and showcase those elements, connections and loops that have that value.

![](/images/list-widget-field.jpg)

Simply include the field name in quotes in the standard list format.
```
[list "field name"]
```


### Vimeo

Use the code below to embed a Vimeo video in the profile. Simply swap the ID for the ID of the video you'd like to include and add a descriptive title (optional).

```
[[vimeo/36519586 "a story for tomorrow by gnarly bay"]]
```

### YouTube

You can find the ID for a given YouTube video within the URL of the video. Just grab the portion after the ```?v=``` part of the URL.

```
[[youtube/mXiFqI-mekw]]
```

### Slideshare

We've added pre-built aspect ratios to deliver content with the right height and width. Add ```?aspect=hd``` to embed the content with an HD aspect ratio.

```
[[slideshare/32200030?aspect=hd "Changing behavior through persuasive design"]]
```


### Speaker Deck

Or rely on our standard defaults by not including anything (we've worked hard to make sure they are right for the majority of things you'll embed from a given platform).
```
[[speakerdeck/39d28e80a7840130b36006a0b9603b35 "The product is the byproduct"]]
```

## Aspect Ratios and Other Settings

Each widget has a default aspect ratio as listed below:

* Vimeo [hd]
* YouTube [hd]
* Slideshare [sd]
* Speaker Deck [sd]

Add ```?aspect=hd``` or ```?aspect=sd``` after the ID for any widget to change from the default.

### What other widgets do you need? <a href="mailto:jeff@kumu.io">Tell us!</a>

<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/guides/widgets.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
