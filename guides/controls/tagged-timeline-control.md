# Tagged timeline

**Use**

Filter a network over time using years defined in the tag field.

*Note: If you include timeline data using the tag field, this controls provides clickable dates that can be used to filter the map. We recommend using years to define when an element/connection was present. You can supply multiple years to be able to allow disjointed timelines (e.g. 2012, 2013, 2016 for an element that was part of the network until 2013, then left and joined again in 2016).*

**Example**

```
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
