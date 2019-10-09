# Icons

Using the Advanced Editor, you can easily bring in any [Font Awesome icon](https://fontawesome.com/icons) to decorate your elements.

![elements with icons to show element type](/images/icons.png)

To get started, add a new block of code. You can use any element [selector](/guides/selectors.html) to open the block, then use the icon property to specify which icon you’d like to bring in, and use the icon-color property to specify its color:

```
person {
  icon: user;
  icon-color: #444;
}
```

**Tip**: If you prefer to show just the icon instead of the element itself, set `color` to `transparent`;

```
organization {
  icon: building;
  icon-color: #444;
  color: transparent;
}
```

In the value for the `icon` property, you can also specify `solid` or `regular` to change the icon style:

```
organization {
  icon: building regular;
  icon-color: #444;
  color: transparent;
}
```

Note that, if you add icons to your elements, they will override any images you have added. If you'd like to add icons only for elements that don't have images, you can add this code to the bottom of your Advanced Editor:

```
// The element[image] selector tells Kumu to only apply these rules for elements with an image
element[image] {
  icon: off; // Setting 'icon' to 'off' will remove any icons you've added further up in the Advanced Editor
}
```



<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/guides/icons.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
