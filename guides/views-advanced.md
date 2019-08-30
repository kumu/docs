# Views (Advanced)
Congrats! You're ready to roll up your sleeves and do a little coding. Trust us, once you get used to the power available via the advanced editor you'll never look back.

Let's warmup with a few basic decorations you can add for elements, connections and loops.

### Elements
```
element {
 size: 20;
 color: #fafafa;
 border-width: 2;
 border-color: #333;
 shadow-size: 1.5;
 shadow-opacity: 0.6;
}
```

### Connections
```
connection {
 width: 5;
 color: #888;
 pattern: dashed;
}
```

### Loops
```
loop {
 font-color: #7B6834;
 font-weight: 700;
 font-size: 28;
}
```

## The syntax

The basic syntax goes like this:

```
selector {
  property: value;
}
```

First you decide what you want to decorate (the selector), and then you decide how you want
to decorate it (through properties and values). Piece of cake! Let's dive in.

### Step 1: Pick your target

Becoming comfortable writing selectors by hand is the first step to mastering views.

The selector can be a single selector, or a comma-separated list of selectors:

```
person                         // all people
#joe, #jane                    // just the elements labelled "Joe" and "Jane"
project.pending[priority=high] // all high priority projects tagged "pending"
```

<p class="alert alert-info">
  The full list of supported selectors can be found in our
  <a class="alert-link" href="/guides/selector-reference.html">Selector Reference</a>.
</p>

### Step 2: Build your decorations

Now it's time to do some decorating! Below we'll increase Jack's size, change his color and add a shadow:

```
#jack {
  size: 40;
  color: #3596c0;
  shadow-color: #ccc;
}
```

![decorate](/images/person-shadow.png)

<p class="alert alert-info">
  The full suite of available properties can be found in our
  <a class="alert-link" href="/guides/property-reference.html">Property Reference</a>.
</p>

### Step 3: Add it to the legend (optional)

If you want to include the decoration in the legend, simply add a comment:

```
/* Person */
element["element type"="person"]{
  color: #3596c0;
  size: 40;
  shadow-color: #ccc;
}
```

### And you're done!

Congrats! That's all there is to it.

Don't worry if writing views by hand is bit challenging at first.
You'll get the hang of it in no time and we're here to help if you have questions.

If that was all a little too easy for you then continue reading...

## Common decorations

Below we've highlighted the [properties](/guides/property-reference.md) we commonly find most useful.

### Element decorations

```
element {
  size: 20;     // base size
  scale: 2;     // multiple of base size (also scales labels)
  margin: 10;   // space between border and connections
  padding: 20;  // space between border and image / bullseye
  text-align: center;
  image-url: url("https://www...");
}
```

### Connection decorations

```
connection {
  width: 1;     // base width
  scale: 2;     // multiple of base width (also scales labels)
  pattern: dashed;
}
```

### Others

The following properties come in handy for all types of decorations:

**Font styles**

```
element {
  font-size: 20;
  font-weight: bold;
  font-family: "Helvetica Neue", sans-serif;
}
```

## @settings

If you're interested in working with `@settings` you truly have become a view master.
We salute you! Here's some of the neat things you can do with `@settings`:

### Default styles

If you want to set default styles that apply across the entire map, it's much more
efficient to assign them through the settings block.

```
@settings {
  font-size: 20;
  font-family: "Helvetica Neue", sans-serif;
  element-size: 30;
  connection-color: #333;
}
```

### Background color

Not a fan of our light theme? Changing the background color is easy:

```
@settings {
  background-color: #252525;
}
```

![dark background](/images/person-shadow-dark.png)

For dark backgrounds, make sure to change the theme too (see below) or things can get ugly!

### Light and dark themes

Kumu's default theme looks great on light backgrounds, but it looks horrible on dark ones.
If you're using a dark background, make sure to change to the dark theme:

```
@settings {
  theme: dark;
  background-color: #252525;
}
```

### Preset Focus

Focus is a powerful feature that let's you hone in on certain portions of your map. Instead of only being able to activate a focus by clicking and holding on the map, we support the ability to include a focus within any view.

```
@settings {
  focus: #jack out 2;
}
```

The above will load the map with Jack and any other elements that are within 2 degrees. You can add multiple hubs by using a comma to separate them:

```
@settings {
  focus: #jack out 2, #companyxyz out 1;
}
```

This will load the map with Jack and any other elements that are within 2 degrees, as well as Company XYZ and any elements that are directly connected.

You can use any [selector](/guides/selector-reference.md) to set the focus of the map. For example, you could set the focus to show only influential people, out 2 degrees:

```
@settings {
  focus: person["level of influence"="High"] out 2;
}
```

### Prompted mode

Prompted mode builds on the preset focus by allowing users to build a map based on search criteria. When you've enabled prompted mode, users are presented with a search prompt rather than seeing the full map. Users can then type the name of any element and hit enter to add them to the list of elements to be included in the map. By default that element and its direct connections will be included, but you can tweak the "out 1" setting to also include second and third degree connections.

![prompted mode](/images/prompted-mode.png)

Click build map and voila! You can also use "out n" for a search to automatically change the number of degrees out included in the search results. For example, "Bill Gates out 3" will display Bill Gates and all elements within 3 degrees.

![the map](/images/prompted-results.png)

Hit escape on your keyboard to start over, or use the focus menu and choose "back to prompt" to edit the current map.

![focus prompt](/images/focus-prompt.png)

To enable prompted mode, you'll need to add the following to the advanced tab of any view you'd like it active within:

```
@settings {
  focus: prompt;
}
```

### Render quality (for large maps)

The default mapping engine is optimized for creating great looking maps. As you start working with larger and larger maps (1000+ elements) or you experience slowness on your computer, try shifting to our high performance mode. You can do this by hitting the **q** keystroke or by adding the following to your advanced CSS:

```
@settings {
  quality: fast;
}
```

You'll notice that connections are no longer curved and that elements are squares instead of circles. You should now be able to map much larger maps (5,000 - 10,000 elements) with a powerful computer.

<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/guides/views-advanced.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
