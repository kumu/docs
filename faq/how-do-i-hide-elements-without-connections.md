# How do I hide elements without connections? 

Elements without any connections are called "orphans" and might sometimes distract from your main map. 

To hide orphans in your map, use the `ignore-orphans` property in the `@settings` block to automatically filter out any elements that have no connections. Possible values for this property are `true` or `false`.

```scss
@settings {
    ignore-orphans: true;
}
```

## Dynamic hiding of orphans

You might not _always_ want to hide the orphans in your map. 
To add a handy control to your map that toggles orphans on and off whenever needed, add this code to your advanced editor: 

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
To adjust the location or aesthetic of your control, visit the [Controls guide](/guides/controls.md). 

