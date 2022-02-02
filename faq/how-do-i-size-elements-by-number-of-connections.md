# How do I size elements based on the number of connections?
Want to know which element is the most well-connected? Here's where combining metrics and sizing comes in handy. 

## Run metrics

First, you'll have to run metrics to let Kumu calculate the number of connections of each element with one click of a button. 

1. Click on the "Metrics" icon in the bottom right corner of the map
2. Select "Social Network Analysis"
3. Choose the "degree" metric from the dropdown list
4. Click the large button "Discover the connectors/hubs" to see the results
5. Kumu will automatically create a field called "degree" and save the values

**Good to know:**

- To rerun metrics (for example, if you added new elements and connections), just follow the same steps again.
- Metrics will not be calculated for elements that are filtered out of the map.
- To save multiple versions of the same metric, follow [this guide](https://docs.kumu.io/guides/metrics.html#saving-multiple-versions-of-a-single-metric)
- You can run any of the metrics mentioned [in this guide](https://docs.kumu.io/guides/metrics.html#sna-metrics), and then size based on them.

## Size your elements

Once the metrics are calculated, you can size your elements by going into Settings and setting the Size By dropdown of the Basic Editor to the field of the metric you calculated (e.g. "degree)
More information on sizing can be found in [this guide](https://docs.kumu.io/guides/data-driven-decorations.html#size-by)

![size by metric](/images/size-by-metrics.png)
