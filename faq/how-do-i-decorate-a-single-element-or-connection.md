# How do I decorate a single element or connection?

Usually, it's faster and easier to decorate elements and connections according to the data in their [fields](/guides/fields.html)—for example, creating a decoration rule that selects all elements with the element type "Organization", and color-codes them by their sector.

But, if you haven't added field data, or you just want to tweak the style of one single item on the map, it's good to know how to decorate a single element or connection.

### Use the Basic Editor

First, go to your map and click on the element or connection you want to decorate. A thin outline will appear around an element to let you know that it's selected, and when a connection is selected, it will turn opaque.

Then, click the Settings icon <i class="fa fa-sliders"></i> on the right side of the map (or press `T` on your keyboard) to open the Basic Editor:

![Basic Editor](/images/overview-basic-editor.png)

Click **MORE OPTIONS**, and select **Decorate elements** to bring up the decoration builder. At the top of the decoration builder, make sure the dropdown menu is set to **Decorate selected elements**.

![Decorate selected elements modal](/images/decorate-selected-elements.png)

Use the Builder to build your desired decoration, optionally add a label for the Legend, and click **Done**. Kumu will return you to the map to preview your changes.

If you like what you see, don't forget to click **SAVE** at the bottom of the Basic Editor to save your new decoration. If you need to make a few changes, just open the Basic Editor, scroll down to find your decoration at the bottom of the list, and click the pencil icon to edit the decoration.

To decorate a single connection, the process is nearly identical. You start by selecting the connection, opening the Basic Editor, and clicking **MORE OPTIONS**. Then, instead of selecting **Decorate elements**, select **Decorate connections**.

In the decoration builder, set the dropdown at the top to **Decorate selected connections**, and the rest of the process is the same.

### Use the Advanced Editor

You can use a [label or ID selector](/guides/selectors.html#select-by-label) to target and decorate an individual element or connection in the Advanced Editor.

To open the Advanced Editor, click the Settings icon <i class="fa fa-sliders"></i> on the right and click **SWITCH TO ADVANCED EDITOR** at the bottom. Then, use our [property reference](/guides/property-reference.html) to explore all the options for decorations in the Advanced Editor.

Keep an eye on your map while you code in the Advanced Editor—Kumu will parse your code and preview your changes while you work. If you like what you see, click **SAVE** at the bottom of the Advanced Editor.

<p class="alert alert-info">
Shortcut: Press <code>.</code> on your keyboard to quickly open the Advanced Editor.
</p>

<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/faq/how-do-i-decorate-a-single-element-or-connection.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
