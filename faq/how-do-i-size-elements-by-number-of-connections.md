# How do I size elements based on number of connections?

Want to know which element is the most well-connected? Here's where combining metrics and sizing comes in handy.

## Run metrics

First, you'll have to run metrics to let Kumu calculate the number of connections of each element for you:

1. Click on the "Metrics" icon in the bottom right corner of the map
2. Select "Social Network Analysis" to open up the Metrics menu
3. Choose the "degree" metric from the dropdown list
4. Click the large button "Discover the connectors/hubs" to see the results
5. Kumu will automatically create a field called "degree" and save the values

**Good to know:**

* To rerun metrics (for example, if you added new elements and connections), just follow the same steps again
* Metrics are run for all items that are _visible_ on the map. If you want to exclude some elements from your metrics, simple filter them out before you run them
* To save multiple versions of the same metric, follow [this guide](../guides/metrics.md#saving-multiple-versions-of-a-single-metric)
* You can run any of the metrics mentioned [in this guide](../guides/metrics.md#sna-metrics), and then size based on them

## Size your elements

Once the metrics are calculated, you can size your elements by going into Settings on the right, and changing the "Size By" dropdown of the Basic Editor to the field of the metric you calculated (e.g. "degree"). More information on sizing can be found in [this guide](../guides/data-driven-decorations.md#size-by).

![size by metric](../images/Size-by-metrics.png)
