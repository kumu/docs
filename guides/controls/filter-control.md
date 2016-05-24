# Filter control

**Use**

Filter between one or more field values or defined selectors.

**Example**

Filter by field:

```
@controls {
  top {
    filter {
      by: "element type";
    }
  }
}
```

Filter by defining options using [selectors](../selectors.html#selectors):

```
@controls {
  top {
    filter {
      option {
        label: "Influential";
        selector: ["tags"*="influential"];
      }

      option {
        label: "Emerging Leader";
        selector: ["tags"*="emerging"];
      }
    }
  }
}
```

**Supported properties**

* `by` is the field you'd like to use for filtering wrapped in double quotes (if you don't include `by: field` you need to list out each option - see "supported children" guidance below)
* `as` controls how the control is presented. Do you want a list of labels, buttons, or a dropdown for activating filter?
 * `labels` show options as a list of clickable labels
 * `buttons` show options as a group of buttons
 * `dropdown` show options as dropdown
* `multiple` controls whether more than one value can be selected at a time
 * `true` allows multiple values to be showcased
 * `false` allows only a single value to be showcased at a time
* `placeholder` the text to display when nothing is selected (for `as: dropdown` only)
* `target` a selector that controls which items the filter applies to. Defaults to `*`, which will apply the filter to all items.

**Supported children**

The filter options are defined by `option` blocks nested within the control. Each `option` supports the following properties:

* `label` the text to display for that option
* `selector` the [selector](../selectors.html#selectors) to use for the filter

### More examples

Filter elements by one ore more skills using a dropdown:

```
@controls {
  top {
    filter {
      by: "Skills";
      as: dropdown;
      placeholder: "Select one or more skills"
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
    filter {
      by: "Location";
      target: ["Location"];
    }
  }
}
```

Filter connections by toggling between two types:

```
@controls {
  top {
    filter {
      as: label;
      multiple: false;
      target: connection;

      option {
        label: "Personal";
        selector: personal;
      }

      option {
        label: "Business";
        selector: business;
      }
    }
  }
}
```
