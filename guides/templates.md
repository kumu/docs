# Templates

When creating a new map, you have the option of picking one of our templates:

<iframe src="//player.vimeo.com/video/120666713" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

<br />
Templates provide an easy way to have a great looking map right from the start. Simply choose the template that best fits your use case and we'll add the proper decorations, adjust default settings, and even bootstrap the project with relevant fields.

<br />

Here are four videos that walk you through the basics of each template:

## System Template
<iframe src="//player.vimeo.com/video/120851694" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Stakeholder Template
<iframe src="//player.vimeo.com/video/120964653" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## SNA (Social Network Analysis) Template
<iframe src="//player.vimeo.com/video/120999753" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Custom Template
<iframe src="//player.vimeo.com/video/120887205" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## Geo Template
The newest addition to Kumu's collection of templates is the **geo template**, which lets you build your visualizations on top of geographic maps.

You can activate the geo template by opening the Advanced Editor (keyboard shortcut: press `.`) and adding this code to the `@settings` block:

```
@settings {
    template: geo;
}
```

### Place your elements
Once you have activated the geo template, you can assign location data to your elements to place them on the geographic map.

 Kumu's flexible geocoding engine will understand many types of location data, including mailing address, city and state, or even just a country. You can also provide latitude and longitude values using the "latitude, longitude" format.

 If you are using the "latitude, longitude" format, don't include the degree symbol, and don't include the cardinal direction. For example, the latitude, longitude of Honolulu, Hawaii is **21.3069° N, 157.8583° W**, but it should be entered in Kumu as **21.3069, -157.8583**.

 ![Geo map showing latitude and longitude for Honolulu](/images/honolulu-geo.png)

Note that latitudes in the Southern hemisphere and longitudes in the Western hemisphere are negative numbers.

If you already have your location data in the map and don't want to duplicate it in a new field name "Location", don't worry - you can use the `geo-location` property in the `@settings` block to tell Kumu where your location data is:

```
@settings {
  template: geo;
  geo-location: "zipcode";
}
```

And if the default geocoding results aren’t accurate, you can scope them to a specific region using expressions. For an element with something like "Main Street" in the `location` field, the addition of `, Hawaii` would help Kumu know which Main Street you're talking about:

```
@settings {
  template: geo;
  geo-location: "{{location}}, Hawaii";
}
```

Note that your location field should be wrapped in two curly braces if you are scoping the results.

**Good to know:**
- If you leave the location field blank on an element, it will get placed at 0° latitude, 0° longitude (in the Atlantic Ocean, south of Ghana).
- If two elements have the exact same location, they will stack on top of each other and might be difficult to see.
- You can use different types of location data to place your elements, even in the same map, as long as all the data is stored in the same field.
- Geo isn’t quite ready for large maps yet. If you have more than 100 elements, it will take a few refreshes to get all locations geocoded.
- Screenshots and PDFs are not currently supported for geo.
- Decorations for geo maps are still in beta. By default, you’re limited to squares and straight lines, but if you want to test out the full range of decorations (circles, borders, curved lines, flags, etc.), add `renderer: canvas;` to your `@settings` block.


## Switching templates

If you tested out one template, but realized it wasn't right for your project, don't worry—switching to a different template just takes a few clicks!

Click the Settings icon <i class="fa fa-sliders"></i> on the right side of your map to open the Basic Editor. Then, click **MORE OPTIONS** and select **Customize defaults** from the list. In the **Customize defaults** menu that appears, scroll down to the **General settings** section.

In that section, you can use the Template dropdown menu to select a different template. Click **Save and Continue** to finish the process.

If you've applied a few different templates to test them out, you probably have leftover field values (especially Element Type values) that you aren't using and want to delete. To solve that problem, check out our guide on [deleting field values](/guides/fields.md#deleting-field-values).


<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/guides/templates.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
