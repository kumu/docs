# Force-directed

With the force-directed layout, Kumu positions everything automatically based primarily on three forces:

1. A **gravity** force that pulls all items toward the true center of the map
2. A **particle charge** force that pushes elements away from each other, as if all elements were the same pole of a magnet
3. A **connection** force that pulls connected elements back together

The force-directed layout also allows you to override any element's position by pinning it in place. After you pin an element, it will stay where you left it and won't be affected by any of the usual forces.

{% hint style="info" %}
The [stakeholder template](../templates.md#stakeholder-template) and [SNA template](../templates.md#sna-social-network-analysis-template) use the force-directed layout by default.
{% endhint %}

We've picked default strengths for each of these forces in order to create comfortable layouts for most maps, but if things are looking a little off, you can customize the layout forces in two different ways.

## Change the layout preset

The easiest way to change how gravity, particle charge, and connections affect the layout is to change your **layout preset**.

To do that, click the settings icon ![](../../icons/sliders-h.svg) to open the Basic Editor, then click **MORE OPTIONS** and select **Customize view defaults**. Scroll down to the **Layout settings** section and use the "Preset" dropdown to switch between three default settings:

* auto
* dense
* hairball

## Change the forces' underlying strengths

If none of the layout presets look good for your map, you can use the [Advanced Editor](../../overview/view-editors.md#advanced-editor) to fine-tune the forces' underlying strengths. Here's some sample code to get you started:

```scss
@settings {
  layout-gravity: 0.0001;
  layout-particle-charge: 300;
  connection-length: 500;
  connection-strength: 0.1;
}
```

## Changing from fixed to force-directed layout:

1. Click on the settings icon ![](../../icons/sliders-h.svg) on the right side of the map
2. Select **Customize defaults**
3. Scroll down to the **General settings** section to change the "Layout" to "force-directed"
4. Then right-click your mouse on your map to open the quick-access menu. Choose Maps > Default Element Behavor > change it to "floating"
5. If you were previously using a fixed layout, you may need to un-pin all the existing elements. You can do this by pressing `Shift`+`E` on your keyboard to select all elements, then click the pin icon in the lower right of the element profile **or** press `Alt`+`P` on your keyboard.

If you would rather do steps 1-4 in the [Advanced Editor](../../overview/view-editors.md#advanced-editor), here is the code you can use to switch to a force-directed layout:

```scss
@settings {
    layout: force;
}
```

After you complete all five steps, you just need to move one element, and they will all start to float into the force-directed layout.
