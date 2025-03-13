# Metrics

Kumu has a powerful metrics engine which includes a number of popular social network analysis (SNA) metrics as well as community detection and other helpful calculations.

![metrics tool](../images/metrics-degree.png)

## How to run basic metrics

1. Click on the Metrics icon in the bottom right corner of the map
2. Select "Social Network Analysis"
3. Choose a metric from the dropdown list
4. Click the large button "Discover ..." (e.g. "Discover the connectors/hubs" for the "degree" metric)

**Good to know:**

* To rerun metrics (for example, if you added new elements and connections), just follow the same steps again.
* Metrics will not be calculated for elements that are filtered out of the map.

{% embed url="https://www.youtube.com/embed/1o0AraW1MbM" %}

## SNA metrics

You can run the following metrics in Kumu:

| Metric                 | Description                                                                                                                                                                                                                                                                                               |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Degree                 | Degree centrality is the simplest of the centrality metrics, counting the number of connections an element has. In general, elements with high degree are the local connectors / hubs, but aren't necessarily the best connected to the wider network.                                                    |
| Closeness centrality   | Closeness measures the distance each element is from all other elements. In general, elements with high closeness can spread information to the rest of the network most easily and usually have high visibility into what is happening across the network.                                               |
| Betweenness centrality | Betweenness centrality measures how many times an element lies on the shortest path between two other elements. In general, elements with high betweenness have more control over the flow of information and act as key bridges within the network. They can also be potential single points of failure. |
| Size                   | Size measures the number of neighbors an elements has (plus the element itself). It's similar to degree, but counts the number of elements instead of connections.                                                                                                                                        |
| Indegree               | Indegree measures the number of incoming connections for an element. In general, elements with high indegree are the leaders, looked to by others as a source of advice, expertise, or information.                                                                                                       |
| Outdegree              | Outdegree measures the number of outgoing connections for an element. In general, elements with high outdegree can reach a high number of elements and spark the flow of information across a network (but may not be the most efficient at spreading the information).                                   |
| Eigenvector            | Eigenvector centrality measures how well connected an element is to other well connected elements. In general, elements with high eigenvector centrality are the leaders of the network, though they may not have the strongest local influence.                                                          |
| Reach (two-step out)   | Reach measures the portion of the network within two steps of an element. In general, elements with high reach can spread information through the network through close friend-of-a-friend contacts.                                                                                                      |
| Reach efficiency       | Reach efficiency normalizes reach by dividing it by size (number of neighbors). In general, elements with high reach efficiency are less connected but gain more exposure through each direct relationship.                                                                                               |
| MICMAC                 | MICMAC is a system analysis that explores element exposure (how much a given element is affected by other elements) and influence (how much a given element affects other elements). When plotted on an XY axis, these scores help you identify potential leverage points within the overall system.      |

{% hint style="info" %}
Looking for group metrics that describe your entire network? Check out the [SNA Dashboard control](controls/sna-dashboard-control.md).
{% endhint %}

### Weighted metrics

Certain fields also support weighting so you can include fields like strength and frequency in the calculations. Betweenness, closeness and degree use connection fields for weighting while size and reach use element fields for weighting.

For the metrics that allow weighting, you'll see an Advanced Options link once you select the metric:

![Weighted metrics](../images/weighted-metrics.jpg)

You can choose any numerical field for the weighting, but make sure you have values saved for the elements or connections based on which is used for the weighting. If you don't see the field you want to use listed, make sure the type for that field is set to numeric.

### Saving multiple versions of a single metric

By default, all metrics are saved to a field with the name of the metric (betweenness calculations are saved to the "betweenness" field). Each time you run the metric the previous values are overwritten. If you'd like to keep the previous values, rename the field (maybe it's "2014 betweeness" or "betweeness before") so that future saves don't overwrite the values.

{% embed url="https://www.youtube.com/embed/YZuJheC3zNc" %}

{% hint style="warning" %}
**Note:** If you're importing data through Google Sheets, the profile fields will not allow you to edit the field name by clicking on them (as demonstrated in the video above). In that case, please navigate to the Projects Settings in the top-left corner of your project (three stripes) > choose the Fields tab > click on the field of the metric for which you want to change the name and update the value in the Name textbox. Don't forget to click Save at the bottom of the page! You can then return to your Kumu project and run the SNA metrics again.
{% endhint %}

**Using metrics for a social network analysis?** Don't miss our [SNA / Network Mapping guide](../disciplines/sna-network-mapping.md).

### Other cool things you can do with metrics

Once you have Metrics calculated, you can use those numbers to decorate your map. For example, you can [size your elements by the number of connections they have](../faq/how-do-i-size-elements-by-number-of-connections.md) or you can use [data-driven decorations](data-driven-decorations.md) to decorate your elements based on Metrics.&#x20;

Here's how to highlight the outliers in your network by coloring all elements with a Betweenness metric _above_ 0.6 blue:

```
element["betweenness">"0.6"] {
  color: blue; 
}
```

## Community detection

Kumu includes support for community detection based on the [SLPA algorithm](https://scholar.google.com/scholar?q=slpa+community+detection). With the SLPA algorithm, communities are identified based on communication flows and, unlike older algorithms (such as the Louvain method used by Gephi), the algorithm can detect overlapping communities (which is helpful since community membership is rarely black and white).

### Detecting communities

Click the Metrics icon in the lower right corner of your map and choose "community detection". If you haven't run community detection before, clicking this will automatically detect communities. If you're already run community detection, clicking the icon will bring you to a window showing you the previous results.

![](../images/community-results.jpg)

{% hint style="info" %}
Good to know: Connection direction _does_ influence community detection.
{% endhint %}

### Reviewing community breakdowns

After running the algorithm, we present the results to you in a table that allows you to browse each of the communities, ordered by popularity (defined as the size of the community).

Within each community, elements are listed in order of their strength of association to that community. Think of this value as the probability of that element belonging to the given community. Elements in grey are ones that had ties to the community but ultimately had stronger ties somewhere else.

When analyzing the communities, you may notice that a common theme runs across all members of that community. Maybe they all went to the same graduate school, or worked at the same law firm (maybe they even went to the same high school). If you notice a theme like this, we provide an easy way to override the community name and replace it with a descriptive one.

Don't forget to click save once you're done!

{% hint style="info" %}
Note: Some community detection algorithms treat communities as black and white—you're either in, or you're out. While this helps simplify the analysis, it throws away a lot of useful information about the overlapping community structures within the network.\
\
The SLPA algorithm preserves this data, and we believe the breakdown is even more valuable than simply knowing the primary community an element belongs to.
{% endhint %}

### Color by communities

First, make sure to save the community results. This will save the best match for each element to the "Community" field so you can use the community values to decorate your maps.

![Les Miserables](../images/les-mis.jpg)

To quickly color-code elements by community, you can use the [Color by](decorate.md#color-by) tool in the Basic Editor.

### Rerun from scratch (optional)

When you rerun community detection, we'll use the existing communities to seed the algorithm by default. This keeps the communities more stable, but occasionally you may want to throw away the previous communities and start fresh. For instance, if you've made a number of changes to the map the previous communities will unfairly dominate the new network. Just click "throw away the current communities" and we'll dump the existing communities and rerun the algorithm from scratch.

Remember, not all networks have meaningful community structure! Use the default settings and try to avoid fiddling too much just to get a pretty picture.

Also remember that the science of community detection is still evolving. Use the results from the algorithm to ask better questions about your maps, but don't take them as fact.
