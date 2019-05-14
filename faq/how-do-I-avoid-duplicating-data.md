# How do I avoid duplicating data?

If you're [importing spreadsheet data into Kumu](/guides/import.md), you'll most likely want to add new data, edit existing data, or maybe just fix a typo at some point. When that happens, you will want to make sure that Kumu isn't duplicating data when you re-import your up-to-date dataset.

To avoid duplicating data, you first need to understand how Kumu decides whether to **create** new elements & connections or **update** existing elements & connections.


### When does Kumu create, and when does it update?

The rules are a bit different for elements and connections, so we'll tackle them one at a time below.

#### Elements

For the simplest possible element spreadsheet, which only contains a **Label** column, Kumu will create a new element for each unique label. Kumu would create three elements for this example (a list of famous surfing waves in Hawaii):

| Label |
| --- |
| Waimea Bay |
| Pipeline |
| Sunset Beach |

For this next example, Kumu will also create only three elements, since one of the Labels is repeated in the data:

| Label |
| --- |
| Waimea Bay |
| Pipeline |
| Pipeline |
| Sunset Beach |

You can use this behavior to your advantage when you want to update an existing element's data. Let's say you have already imported the first dataset, which created three elements in Kumu, and now you want to add a new field to those existing elements, using this data:

Label | Live Surf Report
--- | ---
Waimea Bay | http://www.surfline.com/surf-report/waimea-bay-oahu_4755/
Pipeline | http://www.surfline.com/surf-report/pipeline-oahu_4750/
Sunset Beach | http://www.surfline.com/surf-report/sunset-beach-oahu_4746/
Pua'ena Point | http://www.surfline.com/surf-report/puaena-point-oahu_49940/

When you import this spreadsheet, Kumu will search through all existing elements to find any Labels that match the Labels in your import file. Then, Kumu will update the matched elements with your new field.If you had any existing data in an element's field, it would be replaced by the data in the new import.

If Kumu can't find a match, it will add a new element to the map. In the example above, Kumu would update the existing `Waimea Bay`, `Pipeline`, and `Sunset Beach` elements, and it would create a new element for `Pua'ena Point`, which wasn't included in the original dataset.

Now, if you also include a **Type** column on your spreadsheet, Kumu will create a new element for each unique Label-Type combination. For example, this dataset will create five elements, even though one Label is repeated:

Label | Type
--- | ---
Waimea Bay | Double overhead
Pipeline | Head high
Pipeline | Double overhead
Sunset Beach | Head high
Pua'ena Point | Head high

The same rules apply here when updating data on existing elements: if Kumu can find a Label-Type match for the elements you uploaded, it will update that element's data, otherwise, it will create a new element.

Finally, you can use an **ID** column to tell Kumu to ignore both Label _and_ Type, and only match existing elements based on their unique ID. This can be really useful when you want to change the Label and/or Type of elements without creating duplicates:

ID | Label | Type
--- | --- | ---
Wave-1 | Waimea Bay | Double overhead
Wave-2 | Pipeline | Head high
Wave-2 | Pipeline | Double overhead
Wave-3 | Sunset Beach | Head high
Wave-4 | Pua'ena Point | Head high

<p><iframe width="560" height="315" src="https://www.youtube.com/embed/hoEJ-FXkbnA" frameborder="0" allowfullscreen></iframe></p>

In the earlier example, before we added ID, Kumu was creating two elements with the label `Pipeline`. One of those elements had the type `Head high`, and the other had the type `Double overhead`. But now that we're using ID, Kumu understands that those are the same element with the ID `Wave-2`.

With the help of this new ID column, Kumu will only create one `Wave-2` element, and it will import the data from the `Wave-2` that is furthest down on the list (i.e. the type will be `Double overhead`, not `Head high`).

<p class="alert alert-warning">
If you're using IDs on your elements sheet, you need to use those IDs in the <b>From</b> and <b>To</b> columns on your connections spreadsheet, instead of using Labels.
</p>


### Connections

Connections behave differently than elements: by default, each row on your connections sheet will create a new connection, even if its From and To are the same as another connection's From and To. This spreadsheet will create two connections:

From | To
--- | ---
Oahu | Waimea Bay
Oahu | Pipeline

This spreadsheet will also create two connections:

From | To
--- | ---
Oahu | Waimea Bay
Oahu | Waimea Bay

Even if you add a Label and Type to a connection, Kumu will still have trouble recognizing and updating its existing version on the map without creating a duplicate. Because of this, if you plan to update existing connections with future imports, you should add IDs for each connection:

ID | From | To |
--- | --- | ---
Connection-1 | Oahu | Waimea Bay
Connection-2 | Oahu | Pipeline

In a future import for this example, we could use the ID `Connection-2` to update the existing connection with any new data, including a new From or To value:

ID | From | To | Type
--- | --- | --- | ---
Connection-2 | Oahu | Sunset Bay | Location

This import would update the map without creating a new, duplicate connection.

<p class="alert alert-warning">
If you're using an ID column on your connections sheet, you don't necessarily have to add IDs to your elements sheet. However, if you <em>are</em> using IDs on your elements sheet, you need to use those IDs in the From and To columns on your connections spreadsheet, instead of using Labels.
</p>

**Good to know:**
- You can't update map data when clustering is turned on. Make sure to turn off all clustering options before importing any data into Kumu.
- All of the same import rules apply when you are importing a [JSON blueprint](/guides/blueprints.md)
- If you use underscores `_` in your IDs, you won't be able to select elements from the search results in your map
- To send somebody a link directly to an element, connection, or loop, you can follow this pattern: `https://kumu.io/YourUsername/ProjectName#MapName/ViewName/ID`
- To remove duplicates, [check out these steps](how-to-get-rid-of-duplicates.md)


### Alternatively...delete all data to avoid duplicates

<p class="alert alert-danger">
Before you start: <a class="alert-link" href="/guides/blueprints.html#project-backups">Learn how to create a full project backup</a>
</p>

We get it—sometimes, you just don't want to think through the complexity of Kumu's import rules; all you want is a nice, clean map with no duplicates. In that case, your best option might be to [delete all the data from your project](/faq/how-do-i-delete-data-from-my-project.md) and start over with a fresh import.

Happy importing!


<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/faq/how-do-i-avoid-duplicating-data.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
