# How do I collapse duplicate connections?

In some networks, you might want to collapse duplicate connections (i.e. multiple connections between the same pair of elements).

We don't offer this feature directly in Kumu, but we wrote a custom Google Sheets formula called `KUMU_COLLAPSE` to make it easier to collapse and de-duplicate connections inside your spreadsheet.

To get access to the custom formula, you can open our ["With custom Kumu formulas" Google Sheet](https://docs.google.com/spreadsheets/d/1qRhkn6qECtBaAncWykMa0hAG97jPK6q_bODrwntqze8/edit?usp=sharing), then click "File" > "Make a copy" to create your own editable copy of the sheet.

Delete all the example tabs in your spreadsheet, then create a new tab, and put your original connection list in that tab. Be sure to add `(ignore)` to the tab name to make sure Kumu doesn't try to import it.

Then, add a new tab, and type `=KUMU_COLLAPSE(` in cell `A2` to get started (leaving space in row 1 to add column headers later on).


## Sample usages

`KUMU_COLLAPSE(A1:J10)`

`KUMU_COLLAPSE(A1:J10, "mutual")`


## Syntax

`KUMU_COLLAPSE(connections, direction)`

| Parameter | Description |
| --- | --- |
| `connections` | A cell range containing the list of connections you want to collapse. **Note:** This cell range should **not** include the column headers from your original connection list. |
| `direction` | The direction (`"undirected"` or `"mutual"`) that should be assigned to a connection after a duplicate pointing in the other direction is discovered. Defaults to `"undirected"`. |

`KUMU_COLLAPSE` returns the collapsed connection list, without column headers. This result will span across multiple columns and rows.

In addition to the **From** and **To** elements for each connection, `KUMU_COLLAPSE` will include any original profile data that was included in the cell range you passed as the `connections` parameter.

After that profile data, `KUMU_COLLAPSE` will include:
- The number of connections (in either direction) that were found between the **From** and **To** elements in the original connection list
- The direction of the connection. This will be `directed` if connections in the original dataset only ever travel in one direction. If connections were detected traveling in both directions between a pair of elements, `KUMU_COLLAPSE` will assign `undirected` or `mutual` as the connection direction, depending on what you passed to the `direction` parameter.


## How to handle column headers

Intentionally, `KUMU_COLLAPSE` doesn't carry over your column headers, and you should not include them in the original cell range you pass as the first parameter to `KUMU_COLLAPSE`.

Instead, you should copy/paste you original column headers over, placing them in row 1, directly above the result from `KUMU_COLLAPSE`.

At the end, where `KUMU_COLLAPSE` lists the number of duplicate connections and the connection direction, you'll have two blank column headers.

For the number of duplicates, it's most common to put `Strength` as the connection header. For the connection direction, you can put `direction` in all lowercase letters, and when you import the data, Kumu will understand that you are using that column to [add arrows to connections](/faq/how-do-I-add-arrows-to-my-connections.md).



