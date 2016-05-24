# Filter by field control

**Use**

Filter between one or more field values.

**Example**

```
@controls {
  top {
    filter-by-field {
      field: "Location";
      target: element;
      placeholder: "Select a location";
    }
  }
}
```

**Required properties**

* `field` the name of the field to filter by.

**Optional properties**

* `target` a selector that controls which items the filter applies to. Defaults to `*`, which will apply the filter to all items.
* `placeholder` the label to use when nothing is selected. Defaults to the field name.
* `multiple` set this to `true` to allow multiple values to be selected. Defaults to `false`.

### More examples

Filter elements by skills, and allow multiple skills to be selected:

```
@controls {
  top {
    filter-by-field {
      field: "Skills";
      target: element;
      multiple: true;
    }
  }
}
```

Filter by location, but only for items that have a location:

```
@controls {
  top {
    filter-by-field {
      field: "Location";
      target: ["Location"];
    }
  }
}
```
