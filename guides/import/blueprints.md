# JSON / Blueprints

It’s easy to import existing data into Kumu without having to mess with spreadsheets. You can create our JSON imports—we call them **blueprints**—in any language from any dataset. JavaScript Object Notation (JSON) is a standard text-based format for representing structured data based on JavaScript object syntax.&#x20;

Kumu can interpret JSON files and JSON remote links. A JSON file simply holds data structures and objects, while a JSON link is commonly used for transmitting data between web applications (e.g., sending some data from an external server to Kumu, so it can be displayed on your map).&#x20;

**Skip to section:**&#x20;

* [Import a JSON file](blueprints.md#import-a-json-file)
* [Project backups](blueprints.md#project-backups)
* [Set a remote JSON link](blueprints.md#set-a-remote-json-link)

## Create a JSON file

To get started, use any text editor to organize your data into elements and connections:

```json
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

```json
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

```json
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

```json
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

When you're finished creating your blueprint, save the file with a `.json` extension.

## Import a JSON file

You can import the JSON file into Kumu in two different ways:

**1)** Simply drag and drop the file onto the map's canvas.

OR

**2)** Click the green **+** button at the bottom of your map, select "Import:, and click "Choose file" under Advanced > Import JSON file. Then click "Import JSON".&#x20;

## Project backups

You can create a full backup of your Kumu project at any time, thanks to our JSON blueprint exports. All you need to do is open your project, click the download icon in the lower right corner, and select **Export JSON**. The file that downloads to your computer is a full backup of your project, including all data (elements, connections, loops, and data stored in their fields), element positions, views, maps, map overviews, field relevance settings, etc.

The backup will also include anything that is in [your project's Trash](../../overview/kumus-architecture.md#trash), so it can be a helpful tool when you need to restore large groups of deleted elements and connections.

To restore this backup in a brand new project, go to your Kumu dashboard and click the New Project button. Name your project, set it to private or public, and advance to the next screen.

Click the link at the bottom that says **restore backup**, then select the blueprint from your computer. Kumu will import the blueprint, fully restoring all data and project settings, including the project name.

{% hint style="info" %}
Not seeing the restore backup link on your screen? Make sure you're importing into a brand new project—it's not possible to import a blueprint into a project with existing maps, views, and other data.
{% endhint %}

## Set a remote JSON link

If you have a blueprint that is regularly receiving new data (for example, from a social network analysis survey), you can tell Kumu to automatically fetch the most up-to-date version each time the page is refreshed, just like a [Google Sheets import](./#integrating-with-google-sheets).

If your blueprint is already hosted online, click on the green **+** button at the bottom of your map, choose "Import", and paste your JSON's public link into the "Link map to remote JSON" box.

For this to work, you first need to host your blueprint publicly online, so that Kumu can find it. One option is to use GitHub:

1. Sign into GitHub (or create an account if you don't have one)
2. Create a new repository, and upload your JSON blueprint
3. Click on your file in GitHub, then click the `Raw` button
4. Copy the URL of the page that opens up, and use that URL in the function above

{% hint style="danger" %}
Note that remote blueprints do not support the full Kumu project export JSON format. You must structure a blueprint file that just includes elements, connections and loops rather than the full project definition. A remote blueprint acts as the data source for a single map rather than the definition of a full project.
{% endhint %}
