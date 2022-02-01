# How do I adjust arrow size?

If the default arrow size isn't to your liking you can use the following properties to
customize the arrow size:

- `arrow-min-width`
- `arrow-min-height`
- `arrow-width`
- `arrow-height`

These properties can be used within `@settings` or within a [connection decoration rule](/guides/decorate.md#decorate-in-the-advanced-editor) in the Advanced Editor.
Generally you'll want to set `arrow-min-width` and `arrow-min-height` to `0` if you're
sizing arrows manually.

```
@settings {
  arrow-min-width: 0;
  arrow-min-height: 0;
  arrow-width: 5;
  arrow-height: 3;
}
```

_NOTE: both `arrow-width` and `arrow-height` are multiplied against the connection width so take that
into consideration when setting the values._

#### Arrow offset

You can also increase the offset between the element and the connection to make the arrow more distinctive. 
To do so, add this code to your advanced editor: 

```
element {
margin: 10;
}
```

You can change the number 10 to any other number to increase/decrease the space between element and arrow.

<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/faq/how-do-i-adjust-arrow-size.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
