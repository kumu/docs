# Field-filter control

**Use**

Filter between one or more field values.

**Example**

```
@controls {
  top {
    field-filter {
      field: "Location";
      target: element;
    }
  }
}

```

**Supported properties**

* `field` defines which field should be use for the filter.
* `target` defines whether the filter should apply to elements, connections, or loops. To apply the filter to elements and connections, use `element,connection;`.
