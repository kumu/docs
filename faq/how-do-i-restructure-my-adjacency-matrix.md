# How do I restructure my adjacency matrix?

If your data is structured as an [adjacency matrix](https://en.wikipedia.org/wiki/Adjacency\_matrix), the matrix will need to be restructured as a list of connections, before it can be [imported](../guides/import/). Restructuring an adjacency matrix can be complex, so we created a tool to help you.&#x20;

It's a custom Google Sheets formula called `KUMU_CONNECTION_LIST` that will convert any adjacency matrix into a connection list, which can then be imported into Kumu.

To get access to the custom formula, you can open our ["With custom Kumu formulas" Google Sheet](https://docs.google.com/spreadsheets/d/1qRhkn6qECtBaAncWykMa0hAG97jPK6q\_bODrwntqze8/edit?usp=sharing), then click "File" > "Make a copy" to create your own editable copy of the sheet.

Delete all the example tabs in your spreadsheet, then create a new tab, and put your matrix in that tab. Be sure to add `(ignore)` to the tab name to make sure Kumu doesn't try to import it. Next, add a new tab, and type `=KUMU_CONNECTION_LIST(` in cell `A1` to get started.

## Video explanation

{% embed url="https://youtu.be/2hNgEqzIjQA" %}
Note: the first tool in this video is currently unavailable. Please refer to the second tool (custom Google Sheets) at 01:41 of the video.
{% endembed %}

## Sample usages

`KUMU_CONNECTION_LIST(A1:J10)`

`KUMU_CONNECTION_LIST(A1:J10, TRUE, TRUE, TRUE, TRUE, TRUE)`

## Syntax

`KUMU_CONNECTION_LIST(matrix, is_directed, include_duplicate_connections, include_self_connections, include_zero_strength_connections, include_blank_strength_connections)`

| Parameter                            | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `matrix`                             | The cell range containing the adjacency matrix to be converted                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `is_directed`                        | <p><code>TRUE</code> when the network is directed, <code>FALSE</code> when the network is undirected.</p><p>Defaults to <code>FALSE</code>.</p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `include_duplicate_connections`      | <p>For directed networks: <code>TRUE</code> when the connection list should include connections with the same source and target, <code>FALSE</code> when the connection list should only include the the first connection for any given source-target pair (ignoring all other connections between that pair).</p><p>For undirected networks: <code>TRUE</code> when the connection list should include multiple connections between the same pair of elements, <code>FALSE</code> when the connection list should only include the the first connection for any given pair of elements.</p><p>Defaults to <code>FALSE</code>.</p> |
| `include_self_connections`           | <p><code>TRUE</code> when the connection list should include connections between any given element and itself, <code>FALSE</code> when it shouldn't.</p><p>Defaults to <code>FALSE</code>.</p>                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `include_zero_strength_connections`  | <p><code>TRUE</code> when the connection list should include connections whose strength is <code>0</code>, <code>FALSE</code> when it shouldn't.</p><p>Defaults to <code>FALSE</code>.</p>                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `include_blank_strength_connections` | <p><code>TRUE</code> when the connection list should include connections whose strength is blank, <code>FALSE</code> when it shouldn't.</p><p>Defaults to <code>FALSE</code>.</p>                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

`KUMU_CONNECTION_LIST` returns the full connection list, which will span across multiple columns and rows.

## Renaming the "Strength" column

The `KUMU_CONNECTION_LIST` formula will store your connection strengths in a column titled "Strength", and "Strength" will become a field name in Kumu. If you want to use a field name other than "Strength" you can follow these steps to change the column header in Kumu:

1. Add `(ignore)` to the tab that contains your new connection list, and add a new tab
2. In cell `A2` of the new tab, copy/paste the following formula:

```
=ARRAYFORMULA('My other tab (ignore)'!A2:C)
```

Replace `My other tab (ignore)` with the actual name of the tab where your connection list is. 3. Enter `From` and `To` as the column headers in cells `A1` and `B1` 4. Enter your custom Strength column header in cell `C1`
