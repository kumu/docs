# How do I hide the settings button?

The Settings button on the right side of your map allows you to access the Basic Editor and the Advanced Editor to adjust the visualization and structure of your map.&#x20;

When you're building a map, it's usually helpful to have the Settings button close by, so you can access these [view editors](../overview/view-editors.md). But, when you're showing a map to your audience, you might sometimes want to hide it, so that they don't get confused by all of Kumu's features and options.

{% hint style="info" %}
Don't worry! Viewers of your map aren't actually able to _save_ the changes made to your map. So if you decide to keep the Settings button in place, nothing will happen to it.&#x20;
{% endhint %}

To hide the settings button, you can edit the [built-in controls](../guides/controls.md#built-in-controls). Specifically, you can copy/paste this snippet of code into your [Advanced Editor](../overview/view-editors.md#advanced-editor), right at the top:

```scss
@controls {
  top-right {
    zoom-toolbar {}
    focus-toolbar {}
  }
}
```

Then, click **SAVE** at the bottom of the editor to save your changes.

This snippet of code will instruct Kumu to show only the zoom toolbar and—when an item is selected on the map—the [focus](../guides/focus.md) toolbar. The settings button will no longer appear.

{% hint style="success" %}
Even if the settings button is hidden, it's always possible to open the Settings panel by pressing `T` on your keyboard.
{% endhint %}
