# Showcase control

**Use**

Add a control to activate [showcase](../advanced-settings.md#showcasing) for a given field or set of selectors via a list of labels, buttons or a dropdown menu.

**Example**

Showcase by field:

```
@controls {
  bottom {
    showcase {
      by: "region";
      mode: normal;
      as: labels;
      multiple: true;
    }
  }
}

```

Showcase by defining options using [selectors](../selectors.html#selectors):

```
@controls {
  bottom {
    showcase {
      mode: loose;
      as: labels;
      multiple: false;

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

* `by` is the field you'd like to use for showcasing wrapped in double quotes (if you don't include `by: field` you need to list out each option - see "supported children" guidance below)
* `mode` controls how the selection is showcased
 * `normal` showcase the selection plus any connections between the showcased elements (default)
 * `loose` showcase the selection plus neighboring elements
 * `strict` only showcase the selection itself
* `as` controls how the control is presented. Do you want a list of labels, buttons, or a dropdown for activating showcase?
 * `labels` show options as a list of clickable labels
 * `buttons` show options as a group of buttons
 * `dropdown` show options as dropdown
* `multiple` controls whether more than one value can be showcased at a time
 * `true` allows multiple values to be showcased
 * `false` allows only a single value to be showcased at a time
* `placeholder` the text to display when nothing is selected (for `as: dropdown` only)
* `target` a selector that controls which items the filter applies to. Defaults to `*`, which will apply the showcase to all items.

**Supported children**

The showcase options are defined by `option` blocks nested within the control. Each `option` supports the following properties:

* `label` the text to display for that option
* `selector` the [selector](../selectors.html#selectors) to use for the showcase
