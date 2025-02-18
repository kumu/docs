# How do I create dynamic on/off toggles for my map?

[Controls](https://docs.kumu.io/guides/controls) are incredibly useful to reduce the complexity of your map and make your visualization more dynamic. Through buttons, drop downs, and/or toggles, viewers can decide what entities they want to see on the map and when. They're also great for simple show/hide toggles that can be turned `on` or `off` at any moment. Here's how you can add them to your map:

### Toggle elements&#x20;

Before copying the code, make note of the following customizations in the properties based on what you want to do:&#x20;

* **Top** - the region of the control on your map. Switch for "bottom" or "bottom-right" to place the control somewhere else.
* **Target** -  allows you to indicate which elements you want the toggle control to apply to, through the use of [selectors](https://docs.kumu.io/guides/selectors).
* **As** - dictates what your control will look like. Replace "label" with "button" to turn the control into a button.
* **Default** - indicates whether you want the elements or connections to show ("true") or hide ("false") by default when opening the map.&#x20;
* **Label** - allows you to set the text that will show on the map and entice people to click the toggle. Make sure to use "Show" when `default: false;` and "Hide" when `default: true;` .&#x20;

Now, on to the real deal!

**To show or hide certain elements with the click of button, add this code to your advanced editor:**&#x20;

```
@controls {
 top {
 filter {
  target: element["element type"="Person"];
  as: label;

  option {
    selector: *;
    default: true;
    label: "Hide all people";
   }
  }
 }
}
```

In this example, we can see from the `target:` property  that we want the control to hide all elements that have "Person" as their "Element type", which is why the `label:` of the control is "Hide all people". You can switch out the target for any other field ("element type") and field value ("Person").&#x20;

{% hint style="info" %}
Though possible, there's few instances where we want to use the `target: element;` selector, because that would hide all elements, thus all connections; effectively hiding your entire map.&#x20;
{% endhint %}

**To show or hide elements without connections (so-called orphans), use this code:**

```
@controls {
 top {
 filter {
  target: :orphan;
  as: label;

  option {
    selector: *;
    default: true;
    label: "Hide elements without connections";
   }
  }
 }
}
```

For more info on hiding orphans, [visit this guide](../faq/how-do-i-hide-elements-without-connections.md).&#x20;

### Toggle connections

**To toggle&#x20;**_**all**_**&#x20;connections with the simple click of a button, use this code:**&#x20;

```
@controls {
  top {
    filter {
      target: connection;
      as: label;

      option {
        selector: *;
        default: true;
        label: "Hide connections";
      }
    }
  }
}
```

Note again how the `target: connection;` line indicates what entities you want Kumu to apply this control to. Just like with elements, use more specific [selectors ](https://docs.kumu.io/guides/selectors)to apply the toggle control to certain connections only. &#x20;

If you have any questions about writing these codes, don't hesitate to reach out to support@kumu.io!

