# How do I hide the settings button?

When you're building a map, it's usually helpful to have the settings button  close by, so you can access the [view editors](/overview/view-editors.md). But, when you're showing a map to your audience, you'll most likely want to hide it, so that they don't get confused by all of Kumu's features and options.

To hide the settings button, you can use [controls](/guides/controls.md). Specifically, you can copy/paste this snippet of code into your [Advanced Editor](/overview/view-editors.md#advanced-editor), right at the top:

```scss
@controls {
  top-right {
    zoom-toolbar {}
    focus-toolbar {}
  }
}
```

Then, click **SAVE** at the bottom of the editor to save your changes.

This snippet of code will instruct Kumu to show only the zoom toolbar and—when an item is selected on the map—the focus toolbar. The settings button will no longer appear.

For more info on how and why this works, check out [our full guide on built-in controls](/guides/controls.md#built-in-controls).

{% hint style="warn" %}
Even if the settings button is hidden, it's always possible to open the settings panel by pressing <code>T</code> on your keyboard.
{% endhint %}


