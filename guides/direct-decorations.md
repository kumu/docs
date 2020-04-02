# Direct decorations

Usually, it's faster and easier to decorate elements, connections, and loops according to the data in their [fields](/guides/fields.html)—for example, creating a decoration rule that selects all elements with the element type "Organization", and color-codes them based on their tags.

But, if you haven't added field data, or you just want to tweak the style of one single item on the map, **direct decorations** is a great tool.

To use direct decorations, simply hover your cursor over an element, connection, or loop, and the direct decorations toolbar will appear:

![direct decorations toolbar](/images/direct-decoration-toolbar.png)

The toolbar allows you to take a few different actions based on what the item is:

#### For elements
- <i class="fa fa-font">  </i>: Edit the label, font size, font color, and label alignment
- <i class="fa fa-picture">  </i>: Decorate with an image (this is just a decoration—it doesn't store the image in the element's profile)
- <i class="fa fa-expand">  </i>: Change the size
- <i class="fa fa-tint">  </i>: Change the color
- <i class="fa fa-circle-o">  </i>: Add a shadow
- <i class="fa fa-eye-slash">  </i>: Remove all direct decorations
- <i class="fa fa-ellipsis-h">  </i>: Visit this page of the docs


#### For connections
- <i class="fa fa-font">  </i>: Edit the label, font size, font color, and label alignment
- <i class="fa fa-expand">  </i>: Change the thickness
- <i class="fa fa-tint">  </i>: Change the color
- <i class="fa fa-exchange">  </i>: Set the connection direction
- <i class="fa fa-warning">  </i>: Add or remove delay markings
- <i class="fa fa-eye-slash">  </i>: Remove all direct decorations 
- <i class="fa fa-ellipsis-h">  </i>: Visit this page of the docs


#### For loops
- <i class="fa fa-font">  </i>: Edit the label, font size, font color, and label alignment
- <i class="fa fa-eye-slash">  </i>: Remove all direct decorations
- <i class="fa fa-ellipsis-h">  </i>: Visit this page of the docs


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