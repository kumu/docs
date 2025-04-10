# How do I keep elements from moving?

The [force-directed layout ](../guides/layouts/force-directed.md)(default layout for the [Stakeholder and Big Data template](../guides/templates.md)) let's Kumu decide where to place your elements on a map. However, sometimes you don't want your Kumu map to re-arrange the elements every time you open it. In that case, you can do a number of things:

### Temporarily pause element movement

If you'd like to **temporarily** stop moving elements in your map, press the `spacebar` on your keyboard. Press `spacebar` again and they will go back to floating. This is especially useful when you have a lot of data and Kumu takes a lot of time placing the elements, resulting in a "jiggly" map that lasts for a few second/minutes upon opening.&#x20;

### Permanently pin elements in place

If you'd like to **permanently** stop elements from moving, you'll want to pin elements in place. Do this by pressing `A` on your keyboard to select all elements, then click the pin icon in the left side panel so it turns blue, or press the `P` key on your keyboard. This will pin all existing elements in place.&#x20;

You can also select a few core elements to pin in place (hold `Shift` down on your keyboard and click any elements to select) so other elements remain force-directed.&#x20;

Want to un-pin elements again? Select all elements again by pressing `A` on your keyboard (or select just a few), then click the pin icon in the left side panel again so it turns grey, OR press the `Alt + P` key on your keyboard (`Option + P` for Macbook).

{% hint style="warning" %}
_**Note** that you can't pin elements in place if you're importing data from Google Sheets. In that case, you'd have to disconnect your Google Sheet and_ [_import your data with Excel_](../guides/import/#import-from-excel-or-csv) _OR you can use automatic snap-to, as explained below._&#x20;
{% endhint %}

### **Automatically snap elements to a certain position**

You can create a rule that snaps all or some elements on your map to a circle or a line whenever you open your map. To learn how to do this, visit the guide on [Automatic Snap-To](../guides/layouts/snap-to.md#set-snap-to-automatically). This option is especially great to use when you're importing data through Google Sheets, where you can't pin elements in place permanently.&#x20;

### More layout options

For more information about layout options, or to set the default element behavior (fixed vs. floating) check out the guides on the [fixed layout](../guides/layouts/fixed.md) and [force-directed layout](../guides/layouts/force-directed.md).
