# How do I restructure my adjacency matrix?

If your data is structured as an [adjacency matrix](https://en.wikipedia.org/wiki/Adjacency_matrix), the matrix will need to be restructured as a list of connections, before it can be [imported](/guides/import.html). Restructuring an adjacency matrix can be complex, so we created two tools to help you.

The first tool is [a website](https://matrix-expander.netlify.com/) where you can upload your matrix, click a button, and download a CSV, XLSX, or JSON file that you can drag-and-drop into Kumu to import the data.

The second tool is a custom Google Sheets function called `TO_CONNECTION_LIST` that will convert any adjacency matrix into a connection list, which can then be imported into Kumu.

![custom TO_CONNECTION_LIST function in Google Sheet](/images/custom-function-to-connection-list.png)

To get access to the custom function, you can open our ["With custom Kumu functions" Google Sheet](https://docs.google.com/spreadsheets/d/1qRhkn6qECtBaAncWykMa0hAG97jPK6q_bODrwntqze8/edit?usp=sharing), then click "File" > "Make a copy" to create your own editable copy of the sheet.

Create a new tab in your spreadsheet, and put your matrix in that tab. Be sure to add `(ignore)` to the tab name to make sure Kumu doesn't try to import it. Then, add a new tab, and type `=TO_CONNECTION_LIST(` in cell A1 to get started.


## Sample usages

`TO_CONNECTION_LIST(A1:J10)`

`TO_CONNECTION_LIST(A1:J10, true, true, true)`


## Syntax

`TO_CONNECTION_LIST(matrix, isDirected, includeDuplicateConnections, includeSelfConnections)`

| Parameter | Description |
| --- | --- |
| matrix | The adjacency matrix to be converted
| isDirected | <p><code>TRUE</code> when the network is directed, <code>FALSE</code> when the network is undirected.</p><p>Defaults to <code>FALSE</code>.</p> |
| includeDuplicateConnections | <p>For directed networks: <code>TRUE</code> when the connection list should include connections with the same source and target, <code>FALSE</code> when the connection list should only include the the first connection for any given source-target pair (ignoring all other connections between that pair).</p><p>For undirected networks: <code>TRUE</code> when the connection list should include multiple connections between the same pair of elements, <code>FALSE</code> when the connection list should only include the the first connection for any given pair of elements.</p><p>Defaults to <code>FALSE</code>.</p> |
| includeSelfConnections | <p><code>TRUE</code> when the connection list should include connections between any given element and itself, <code>FALSE</code> when it shouldn't.</p><p>Defaults to <code>FALSE</code>.</p> |

`TO_CONNECTION_LIST` returns the full connection list, which will span across multiple columns and rows.


## Renaming the "Strength" column

The `TO_CONNECTION_LIST` function will store your connection strengths in a column titled "Strength", and "Strength" will become a field name in Kumu. If you want to use a field name other than "Strength" you can follow these steps to change the column header in Kumu:

1. Add `(ignore)` to the tab that contains your new connection list, and add a new tab
2. In cell A2 of the new tab, copy/paste the following formula:
  ```
  =ARRAYFORMULA('My other tab (ignore)'!A2:C)
  ```
  Replace `My other tab (ignore)` with the actual name of the tab where your connection list is.
3. Enter `From` and `To` as the column headers in cells A1 and B1
4. Enter your custom Strength column header in cell C1



## Filtering your connection list

The `TO_CONNECTION_LIST` function will create a connection list that includes all possible connections in the matrix, including connections that have a blank value or `0` in the "Strength" column. To filter blank values and zeros out of your dataset, you can use the Google Sheets `FILTER` function:

1. Add `(ignore)` to the tab that contains your connection list, and add a new tab (with any name).
1. In cell A1 of the new tab, copy/paste the following formula:
  ```
  =FILTER('My other tab (ignore)'!A1:C, 'My other tab (ignore)'!C1:C<>"", 'My other tab (ignore)'!C1:C<>0)`
  ```
  Replace `My other tab (ignore)` with the actual name of the tab where your connection list is.

All set! Google Sheets will run the filter function to remove all connections that have either a blank value or a `0` in the "Strength" column.


<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/faq/how-do-i-restructure-my-adjacency-matrix.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
