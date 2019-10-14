# How do I restructure my adjacency matrix?

If your data is structured as an [adjacency matrix](https://en.wikipedia.org/wiki/Adjacency_matrix), the matrix will need to be restructured as a list of connections, before it can be [imported](/guides/import.html). Restructuring an adjacency matrix can be complex, so we created two tools to help you.

The first tool is [a website](https://matrix-expander.netlify.com/) where you can upload your matrix, click a button, and download a CSV, XLSX, or JSON file that you can drag-and-drop into Kumu to import the data. 

The second tool is a custom Google Sheets function called `TO_CONNECTION_LIST` that will convert any adjacency matrix into a connection list, which can then be imported into Kumu.

![custom TO_CONNECTION_LIST function in Google Sheet](/images/custom-function-to-connection-list.png)

To get access to the custom function, you can open our ["With custom Kumu functions" Google Sheet](https://docs.google.com/spreadsheets/d/1qRhkn6qECtBaAncWykMa0hAG97jPK6q_bODrwntqze8/edit?usp=sharing), then click "File" > "Make a copy" to create your own editable copy of the sheet.

In your editable copy, type `=TO_CONNECTION_LIST(` in any cell to get started.


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

<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/faq/how-do-i-restructure-my-adjacency-matrix.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
