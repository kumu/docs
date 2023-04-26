# How do I set a minimum or maximum zoom level for my map?

When scrolling on a map, Kumu allows you to zoom in or out indefinitely. Yet, sometimes you just don't want a viewer to be able to zoom out too much (e.g. in [a geo map](../guides/templates/geo.md) of a specific region), or to zoom in too much.&#x20;

Luckily, you can set a minimum and a maximum zoom level for your Kumu map, by adding code to your advanced editor. You can use these properties within an @settings block:&#x20;

* **scale-max**: sets the maximum allowed zoom level (how far you can zoom in)&#x20;
* **scale-min**: sets the minimum allowed zoom level (how far you can zoom out)

Behind the property you indicate a number between 0-1 that sets the zoom level.

* For the **scale-max** property, the closer to 1, the further you're allowed to zoom in&#x20;
* For the **scale-min** property, the closer to 0, the further you're allowed to zoom out

Note that you can use these properties individually, as well as together.&#x20;

Here's an example of what using both properties would look like in your advanced editor:&#x20;

```
@settings {
  scale-max: 0.8;
  scale-min: 0.1; 
}
```

{% hint style="info" %}
When using both properties at the same time, make sure that the scale-max number is always _higher_ than the scale-min number.&#x20;
{% endhint %}

### Disable zoom

Using max and min zoom levels is also great for disabling zooming in your map entirely. When using the exact same number for both properties, you can set a specific zoom level, and viewers won't be able to further zoom in or out at all. The higher both zoom numbers, the more zoomed in your map will be, and vice-versa.&#x20;

```
@settings {
  scale-max: 0.2;
  scale-min: 0.2; 
}
```
