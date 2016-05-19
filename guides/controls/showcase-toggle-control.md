# Showcase-toggle control

**Use**

Add a control to activate [showcase](../advanced-settings.md#showcasing) via a list of labels, buttons or a dropdown menu.

**Example**

```
@controls {
  bottom {
    showcase-toggle {
      as: labels;
      multiple: true;

      option {
        label: 'People';
        selector: person;
      }

      option {
        label: 'Orgs';
        selector: organization;
      }
    }
  }
}

```

**Supported properties**

* `mode` controls how the selection is showcased
 * `normal` showcase the selection plus any connections between the showcased elements (default)
 * `loose` showcase the selection plus neighboring elements
 * `strict` only showcase the selection itself
* `as` controls how the control is presented. Do you want a list of labels, buttons, or a dropdown for activating showcase?
 * `labels` show options as a list of clickable labels
 * `buttons` show options as a group of buttons
 * `dropdown` show options as dropdown
* `placeholder` the text to display when nothing is selected (for `as: dropdown` only)

**Supported children**

The showcase options are defined by `option` blocks nested within the control. Each `option` supports the following properties:

* `label` the text to display for that option
* `selector` the [selector](../selectors.html#selectors) to use for the showcase
