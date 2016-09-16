# Decorate

Decorations are powerful ways to change the color and/or size of the element, connections and loops in your map.

### Coloring by qualitative fields

If you have a qualitative field like "element type" you'll need to create a decoration for each value. Click "new element rule" and then use the top dropdowns to identify which element type(s) you want to color. Let's use "civic engagement" as an example:

<img src="../images/introduction-decorate.png" alt="element decoration builder">

Next, choose the decoration you'd like to use. For example, you could choose "change color" and then set the color as green (try using #ADB8FB instead of standard green).

The same process applies for connections as well (just choose the "new connection rule" button instead).

## Coloring or scaling by quantitative fields

When you have a quantitative field, it makes it even easier to decorate the elements. You might have a "net worth" field and you'd like to scale the size of all the people on the map based on this value. In this case, you'd change the top dropdown to "decorate custom selection" and set it as `element type` `is` `person`. From there, just add the size scale as shown below:

![quantitative scale](/images/quantitative-scale.png)

## Decorations are applied top to bottom

You might run into some cases where your decorations compete with one another (you decorated all "people" blue but highlighted those tagged with "influential" orange). Decorations are applied from top to bottom. Simply re-order your decorations by dragging them to achieve the desired result.

<img src="../images/decoration-order.png" class="plain">

## Advanced editor

We've intentionally limited the decorations available through the builder to keep the UI simple
and avoid overwhelming new users. In order to harness the full power of views, you'll need to roll up your sleeves and do a little coding. Don't be scared! Beneath the surface views are controlled by css and it's a very easy language to learn.

![default view](/images/advanced-editor.png)

If you're comfortable with CSS, we highly recommend using the advanced editor. Read the [advanced editor guide](./views-advanced.md) to dive in.

<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/guides/decorate.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
