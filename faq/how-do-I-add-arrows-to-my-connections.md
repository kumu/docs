# How do I add arrows to my connections?

{% hint style="info" %}
Arrows can't be added to connections if you're using the [SNA template](../guides/templates.md#sna-social-network-analysis-template).
{% endhint %}

If you want to add arrows to your connections to specify direction, here are a couple ways to do so:

### For a single connection

* Select the connection.
* Use the direction icon ![](../icons/exchange-alt.svg) in the [side panel](../overview/map-editor.md#side-panel) to specify "Directed", "Mutual", or reverse the connection direction.
* Click "Directed" to add a connection arrow, and "Mutual" to add an arrow on each side.

### For all connections

* Press `Shift` + `C` on your keyboard to select all connections.
* Click on the direction icon ![](../icons/exchange-alt.svg) in the side panel.
* Click "Directed" to add arrows to all connections.

### For a specific group of connections

* Click the Search bar at the top of the map, then click the rocket icon ![](../icons/rocket.svg) on the far right to bring up the selector builder.
* Use the selector builder to select the connections that you want to change, based on the information in their profiles.
* Click on the direction icon ![](../icons/exchange-alt.svg) in the side panel.
* Click "Directed" to add arrows to your selected connections.

### For imported connections and connections created by clustering

If your connections are imported from Excel, imported from a remote source ([Google Sheets](../guides/import/#import-from-google-sheets) or a [JSON blueprint](../guides/import/blueprints.md#set-a-remote-blueprint)), or created by [clustering](../guides/clustering.md), you can add arrows by changing the default map settings:

* [Open the map settings](../overview/settings.md#map-settings)
* Click **Default connection direction**
* Choose **Directed** to add arrows to one end, and choose **Mutual** to add arrows to both ends

You can also add arrows to imported connections if you include a `direction` field in your import file (for example, by adding a new spreadsheet column titled `direction`). In that field, you can use one of the following values (must be entered in all lowercase letters):

* `directed`
* `undirected`
* `mutual`

{% hint style="info" %}
When you're imported from a connected Google Sheet or JSON blueprint, you can only choose **one** connection direction. All of the connections in your map will have that same direction.
{% endhint %}

{% hint style="info" %}
Kumu recognizes connection direction from your spreadsheet import (**From** and **To** columns in your connections sheet) or the direction you draw the connection by hand. This connection direction determines which way arrows point when you specify a "directed" connection.
{% endhint %}
