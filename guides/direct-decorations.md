# Direct decorations

Usually, it's faster and easier to decorate elements, connections, and loops according to the data in their [fields](/guides/fields.html)—for example, creating a decoration rule that selects all elements with the element type "Organization", and color-codes them based on their tags.

But, if you haven't added field data, or you just want to tweak the style of one single item on the map, **direct decorations** is the perfect tool.

Direct decorations are in early access right now. To use them, add the following snippet of code to your [Advanced Editor](/overview/view-editors.html#advanced-editor):

```
@settings {
  toolbar: true;
  toolbar-trigger: click;
}
```

Then, simply click on an element, connection, or loop, and the direct decorations toolbar will appear:

![direct decorations toolbar](/images/direct-decoration-toolbar.png)

If you'd rather have the toolbar appear when you hover over an item instead of click it, change `click` to `hover` in the Advanced Editor, like so:

```
@settings {
  toolbar: true;
  toolbar-trigger: hover;
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


<div class="alert alert-info">
  <p>
    Direct decorations always override decorations in your <a href="/guides/views.html" class="alert-link">Views</a>, including all the code in your Advanced Editor. For example, if you direct decorate an element to color it blue, and then you use the view to color it red, it will still be blue.
  </p>
</div>

<div class="alert alert-info">
  <p>
    Direct decorations, just like element position and connection curvature, are stored separately for each map in the project. If you want to change the direct decoration for an item, you can <a href="/overview/settings.html#map-settings" class="alert-link">duplicate the map</a> and make your changes in the new copy.
  </p>
</div>


<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/guides/direct-decorations.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>