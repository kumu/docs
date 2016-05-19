# Showcase-toggle control

**Use**

Add a control to toggle [showcase](../advanced-settings.md#showcasing). Can choose display options for the control:
* `labels`: a list of labels
* `buttons`: a button or buttons
* `dropdown`: a dropdown menu of showcase options

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

* `as`specifies the behavior of the control. Do you want a list of labels, a button to showcase, or a dropdown for various showcase options?
 * `labels` creates a list of clickable labels on the bottom of the map
 * `buttons` creates a button or buttons
 * `dropdown` creates a dropdown with as many "options" as you specify below
* `option` is included for each button, label, or dropdown menu item and nests the corresponding settings.
 *  `label` is the label for the button, label, or dropdown item.
 * `selector` supplies the [advanced clustering setting](../clustering.md#advanced-clustering) for that showcase option.
