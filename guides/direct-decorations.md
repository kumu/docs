# Direct decorations

Usually, it's faster and easier to decorate elements, connections, and loops according to the data in their [fields](/guides/fields.html)—for example, creating a decoration rule that selects all elements with the element type "Organization", and color-codes them based on their tags.

But, if you haven't added field data, or you just want to tweak the style of one single item on the map, **direct decorations** is the perfect tool.

To use them, simply hover over an element, connection, or loop, and the direct decorations toolbar will appear:

![direct decorations toolbar](/images/direct-decoration-toolbar.png)

If you'd rather have the toolbar appear when you click on an item instead of hover, add the following in the [Advanced Editor](/overview/view-editors.html#advanced-editor):

```
@controls {
  toolbar: click;
}
```

If the toolbar is a distraction and you prefer to use rule-based decorations, you can disable the toolbar altogether:

```
@controls {
  toolbar: false;
}
```


## Direct decorations reference

The table below lists all of the icons you'll find in the direct decorations toolbar for elements, connections, and loops, and what action each icon exposes to you.

<table class="table borderless">
  <tbody>
    <tr>
      <th class="text-center">Icon</th>
      <th class="text-left">Action</th>
      <th class="text-center">Elements</th>
      <th class="text-center">Connections</th>
      <th class="text-center">Loops</th>
    </tr>
    <tr>
      <td class="text-center"><i class="fa fa-pencil"></i></td>
      <td>Edit label and type</td>
      <td class="text-center"><i class="fa fa-check"></i></td>
      <td class="text-center"><i class="fa fa-check"></i></td>
      <td class="text-center"><i class="fa fa-check"></i></td>
    </tr>
    <tr>
      <td class="text-center"><i class="fa fa-font"></i></td>
      <td>Edit font color, font size, font style, and font alignment</td>
      <td class="text-center"><i class="fa fa-check"></i></td>
      <td class="text-center"><i class="fa fa-check"></i></td>
      <td class="text-center"><i class="fa fa-check"></i></td>
    </tr>
    <tr>
      <td class="text-center"><i class="fa fa-tint"></i></td>
      <td>Edit color</td>
      <td class="text-center"><i class="fa fa-check"></i></td>
      <td class="text-center"><i class="fa fa-check"></i></td>
      <td class="text-center"><i class="fa fa-check"></i></td>
    </tr>
    <tr>
      <td class="text-center"><i class="fa fa-arrows-alt"></i></td>
      <td>Edit size</td>
      <td class="text-center"><i class="fa fa-check"></i></td>
      <td class="text-center"><i class="fa fa-check"></i></td>
      <td class="text-center"></td>
    </tr>
    <tr>
      <td class="text-center"><i class="fa fa-picture-o"></i></td>
      <td>Add an image</td>
      <td class="text-center"><i class="fa fa-check"></i></td>
      <td class="text-center"></i></td>
      <td class="text-center"></i></td>
    </tr>
    <tr>
      <td class="text-center"><i class="fa fa-trash-o"></i></td>
      <td>Delete item</td>
      <td class="text-center"><i class="fa fa-check"></i></td>
      <td class="text-center"><i class="fa fa-check"></i></td>
      <td class="text-center"><i class="fa fa-check"></i></td>
    </tr>
    <tr>
      <td class="text-center"><i class="fa fa-ellipsis-h"></i></td>
      <td>More options</td>
      <td class="text-center"><i class="fa fa-check"></i></td>
      <td class="text-center"><i class="fa fa-check"></i></td>
      <td class="text-center"><i class="fa fa-check"></i></td>
    </tr>
    <tr>
      <td class="text-center"><i class="fa fa-circle-o"></i></td>
      <td>Add a border</td>
      <td class="text-center"><i class="fa fa-check"></i></td>
      <td class="text-center"></td>
      <td class="text-center"></td>
    </tr>
    <tr>
      <td class="text-center"><i class="fa fa-dot-circle-o"></i></td>
      <td>Add a bullseye</td>
      <td class="text-center"><i class="fa fa-check"></i></td>
      <td class="text-center"></td>
      <td class="text-center"></td>
    </tr>
    <tr>
      <td class="text-center"><i class="fa fa-adjust"></i></td>
      <td>Add a shadow</td>
      <td class="text-center"><i class="fa fa-check"></i></td>
      <td class="text-center"></td>
      <td class="text-center"></td>
    </tr>
    <tr>
      <td class="text-center"><i class="fa fa-exchange"></i></td>
      <td>Change connection direction</td>
      <td class="text-center"></td>
      <td class="text-center"><i class="fa fa-check"></i></td>
      <td class="text-center"></td>
    </tr>
    <tr>
      <td class="text-center"><i class="fa fa-hourglass-half"></i></td>
      <td>Add delay markings</td>
      <td class="text-center"></td>
      <td class="text-center"><i class="fa fa-check"></i></td>
      <td class="text-center"></td>
    </tr>
    <tr>
      <td class="text-center"><i class="fa fa-eye-slash"></i></td>
      <td>Reset direct decorations</td>
      <td class="text-center"><i class="fa fa-check"></i></td>
      <td class="text-center"><i class="fa fa-check"></i></td>
      <td class="text-center"><i class="fa fa-check"></i></td>
    </tr>
    <tr>
      <td class="text-center"><i class="fa fa-question"></i></td>
      <td>Visit these docs!</td>
      <td class="text-center"><i class="fa fa-check"></i></td>
      <td class="text-center"><i class="fa fa-check"></i></td>
      <td class="text-center"><i class="fa fa-check"></i></td>
    </tr>
  </tbody>
</table>


## Caveats for direct decorations

There are just a few additional things you should know about direct decorations:


#### Direct decorations always override decorations in your [Views](/guides/views.html).

This includes all the code in your Advanced Editor. For example, if you direct decorate an element to color it blue, and then you use the view to color it red, it will still be blue.


#### Direct decorations, just like element position and connection curvature, are stored separately for each map in the project.

If you want to change the direct decoration for an item, you can [duplicate the map](/overview/settings.html#map-settings) and make your changes in the new copy.


#### When you're editing the map, the direct decorations toolbar will hide [popovers](/guides/popovers.html).

However, anyone who has view-only access to the map or is viewing a [presentation](/guides/presentations.html) or a [shared/embedded map](/guides/share-and-embed.html) will still see your popovers (the direct decorations toolbar is hidden for them, since they can't make edits to your map).

If you're building popovers and just want to see how they look before you publish, you can either follow the instructions above to turn off the direct decorations toolbar, or click the ellipsis icon <i class="fa fa-ellipsis-h">  </i> in the bottom right corner and select "Switch to preview mode".


<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/guides/direct-decorations.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
