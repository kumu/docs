# Export

You can quickly export your entire map (or just a portion through selections). This makes it easy to refine your data in Excel (or Google Drive) and share it with others, or even transfer your data into a new project. You'll find the export button in the lower right corner of your project.

You'll have four options for exporting:

* [Export to PDF](export.md#export-to-pdf-for-high-resolution-images)
* [Export to PNG](export.md#export-to-png-create-a-screenshot)
* [Export to XLSX](export.md#export-to-excel-for-bulk-editing)
* [Export to JSON](export.md#export-to-json-downloading-a-project-blueprint)

## Export to PDF: for high-resolution images

If you need a hi-res screenshot that can scale up or down to any size (for example, when you're printing a Kumu map on a large poster), you can create hi-res PDF files.

PDFs are free and unlimited for all projects in all workspaces.

{% hint style="info" %}
Want to make sure your labels are readable on your PDF or screenshot? [Learn how to remove label overlap](layouts/remove-overlap.md).
{% endhint %}

{% hint style="warning" %}
PDFs do not render for:\
\- [Geo templates](templates/geo.md)\
\- [Presentations](presentations.md)\
\- [Grids & Guides](underlays.md)\
\- [Background images](images.md#add-a-background-image)
{% endhint %}

## Export to PNG: create a screenshot

To quickly snap a screenshot of your map, click the download icon in the bottom right corner, and select "Export to PNG". Note that the screenshot will be taken at your current position and scale on the map—if you'd like everything to be centered, click the zoom-fit icon in the zoom toolbar, or press `\` on your keyboard.

{% embed url="https://www.youtube.com/embed/66dz3DFJZi4" %}

When Kumu brings up your screenshot, you can right-click the image and select "Save image as..." to save the image to your computer.

{% hint style="info" %}
Note that geo maps can not be exported to PNG. Also: the default background color of Kumu maps is off-white. If you wish to change the background color to a regular white so that it fits better within the rest of your document, you can add this code to the Advanced Editor:

@settings {

background-color: white;

}
{% endhint %}

## Export to Excel: for bulk editing

If you choose "Export to XLSX" without anything selected, your entire map will be exported as a spreadsheet in xlsx format. If you only want to export a portion of your map, just select the things you'd like to export before clicking export.

You'll now have all of your elements and connections available as two separate sheets in a xlsx file. You can use this to edit and refine your data if you (or your teammates) prefer working in Excel. Simply drag the file back onto the map when you're done to pick up any changes.

_Note: If you're working with loops, you'll need to continue to edit them within Kumu as exports don't support loops yet._

## Export to JSON: downloading a project blueprint

If you need to backup your entire project (all maps, views, and underlying data **except presentations**), click the download icon in the lower right corner and choose "Export to JSON". This will create a [JSON blueprint](import/blueprints.md) which can be used as a snapshot in time of your project, and can be imported into a blank project to restore it.
