# Force-directed layout

With the force-directed layout, Kumu positions everything automatically based primarily on three forces:
1. A **gravity** force that pulls all items toward the true center of the map
2. A **particle charge** force that pushes elements away from each other, as if all elements were the same pole of a magnet
3. A **connection** force that pulls connected elements back together

The force-directed layout also allows you to override any element's position by pinning it in place. After you pin an element, it will stay where you left it and won't be affected by any of the usual forces.

<p class="alert alert-info">
  The <a href="/guides/templates.html#stakeholder-template">stakeholder template</a> and <a href="/guides/templates.html#sna-social-network-analysis-template">SNA template</a> use the force-directed layout by default.
</p>

We've picked default strengths for each of these forces in order to create comfortable layouts for most maps, but if things are looking a little off, you can customize the layout forces in two different ways.


## Change the layout preset

The easiest way to change how gravity, particle charge, and connections affect the layout is to change your **layout preset**.

To do that, click the Settings icon <i class="fa fa-sliders"></i> to open the Basic Editor, then click **MORE OPTIONS** and select **Customize view defaults**. Scroll down to the **Layout settings** section and use the "Preset" dropdown to switch between three default settings:

- auto
- dense
- hairball


## Change the forces' underlying strengths

If none of the layout presets look good for your map, you can use the [Advanced Editor](/overview/view-editors.html#advanced-editor) to fine-tune the forces' underlying strengths. Here's some sample code to get you started:

```
@settings {
  layout-gravity: 0.0001;
  layout-particle-charge: 300;
  connection-length: 500;
  connection-strength: 0.1;
}
```


## Changing from fixed to force-directed layout:

1. Click on the Settings icon <i class="fa fa-sliders"></i> on the right side of the map
1. Click **MORE OPTIONS** and select **Customize view defaults**
1. Scroll down to the **General settings** section to change the "Layout" to "force-directed"
1. In the same section, change "Default element behavior" to "floating"
1. If you were previously using a fixed layout, you may need to un-pin all the existing elements. You can do this by pressing `Shift`+`E` on your keyboard to select all elements, then click the pin icon in the lower right of the element profile **or** press `Alt`+`P` on your keyboard.

If you would rather do steps 1-4 in the [Advanced Editor](/overview/view-editors.md#advanced-editor), here is the code you can use to switch to a force-directed layout:

```
@settings {
    layout: force;
}
```

After you complete all five steps, you just need to move one element, and they will all start to float into the force-directed layout.


<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/guides/layouts/force-directed.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
