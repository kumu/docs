# Widgets

We've built a [flexible widget framework](https://github.com/kumu/widgets) to give superpowers to the [Map Overview](/overview/map-editor.html#side-panel) and the Description field in [profiles](/guides/profiles.html).

![image of list of connections belonging to an element](/images/list-widget-element-connections.png)

With widgets, you can do the following:
- [Create lists of elements, connections, loops, or field values](#create-lists-of-elements-connections-loops-or-field-values)
- [Embed video](#embed-video)
- [Embed audio](#embed-audio)
- [Embed documents](#embed-documents)
- [Embed slideshows](#embed-slideshows)

To use widgets, start editing the Map Overview, or the Description of an element, connection, or loop, and type double square brackets `[[]]`. What you put inside the double square brackets depends on which widget you're using—you can read the rest of this article to learn more about each option.


## Create lists of elements, connections, loops, or field values

<p><iframe width="560" height="315" src="https://www.youtube.com/embed/4m_f4Mu03nI" frameborder="0" allowfullscreen></iframe></p>

The list widget allows you to create lists of elements, connections, and loops inside the Map Overview or a Description.


#### Basic lists of elements, connections, or loops

For a basic list, just type `list/` inside your double square brackets, and  then type `elements`, `connections`, or `loops` depending on what you want to list.

```
[[list/elements]]     --> Creates a list of all elements
[[list/connections]]  --> Creates a list of all connections
[[list/loops]]        --> Creates a list of all loops
```

![List widget](/images/list-loops.png)

All the items in the list are links—you can hover over a link to [showcase](/guides/showcase.html) an item on the map, or you can click a link to jump to the profile for that item.

Basic lists can also be sorted by any field in your [profiles](/guides/profiles.html). To do so, add `?sort=field-name` after `elements`, `connections`, or `loops`, and replace `field-name` with a [slug](/guides/slugs.html) of the field name you want to sort by.

```
[[list/connection?sort=strength]]
[[list/element?sort=net-worth]]
```

Add `&desc=true` to the end if you want to sort in descending order:

```
[[list/loop?sort=label&desc=true]]
```


#### More specific lists of elements, connections, or loops

<!-- #### Listing by type

To list only specific types of elements, connections, or loops, 

**Limiting by type.**
Rather than including all elements, you may want to build a list of only elements of a certain type. Entering `[[list/person]]` would create a list of only the elements with type "person". Note: This only works for single-word values. If you have more complex values for the type field, use the selector guidance below. -->

To create a list that is more specific that "all elements", for example, you can type `list` and a [selector](/guides/selectors.html) in double quotes.

```
[[list "person"]]                   --> List elements with "Person" in the Type field
[[list ":from(person)"]]            --> List connections leading from "Person" type elements
[[list "['influence'='high']"]]     --> List items with "High" in the Influence field.
```

Having trouble writing the right selector for your use case? Feel free to [email support](mailto:support@kumu.io)!

<div class="alert alert-warning">
  <p>Normally, it would be okay to write a selector with double quotes, e.g. <code>["influence"="high"]</code>. But inside the list widget, you need to write it with single quotes instead: <code>['influence'='high']</code>.</p>
  <p><code>'influence'</code> and <code>'high'</code> are enclosed in single quotes, and the entire selector is enclosed in double quotes.</p>
</div>

<p class="alert alert-info">
  If you want to list all of an element's connections in it's profile, we wrote <a class="alert-link" href="/faq/how-do-i-list-an-elements-connections-in-its-profile.html">a more detailed article</a> on how to achieve that.
</p>


These more specific lists, like basic lists, can also be sorted by any field in your [profiles](/guides/profiles.html). To do so, add `?sort=field-name` after `list` and before the selector, and replace `field-name` with a [slug](/guides/slugs.html) of the field name you want to sort by.

```
[[list?sort=net-worth "person"]]
[[list?sort=strength ":from(person)"]]
```

Add `&desc=true` to the end if you want to sort in descending order:

```
[[list?sort=type&desc=true "['influence'='high']"]]
```


#### Change the showcase behavior for lists of items

Kumu's showcase actually has three different "modes" to affect how it works:

* `normal` mode showcases the selection plus any connections between the showcased elements (default)
* `loose` mode showcases the selection plus neighboring elements
* `strict` mode showcases only the selection itself, nothing else

By default, hovering over an item in the list widget will showcase that item in `normal` mode. You can override this default behavior by adding `?mode=loose` or `?mode=strict`.

For basic lists, add that modifier at the very end:

```
[[list/elements?mode=loose]]
```

For more specific lists, add the modifier after the word `list`:

```
[list?mode=strict ":from(person)"]
```


#### Lists of field values

To list all the values of a particular field, type `list` inside your double square brackets, followed by the field name in double quotes.

Simply include the field name in quotes in the standard list format.
```
[[list "Level of Influence"]]
```

![](/images/list-widget-field.jpg)

When you hover over a field value in the list, Kumu will showcase all elements, connections, and loops that have that field value in their profile.

## Embed video

#### Vimeo

To embed a Vimeo video, type `vimeo/` inside the double square brackets, followed by the ID if the video you'd like to include:

```
[[vimeo/36519586]]
```

Optionally, you can change the aspect ratio from `hd` (the default) to `sd`:

```
[[vimeo/36519586?aspect=sd]]
```

You can also add a descriptive title:

```
[[vimeo/36519586 "a story for tomorrow by gnarly bay"]]
```

#### YouTube

To embed a YouTube video, type `youtube/` inside the double square brackets, followed by the ID if the video you'd like to include.

You can find the ID for a given YouTube video within the URL of the video. Just grab the portion after the `?v=` part of the URL.

```
[[youtube/mXiFqI-mekw]]
```

Optionally, you can change the aspect ratio from `hd` (the default) to `sd`:

```
[[youtube/mXiFqI-mekw?aspect=sd]]
```


## Embed audio

#### Pippa

To embed audio from Pippa, type `pippa/` inside your double square brackets, followed by everything after `https://player.pippa.io/` in the URL of your episode:

```
Full URL:
https://player.pippa.io/teamhuman/episodes/ep-92-dr-mark-filippi

Widget code:
[[pippa/teamhuman/episodes/ep-92-dr-mark-filippi]]
```


#### Soundcloud

To embed audio from Soundcloud, type `soundcloud/` inside your double square brackets, followed by the ID of the audio file:

```
[[soundcloud/313184173]]
```


## Embed documents

### Scribd

To embed documents from Scribd, type `scribd/` inside your double square brackets, followed by the ID of the document:

```
[[scribd/416217686]]
```

The Scribd widget supports a `start_page` option that lets you define which page the embedded document should show first.

<!-- | Option | Description |
| --- | --- |
| `show_recommendations` | `true` if you want Scribd to show reading recommendations, `false` if you don't. |
| `start_page` | The number of the page you want to start reading from |
| `style` | `scroll` shows a scrolling PDF, and `slideshow` creates a slide for each page | -->

To set the option, add a `?` after the document ID, then type `start_page=`, and the page number you want to set.

```
[[scribd/416217686?start_page=3]]
```


## Embed slideshows

### Slideshare

To embed a slideshow from Slideshare, type `slideshare/` inside your double square brackets, followed by the ID of the slideshow:

```
[[slideshare/32200030]]
```

Optionally, you can change the aspect ratio from `sd` (the default) to `hd`:

```
[[slideshare/32200030?aspect=hd]]
```

You can also add a descriptive title:

```
[[slideshare/32200030 "Changing behavior through persuasive design"]]
```



### Speaker Deck

To embed a slideshow from Speaker Deck, type `speakerdeck/` inside your double square brackets, followed by the ID of the slideshow:

```
[[speakerdeck/39d28e80a7840130b36006a0b9603b35 "The product is the byproduct"]]
```

Optionally, you can change the aspect ratio from `sd` (the default) to `hd`:

```
[[speakerdeck/39d28e80a7840130b36006a0b9603b35?aspect=hd]]
```

You can also add a descriptive title:

```
[[speakerdeck/39d28e80a7840130b36006a0b9603b35 "The product is the byproduct"]]
```

<p class="alert alert-success">
Need any other widgets? <a href="mailto:support@kumu.io">Send us an email!</a>
</p>

<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/guides/widgets.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
