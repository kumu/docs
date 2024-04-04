# Tagged-timeline control

**When do you use it?**

Filter a network over time using years defined in the tag field.

_Note: If you include timeline data using the "tags" field, the controls will provide clickable dates that can be used to filter the map. We recommend using years to define when an element/connection was present. You can supply multiple years to be able to allow disjointed timelines (e.g. 2012, 2013, 2016 for an element that was part of the network until 2013, then left and joined again in 2016)._

{% hint style="info" %}
Want to learn more about why and how to use a Tagged-Timeline Control? \
[Check out this blog](https://blog.kumu.io/filtering-networks-over-time-using-custom-controls-dcb1382c9b7c).&#x20;
{% endhint %}

## **Advanced Editor**

```scss
@controls {
  bottom {
    tagged-timeline {
      range: 2000..2016;
      target: element;
    }
  }
}
```

**Supported properties**

* `range` defines the years that should be included as clickable links.
* `target` defines whether the filter should apply to elements, connections, or loops. To apply the filter to elements and connections, use `element,connection;`.
* `multiple` by default the timeline allows you to select multiple years. Use `multiple: false` to only allow a single year to be selected instead.
* `default` defines which values should be selected by default. Use `select-all` to select everything by default (or `show-all` for a similar effect without selecting).

[Check out our controls reference](../../overview/advanced-editor-hub/controls-reference.md) to see the full list of properties and values recognized by the tagged timeline control.
