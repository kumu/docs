# Showcase control

**Use**

Add a control to activate [showcase](/guides/showcase.html) for a given field or set of selectors via a list of labels, buttons or a dropdown menu.

**Example**

Showcase by field:

```
@controls {
  bottom {
    showcase {
      by: "State";
    }
  }
}

```

Showcase using custom [selectors](/guides/selectors.html#selectors):

```
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
 * `true` allow multiple values to be selected
 * `false` only allow one value to be selected at a time
* `placeholder` the text to display when nothing is selected (for `as: dropdown` only)
* `summary` override the summary that's shown for the current selection (for `as: dropdown`). The summary will be shown regardless of what's selected so there's no need to use `placeholder` in this case.
* `default` defines which field values should be selected by default (for `by: "field"` only). Use `select-all` to select everything by default.

[Check out our controls reference](/guides/controls/controls-reference.md) to see the full list of properties and values recognized by the showcase control.

**Supported children**

If you want to use custom selectors to build the showcase, you'll need to list each option out separately. The options are defined by `option` blocks nested within the control and each `option` supports the following properties:

* `label` the text to display for that option
* `selector` the [selector](/guides/selectors.html#selectors) to use for the showcase
* `default`
  * `true` value is selected by default
  * `false` value is unselected by default

### Additional examples

Showcase by state and include neighboring elements, allowing multiple states to be selected at the same time:

```
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

```
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

```
@controls {
  bottom {
    showcase {
      by: "State";
      default: select-all;
    }
  }
}
```
