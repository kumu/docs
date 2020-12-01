# Blueprints

It’s easy to import existing data into Kumu without having to mess with spreadsheets. You can create our [JSON](http://json.org/) imports—we call them **blueprints**—in any language from any dataset.

To get started, use any text editor to organize your data into elements and connections:

```
{
  "elements": [
    {"label": "A"},
    {"label": "B"}
  ],
  "connections": [
    {"from": "A", "to": "B"}
  ]
}
```

If you've worked with the JSON format before, you'll notice that this Kumu blueprint is organized as an object with two key-value pairs. The `"elements"` and `"connections"` keys are each paired with an array, and the arrays contain your data, formatted as objects.

Once you’ve got the basics in place you can add additional key-value pairs to the objects that represent your data—for example, "type", "description" and "tags", along with any custom keys you’d like as well:

```
{
  "elements": [
    {
        "label": "A",
        "type": "Letter",
        "description": "This is A",
        "tags": ["one", "two"]
    },
    {
        "label": "B",
        "type": "Letter",
        "Favorite Dessert": "shave ice"
    }
  ],
  "connections": [
    {
        "from": "A",
        "to": "B",
        "type": "likes"
    }
  ]
}
```

In your connection objects, you can assign a value to the `"direction"` key to control whether connections are undirected, directed, or mutual:

```
{
  ...
  "connections": [
    {
        "from": "A",
        "to": "B",
        "direction": "mutual"}
  ]
}
```

If you’re working with multiple elements with the same label, you can assign values to the `"id"` key to differentiate them. Just make sure to use the ids, not the labels, when building the connections:

```
{
  "elements": [
    {
        "id": "e1",
        "label": "A"
    },
    {
        "id": "e2",
        "label": "A"
    }
  ],
  "connections": [
    {
        "id": "c1",
        "from": "e1",
        "to": "e2"
    }
  ]
}
```

When you're finished creating your blueprint, save the file with a `.json` extension. To import the data into Kumu, you can drag-and-drop the file directly onto your map.


### Project backups

You can create a full backup of your Kumu project at any time, thanks to our JSON blueprint exports. All you need to do is open your project, click the `...` icon in the lower right corner, and select **Export .json**. The file that downloads to your computer is a full backup of your project, including all data (elements, connections, loops, and data stored in their fields), element positions, views, maps, map overviews, field relevance settings, etc.

The backup will also include anything that is in [your project's Trash](/overview/kumus-architecture.html#trash), so it can be a helpful tool when you need to restore large groups of deleted elements and connections.

To restore this backup in a brand new project, go to your Kumu dashboard and click the New Project button. Name your project and set it to private or public, and advance to the next screen:

![Template screen](/images/template-screen.png)

On this screen, click the blue link that says **restore backup**, then select the blueprint from your computer. Kumu will import the blueprint, fully restoring all data and project settings, including the project name.

<p class="alert alert-warning">
Not seeing the <b>restore backup</b> link on your screen? Make sure you're importing into a brand new project—it's not possible to import a blueprint into a project with existing maps, views, and other data.
</p>


### Set a remote blueprint

If you have a blueprint that is regularly receiving new data (for example, from a social network analysis survey), you can tell Kumu to automatically fetch the most up-to-date version each time the page is refreshed, just like a [Google Sheets import](https://docs.kumu.io/guides/import.html#integrating-with-google-sheets).

If your blueprint is already hosted online, just open up the [import modal](/guides/import.html) in your browser and paste your JSON's public link into the "Link map to remote JSON" box.

For this to work, you first need to host your blueprint publicly online, so that Kumu can find it. One option is to use GitHub:
1. Sign into GitHub (or create an account if you don't have one)
1. Create a new repository, and upload your JSON blueprint
1. Click on your file in GitHub, then click the `Raw` button
1. Copy the URL of the page that opens up, and use that URL in the function above


<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/guides/blueprints.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
