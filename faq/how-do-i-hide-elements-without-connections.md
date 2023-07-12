# How do I hide elements without connections?

Elements without any connections are called "orphans" and might sometimes distract from your main map.

To hide orphans in your map, use the `ignore-orphans` property in the `@settings` block to automatically filter out any elements that have no connections. Possible values for this property are `true` or `false`.

```scss
@settings {
    ignore-orphans: true;
}
```

## Dynamic hiding of orphans

**With a control**\
You might not _always_ want to hide the orphans in your map. To add a handy control to your map that toggles orphans on and off whenever needed, add this code to your advanced editor:

```scss
@controls {
 top {
 filter {
  target: :orphan;
  as: label;

  option {
    selector: *;
    default: true;
    label: "Hide elements without connections";
   }
  }
 }
}
```

To adjust the location or aesthetic of your control, visit the [Controls guide](../guides/controls.md).

**Automatic**\
If you want the hiding of orphans to be a bit more automatic, simply add `filter-ignore-orphans: true;` to your `@settings {` block and Kumu will automatically ignore orphans when you activate your filter. It'll look like this:&#x20;

```
@settings {
filter-ignore-orphans: true;
}
```

{% hint style="warning" %}
_One caveat: this "automatic" way to ignore orphans only works on elements that were never connected in the first place. Any elements that do have connections when the filter isn’t activated will not be filtered out._
{% endhint %}

