# Showcase-toggle control

**Use**

Add a control to activate [showcase](../advanced-settings.md#showcasing) via a list of labels, buttons or a dropdown menu.

**Example**

```
@controls {
  bottom {
    showcase-toggle {
      as: labels; // labels | buttons | dropdown
      multiple: true;
      placeholder: 'Showcase';

      option {
        label: 'Ryan';
        selector: #ryan;
      }

      option {
        label: 'Kumu';
        selector: #kumu;
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
* `option` is included for each button, label, or dropdown menu item and nests the corresponding settings.
 *  `label` is the visible text for each label, button, or dropdown item.
 * `selector` supplies the [selector](../guides/selectors.html#selectors) for that item.
