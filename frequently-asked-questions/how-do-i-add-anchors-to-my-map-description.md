# How do I add anchors to my map description?

If your map description is getting too long, you can opt to add anchors that allow you to skip certain sections of the map description. Here's how to do that using [inline HTML](../guides/markdown.md#inline-html):&#x20;

1. Turn your text headers into HTML. For example, a header called "Map Credits" with style "h1" will look like this:&#x20;

```
<h1 id="map-credits">Map credits</h1>
```

**Note:** You can adjust the header size by using "h1" or "h2" or "h3" etc. in the code.&#x20;

2. Then create the hyperlinked anchor like this:&#x20;

```
<a href="#map-credits">Map credits</a>
```

<figure><img src="../.gitbook/assets/Jun-29-2023 15-05-09.gif" alt=""><figcaption></figcaption></figure>

