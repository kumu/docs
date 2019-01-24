# How do I add arrows to my connections?

If you want to add arrows to your connections to specify direction, here are a couple ways to do so:

### For a single connection

* Select the connection.
* Use the direction icon <i class="fa fa-exchange">  </i> in the [side panel](/overview/map-editor.md#side-panel) to specify "Directed", "Mutual", or reverse <i class="fa fa-random"></i> the connection direction.
* Click "Directed" to add a connection arrow, and "Mutual" to add an arrow on each side.

![Direction Menu](/images/Connection Direction2.png)

### For all connections

* Press `Shift` + `C` on your keyboard to select all connections.
* Click on the direction icon <i class="fa fa-exchange">  </i> in the side panel.
* Click "Directed" to add arrows to all connections.


### For imported connections

If your data is coming from Excel imports, or a remote source like [Google Sheets](/guides/import.html#import-from-google-sheets) or a [JSON blueprint](/guides/blueprints.html#set-a-remote-blueprint), you can add arrows by changing the default map settings:

* [Open the map settings](/overview/settings.html#map-settings)
* Click **Default connection direction**
* Choose **Directed** to add arrows to one end, and choose **Mutual** to add arrows to both ends

### Good to know:
- Arrows can't be added to connections if you're using the [SNA template](https://docs.kumu.io/guides/templates.html#sna-social-network-analysis-template).
- Kumu recognizes connection direction from your spreadsheet import (**From** and **To** columns in your connections sheet) or the direction you draw the connection by hand. This connection direction determines which way arrows point when you specify a "directed" connection.
- In a [JSON blueprint](/guides/blueprints.md), you can use the `directed` property of each connection to specify `'directed'`, `'undirected'`, or `'mutual'`.

<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/faq/how-do-i-add-arrows-to-my-connections.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
