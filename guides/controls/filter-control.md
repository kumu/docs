# Filter control

**Use**

Add a toggle control that allows viewers to filter by field values or custom selectors.

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

Filter using custom [selectors](../selectors.html#selectors):

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

* `target` a selector that controls which items the filter applies to. Defaults to `*`, which will apply the filter to all items.
* `by` is the field you'd like to use for filtering wrapped in double quotes (if you don't include `by: field` you need to list out each option - see "supported children" guidance below)
* `as` controls how the control is presented. Do you want a list of labels, buttons, or a dropdown for activating filter?
  * `labels` show options as a list of clickable labels
  * `buttons` show options as a group of buttons
  * `dropdown` show options as dropdown
* `multiple` controls whether more than one value can be selected at a time
  * `true` allows multiple values to be showcased
  * `false` allows only a single value to be showcased at a time
* `placeholder` the text to display when nothing is selected (for `as: dropdown` only)
* `summary` override the summary that's shown for the current selection (for `as: dropdown`). The summary will be shown regardless of what's selected so there's no need to use `placeholder` in this case.
* `default` defines which field values should be selected by default (for `by: "field"` only). Use `select-all` to select everything by default (or `show-all` for a similar effect without selecting everything by default).
* `except` allows you to remove field values from the available choices. Wrap the values you want to remove in quotes and separate multiple values by commas.
* `only` is similar to except but allows you to explicitly define which field values should be included as available choices.

[Check out our controls reference](/guides/controls/controls-reference.md) to see the full list of properties and values recognized by the filter control.

**Supported children**

If you don't supply a field to filter by, each option must be listed separately. The available options are defined by `option` blocks nested within the control. Each `option` supports the following properties:

* `label` the text to display for that option
* `selector` the [selector](../selectors.html#selectors) to use for the filter
* `default`
  * `true` value is selected by default
  * `false` value is unselected by default

### More examples

Filter elements by one or more skills using a dropdown:

```
@controls {
  top {
    filter {
      target: element;
      by: "Skills";
      as: dropdown;
      multiple: true;
      placeholder: "Select one or more skills"
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

Filter connections by toggling between two types (with personal selected by default):

```
@controls {
  top {
    filter {
      target: connection;
      as: label;
      multiple: false;

      option {
        label: "Personal";
        selector: personal;
        default: true;
      }

      option {
        label: "Business";
        selector: business;
      }
    }
  }
}
```

Filter elements by type but select all types by default:

```
@controls {
  top {
    filter {
      target: element;
      by: "Element type";
      default: select-all;
    }
  }
}
```

<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/guides/controls/filter-control.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
