# Focus

Focus is activated in one of two ways, by clicking and holding on any element or connection or by clicking the focus button in the bottom toolbar. Once activated, you can walk in and out by degree using the "+" and "-" keys on your keyboard (don't hold shift, just hit the key).

![focus animation](../images/focus.gif)

If you click the focus button in the toolbar, you'll be prompted with a menu of how many degrees out you'd like to focus. Once focus is activated, you can click and hold on any element to bring that element's direct connections into view.

### Preset Focus

You can also predefine a focus within `@settings` in the advanced editor of any perspective.

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

You can use any [selector](/selector-reference.md) to set the focus of the map. For example, you could set the focus to show only influential people, out 2 degrees:

```
@settings {
  focus: person["level of influence"="High"] out 2;
}
```

### Prompted mode

Prompted mode builds on the preset focus by allowing users to build a map based on search criteria. When you've enabled prompted mode, users are presented with a search prompt rather than seeing the map. Users can then type the name of any element and hit enter to add them to the list of elements to be included in the map. By default that element and its direct connections will be included, but you can tweak the "out 1" setting to also include second and third degree connections.

![prompted mode](/images/prompted-mode.png)

Click build map and voila!

![the map](/images/prompted-results.png)

Hit escape on your keyboard to start over, or use the focus menu and choose "back to prompt" to edit the current map.

![focus prompt](/images/focus-prompt.png)

To enable prompted mode, you'll need to add the following to the advanced tab of any perspective you'd like it active within:

```
@settings {
  focus: prompt;
}
```

<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/guides/focus.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
