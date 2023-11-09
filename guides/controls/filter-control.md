# Filter control

**When do you use it?**

Add a toggle control that allows viewers to filter by field values or custom selectors.

## **Basic editor**

To create a filter control, follow these steps:&#x20;

1. Click the settings icon on the right ![](../../icons/sliders-h.svg) to open the editor, then click "Add custom control"**.**&#x20;
2. In the menu that opens up, the filter control will be activated automatically in the first dropdown "Filter elements by field".
3. Use the other dropdowns to customize the look and location of your controls
4. Click Save at the bottom to save your changes
5. To add multiple controls, repeat steps 1-4 for each control.&#x20;

{% hint style="info" %}
**Note**: The filter control works with AND logic. This means that if you combine multiple controls on one map, the view will be filtered down to only those elements that satisfy _all_ of the conditions of the controls. Looking for OR logic (showing elements that satisfy _at_ _least_ _one_ of the conditions)? Take a look at our [Showcase control guide](showcase-control.md).
{% endhint %}

## Advanced Editor&#x20;

If you like to get into the nitty-gritty of the advanced editor, you can type out controls directly. The advanced editor also allows for more advanced controls, as explained below.&#x20;

Filter by field, basic syntax:

```scss
@controls {
  top {
    filter {
      by: "element type";
    }
  }
}
```

Filter using custom [selectors](../selectors.md#selectors):

```scss
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
  * `false` allows the reader to only select a single option
  * `true` allows the reader to select multiple options
  * `match-all` allows the reader to select multiple options, and only shows items that match **all** of the selected options
* `placeholder` the text to display when nothing is selected (for `as: dropdown` only)
* `summary` override the summary that's shown for the current selection (for `as: dropdown`). The summary will be shown regardless of what's selected so there's no need to use `placeholder` in this case.
* `default` defines which field values should be selected by default (for `by: "field"` only). Use `select-all` to select everything by default (or `show-all` for a similar effect without selecting everything by default).
* `except` allows you to remove field values from the available choices. Wrap the values you want to remove in quotes and separate multiple values by commas.
* `only` is similar to except but allows you to explicitly define which field values should be included as available choices.

[Check out our controls reference](../../overview/advanced-editor-hub/controls-reference.md) to see the full list of properties and values recognized by the filter control.

**Supported children**

If you don't supply a field to filter by, each option must be listed separately. The available options are defined by `option` blocks nested within the control. Each `option` supports the following properties:

* `label` the text to display for that option
* `selector` the [selector](../selectors.md#selectors) to use for the filter
* `default`
  * `true` value is selected by default
  * `false` value is unselected by default

### More examples

Filter elements by one or more skills using a dropdown:

```scss
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

```scss
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

```scss
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

```scss
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
