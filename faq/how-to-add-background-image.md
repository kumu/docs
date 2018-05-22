# How can I add a background image (e.g. map or logo) to my Kumu map?

To add a background image to a map, you can use a snippet of code we prepared here for the [Advanced Editor](/overview/view-editors.md#advanced-editor). The following instructions assume you're adding a geo map, but they can be used for adding any background image.

1. Create an element named "background".
2. Add the following code to the Advanced Editor:
```
#background {
    layer: background;
    shape: square;
    size: 5000;
    color: transparent;
    image-url: url(https://cdn.rawgit.com/AlexVipond/hosted-svgs/master/world-map.svg);
    image-size: contain;
    image-resolution: original;
    label-visibility: none;
}
```
3. Click **SAVE** at the bottom of the Advanced Editor to save your changes.

You can replace the `image-url` with a link to any image online. To get an image URL from any image you see online, you can right-click the image and select "Copy Image Address".

<p class="alert alert-warning">
Some images won't be displayed in Kumu, because they are using an insecure connection (the link starts with <code>http</code> instead of <code>https</code>), or because they are traveling through a proxy server.<br><br>If your image isn't displaying in Kumu, you can save the file to your compute and follow the steps below to upload the image directly to your Kumu project.
</p>

You can also use the [Basic Editor](/overview/view-editors.md#basic-editor) to upload an image from your computer to your Kumu project—this will override the `image-url` in your code. Follow these steps:

1. Complete the initial steps above to create you background element and add your Advanced Editor code
1. Click the Settings icon <i class="fa fa-sliders"></i> to open the Basic Editor
1. Click **More Options**
1. Select **Decorate elements**
1. In the element decoration builder, set the dropdown at the top to "Decorate custom selection"
1. Set the second row of dropdown menus to `Label` `is` `background` (assuming your background element's label is `background`)
1. Check the box next to "Add image", then click "upload image"
1. Click **SAVE** at the bottom of the Basic Editor

<p class="alert alert-info">
If you need to adjust the position of the image element in the map you'll need to remove the <code>layer: background;</code> line. Adjust the position, and then add back that line when you're done.
</p>


**Notes:**
* "background" is the name of the element that will contain the background image in this example, but can be anything you want. Just name the element you add in step one the same thing that you put in the code above.
* `image-resolution` can have values of `auto`, `original`, or any number. The number you include (e.g. `1000`) will adapt the resolution for an image of that width (1000px).

As always, if you have any questions on how this works, email us at [support@kumu.io](mailto:support@kumu.io) for help!

<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/faq/how-to-add-background-image.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
