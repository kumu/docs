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

* `as`specifies the behavior of the control. Do you want a list of labels, buttons, or a dropdown for activating showcase?
 * `labels` creates a list of clickable labels
 * `buttons` creates a group of buttons
 * `dropdown` creates a dropdown with as many "options" as you specify below
* `mode` controls how the selection is showcased
 * `normal` showcase the selection plus any connections between the showcased elements (default)
 * `loose` showcase the selection plus neighboring elements
 * `strict` only showcase the selection itself
* `placeholder` the text to display when nothing is selected (for `as: dropdown` only)
* `option` is included for each button, label, or dropdown menu item and nests the corresponding settings.
 *  `label` is the visible text for each label, button, or dropdown item.
 * `selector` supplies the [selector](../selectors.html#selectors) for that item.
