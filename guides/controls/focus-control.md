# Focus control

**When do you use it?**

The focus control allows you to use [focus](../focus.md) on a specific field across all elements, meaning that the control will toggle on all elements with that field + their connections. You can indicate whether you want the connections to be "out 1" (only first-degree connections), or "out 2" (first- and second-degree connections), etc. &#x20;

{% hint style="info" %}
Here are some great uses of the focus control:

* Focus by the “label” field to quickly zoom in on one element and its neighboring connections
* Focus by a specific field to quickly see which elements on the map have that value in their profile field, _and_ what their immediate connections are
{% endhint %}

## Basic Editor

To create a cluster control, follow these steps:&#x20;

1. Click the settings icon on the right ![](../../icons/sliders-h.svg) to open the editor, then click "Add custom control"**.**&#x20;
2. In the menu that opens up, change the value of the first dropdown to "Focus elements by field".
3. Use the other dropdowns to customize the look and location of your controls
4. Click Save at the bottom to save your changes
5. To add multiple controls, repeat steps 1-4 for each control.

## Advanced Editor

If you like to get into the nitty-gritty of the advanced editor, you can type out controls directly. The advanced editor also allows for more advanced controls, as explained below.&#x20;

Focus by field, basic syntax:

```
@controls {
  top {
    focus {
      by: "element type";
    }
  }
}
```

Focus using custom [selectors](../selectors.md#selectors):

```scss
@controls {
  top {
    focus {
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
  * `false` allows the reader to only select a single option
  * `true` allows the reader to select multiple options
  * `match-all` allows the reader to select multiple options, and only shows items that match **all** of the selected options
* `placeholder` the text to display when nothing is selected (for `as: dropdown` only)
* `summary` override the summary that's shown for the current selection (for `as: dropdown`). The summary will be shown regardless of what's selected so there's no need to use `placeholder` in this case.
* `default` defines which field values should be selected by default (for `by: "field"` only). Use `select-all` to select everything by default (or `show-all` for a similar effect without selecting everything by default).
* `except` allows you to remove field values from the available choices. Wrap the values you want to remove in quotes and separate multiple values by commas.
* `only` is similar to except but allows you to explicitly define which field values should be included as available choices.

[Check out our controls reference](../../overview/advanced-editor-hub/controls-reference.md) to see the full list of properties and values recognized by the focus control.

**Supported children**

If you don't supply a field to focus by, each option must be listed separately. The available options are defined by `option` blocks nested within the control. Each `option` supports the following properties:

* `label` the text to display for that option
* `selector` the [selector](../selectors.md#selectors) to use for the filter
* `default`
  * `true` value is selected by default
  * `false` value is unselected by default

### More examples

Focus elements by one or more skills using a dropdown:

```scss
@controls {
  top {
    focus {
      target: element;
      by: "Skills";
      as: dropdown;
      multiple: true;
      placeholder: "Select one or more skills"
    }
  }
}
```

Focus by location, but only for items that have a location:

```scss
@controls {
  top {
    focus {
      by: "Location";
      target: ["Location"];
    }
  }
}
```

Focus elements by type, but select all types by default:

```scss
@controls {
  top {
    focus {
      target: element;
      by: "Element type";
      default: select-all;
    }
  }
}
```
