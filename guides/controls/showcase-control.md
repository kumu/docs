# Showcase control

**When do you use it?**

Add a control to activate [showcase](../showcase.md) for a given field or set of selectors via a list of labels, buttons or a dropdown menu.

## Basic Editor

To create a showcase control, follow these steps:

1. Click the settings icon on the right ![](../../icons/sliders-h.svg) to open the editor, then click "Add custom control"**.**
2. In the menu that opens up, change the first dropdown to "Showcase elements by field".
3. Use the other dropdowns to customize the look and location of your controls
4. Click Save at the bottom to save your changes
5. To add multiple controls, repeat steps 1-4 for each control.

{% hint style="info" %}
**Note:** The showcase control works with OR logic. This means that if you combine multiple controls on one map, the view will be filtered down to any elements that satisfy _at least one_ of the conditions of the controls. Looking for AND logic (showing only elements that satisfy _all_ of the conditions)? Take a look at our [Filter control guide](filter-control.md).
{% endhint %}

## Advanced Editor

If you like to get into the nitty-gritty of the advanced editor, you can type out controls directly. The advanced editor also allows for more advanced controls, as explained below.

**Example**

Showcase by field:

```scss
@controls {
  bottom {
    showcase {
      by: "State";
    }
  }
}

```

Showcase using custom [selectors](../selectors.md#selectors):

```scss
@controls {
  bottom {
    showcase {
      option {
        label: "People";
        selector: person;
      }

      option {
        label: "Orgs";
        selector: organization;
      }
    }
  }
}

```

**Supported properties**

* `by` is the field you'd like to use for showcasing wrapped in double quotes. If you don't include `by: field` you need to list out each option - see "supported children" guidance below.
* `mode` controls how the selection is showcased
  * `normal` showcase the selection plus any connections between the showcased elements (default)
  * `loose` showcase the selection plus neighboring elements
  * `strict` only showcase the selection itself
* `as` controls how the control is presented. Do you want a list of labels, buttons, or a dropdown for activating showcase?
  * `labels` show options as a list of clickable labels
  * `buttons` show options as a group of buttons
  * `dropdown` show options as dropdown
* `multiple` controls whether more than one value can be selected at a time
  * `false` allows the reader to only select a single option
  * `true` allows the reader to select multiple options
  * `match-all` allows the reader to select multiple options, and only showcases items that match **all** of the selected options
* `placeholder` the text to display when nothing is selected (for `as: dropdown` only)
* `summary` override the summary that's shown for the current selection (for `as: dropdown`). The summary will be shown regardless of what's selected so there's no need to use `placeholder` in this case.
* `default` defines which field values should be selected by default (for `by: "field"` only). Use `select-all` to select everything by default.

[Check out our controls reference](../../overview/advanced-editor-hub/controls-reference.md) to see the full list of properties and values recognized by the showcase control.

**Supported children**

If you want to use custom selectors to build the showcase, you'll need to list each option out separately. The options are defined by `option` blocks nested within the control and each `option` supports the following properties:

* `label` the text to display for that option
* `selector` the [selector](../selectors.md#selectors) to use for the showcase
* `default`
  * `true` value is selected by default
  * `false` value is unselected by default

### Additional examples

Showcase by state and include neighboring elements, allowing multiple states to be selected at the same time:

```scss
@controls {
  bottom {
    showcase {
      by: "State";
      mode: loose;
      multiple: true;
    }
  }
}
```

Showcase by state using a dropdown menu, and include a placeholder with instructions:

```scss
@controls {
  bottom {
    showcase {
      by: "State";
      as: dropdown;
      placeholder: "Select a state";
    }
  }
}
```

Showcase by state and select all states by default:

```scss
@controls {
  bottom {
    showcase {
      by: "State";
      default: select-all;
    }
  }
}
```
