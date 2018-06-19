# Cluster control

**Use**

Add a control to activate [clustering](../clustering.html) for a given field or set of selectors via a list of labels, buttons or a dropdown menu.

**Example**

Cluster by field:

```
@controls {
  bottom {
    cluster {
      by: "Project";
    }
  }
}

```

Cluster using custom [selectors](../selectors.html#selectors):

```
@controls {
  top {
    cluster {
      as: buttons;

      option {
        value: person by "Project";
        label: "Project";
      }

      option {
        value: person by "Country";
        label: "Country";
      }

      option {
        value: person by "Organization";
        label: "Organization";
      }
    }
  }
}

```

**Supported properties**

* `by` is the field you'd like to use for clustering wrapped in double quotes. If you don't include `by: field` you need to list out each option - see "supported children" guidance below.
* `as` controls how the control is presented. Do you want a list of labels, buttons, or a dropdown for activating clustering?
 * `labels` show options as a list of clickable labels
 * `buttons` show options as a group of buttons
 * `dropdown` show options as dropdown
* `multiple` controls whether more than one value can be selected at a time
 * `true` allow multiple values to be selected
 * `false` only allow one value to be selected at a time
* `placeholder` the text to display when nothing is selected (for `as: dropdown` only)
* `summary` override the summary that's shown for the current selection (for `as: dropdown`). The summary will be shown regardless of what's selected so there's no need to use `placeholder` in this case.
* `default` defines which field values should be selected by default (for `by: "field"` only). Use `select-all` to select everything by default.

[Check out our controls reference](/guides/controls/controls-reference.md) to see the full list of properties and values recognized by the cluster control.

**Supported children**

If you want to use custom selectors to build clustering options, you'll need to list each option out separately. The options are defined by `option` blocks nested within the control and each `option` supports the following properties:

* `label` the text to display for that option
* `value` [advanced cluster rule](../clustering.html#advanced-clustering) to cluster by
* `default`
  * `true` value is selected by default
  * `false` value is unselected by default
