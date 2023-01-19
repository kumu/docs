# Showcase by field control

**Use**

Add a control to activate [showcase](../advanced-settings.md#showcasing) for a given field via a list of labels, buttons or a dropdown menu.

**Example**

```scss
@controls {
  bottom {
    showcase-by-field {
      field: "region";
      mode: normal;
      as: dropdown;
      multiple: true;
    }
  }
}

```

**Supported properties**

* `field` is the field you'd like to use for showcasing wrapped in double quotes
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
