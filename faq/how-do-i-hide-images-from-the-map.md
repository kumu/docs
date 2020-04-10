# How do I hide images in the map but keep them in the profile?

If you want to keep the image associated with an element in the element profile but hide it in the map, use the `element-image-visibility` property in the [`@settings` section](/guides/default-view-settings.html#change-default-view-settings-in-the-advanced-editor)) of the [advanced editor](/overview/view-editors.md) (from the map, hit `.` to go there).

### Hide images from all elements

To hide images from all the elements in the map, add this line to the @settings code:

```
@settings {
  element-image-visibility: hidden;
}
```

### Hide images from a subset of elements

To hide images from just a subset of elements in the map, you'll need to add the following line of code to just the subset of elements:

```
Organization {
  image-visibility: hidden;
}
```

<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/faq/how-do-i-hide-images-from-the-map.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
