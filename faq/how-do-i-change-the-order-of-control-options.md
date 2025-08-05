# How do I hide control options or change their order?

### Hide control options

After you add a [control](../guides/controls.md) to your map, you might need to rearrange the order of buttons or dropdown options in that control. The best way to accomplish this is to use the `only` option in your control in the Advanced Editor.

Normally, the `only` option is used to restrict the available options in your control. Imagine we have a "Sector" field with the following values:

* Finance
* Agriculture
* Healthcare
* Education

If we only want "Finance" and "Agriculture" to appear in our control, we could use the `only` option to do that:

```scss
@controls {
  top {
    filter {
      target: element;
      by: "Sector";

      // Restrict our filter options from many sectors down to just two:
      only: "Finance", "Agriculture";
    }
  }
}
```

{% hint style="success" %}
If you only wish to exclude a few values from a large list of options, it might actually be shorter to use the `except:` property for the options you _don't_ wish to see, instead of listing out _all_ the options you _do_ wish to see: \


```
@controls {
  top {
    filter {
      target: element;
      by: "tags";
      as: dropdown;
      except: Academia, AI;
      multiple: true; 
      default: show-all;
    }
  }
}
```
{% endhint %}

#### Change the order of control options

When you pass options to the `only` property, Kumu will list the control options on the map in the exact order you specified.

In our example above, imagine we want the order of our options to be "Finance", "Education", "Healthcare", and finally "Agriculture". To accomplish that, we can pass that list to the `only` option:

```scss
@controls {
  top {
    filter {
      target: element;
      by: "Sector";

      // Allow all our possible options to show up on the map,
      // but make sure they are in this specific order:
      only: "Finance", "Education", "Healthcare", "Agriculture";
    }
  }
}
```
