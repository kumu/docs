# How do I add arrows to my connections?

If you want to add arrows to your connections to specify direction, here are a couple ways to do so:

### For a single connection

* Select the connection.
* Use the "direction" icon in the sidebar menu to specify "Directed", "Mutual", or reverse the connection direction.
* Click "Directed" to add a connection arrow.

![Direction Menu](/images/Connection Direction2.png)

### For all connections

* Press `Shift` + `C` on your keyboard to select all connections.
* Click on the "Direction" icon in the sidebar.
* Click "Directed" to add arrows to all connections.

**Good to know:**
- Arrows can't be added to connections if you're using the [SNA template](https://docs.kumu.io/guides/templates.html#sna-social-network-analysis-template).gi
- Kumu recognizes connection direction from your spreadsheet import (**From** and **To** columns in your connections sheet) or the direction you draw the connection by hand. This connection direction determines which way arrows point when you specify a "directed" connection.
- In a JSON blueprint, you can use the `directed` property of each connection to specify `'directed'`, `'undirected'`, or `'mutual'`.

<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/faq/how-do-i-add-arrows-to-my-connections.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
