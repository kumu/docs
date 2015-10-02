# Metrics
Kumu has a powerful metrics engine which includes a number of popular social network analysis (SNA) metrics as well as community detection and other helpful calculations.

## SNA metrics
Kumu includes support for the following SNA metrics:

* **Degree.** Degree measures the number of connections for a given element. In general, elements with high degree are the local connectors and hubs.
* **Closeness centrality.** Closeness measures the distance from one element to all other elements. In general, elements with high closeness have the most visibility into what's happening across the network.
* **Betweenness centrality.** Betweeness measures the number of times an element lies on the shortest path between two other elements. In general, elements with high betweeness are key bridges and those who control the flow of information across a network.
* **Indegree.** Indegree measures the number of incoming connections for an element. In general, elements with high indegree are the leaders, looked to by others as a source of advice, expertise, or information.
* **Outdegree.** Outdegree measures the number of outgoing connections for an element. In general, elements with high outdegree can reach a high number of elements and spark the flow of information across a network (but may not be the most efficient at spreading the information).
* **Size.** Size measure the number of neighbors an element has (plus the element itself). It's similar to degree but counts elements instead of connections.
* **Reach (two-step out).** Reach measures the portion of the network within two steps of an element. In general, elements with high reach can spread information through the network through close friend-of-a-friend contacts.
* **Reach efficiency.** Reach efficiency normalizes reach by dividing it by size (number of neighbors). In general, elements with high reach efficiency are less connected but gain more exposure through each direct relationship.

### Weighted metrics
Certain attributes also support weighting so you can include attributes like strength and frequency in the calculations. Betweenness, closeness and degree use connection attributes for weighting while size and reach use element attributes for weighting.

For the metrics that allow weighting, you'll see an advanced options link once you select the metric:

![Weighted metrics](/images/weighted-metrics.jpg)

You can choose any numerical attribute for the weighting, but make sure you have values saved to for the elements or connections based on which is used for the weighting. If you don't see the attribute you want to use listed, make sure the type for that attribute is set to numeric.

### Saving multiple versions of a single metric

By default, all metrics are saved to the name of the metric (betweenness calculations are saved to the "betweenness" attribute). Each time you run the metric the previous values are overwritten. If you'd like to keep the previous values, rename the attribute (maybe it's "2014 betweeness" or "betweeness before") so that future saves don't overwrite the values.

**Using metrics for a social network analysis?** Don't miss our [SNA / Network Mapping guide](/sna-network-mapping.md).

## Community detection

Kumu includes support for community detection based on the [SLPA algorithm](https://scholar.google.com/scholar?q=slpa+community+detection). With the SLPA algorithm, communities are identified based on communication flows and, unlike older algorithms (such as the Louvain method used by Gephi), the algorithm can detect overlapping communities (which is helpful since community membership is rarely black and white).

### Detecting communities

Click the building icon in the bottom toolbar to run community detection. If you haven't run community detection before, clicking this will automatically detect communities. If you're already run community detection, clicking the icon will bring you to a window showing you the previous results.

<img src="../images/community-results.jpg" class="plain">

### Reviewing community breakdowns

After running the algorithm, we present the results to you in a table that allows you to browse each of the communities, ordered by popularity (defined as the size of the community).

Within each community, elements are listed in order of their strength of association to that community. Think of this value as the probability of that element belonging to the given community. Elements in grey are ones that had ties to the community but ultimately had stronger ties somewhere else.

When analyzing the communities, you may notice that a common theme runs across all members of that community. Maybe they all went to the same graduate school, or worked at the same law firm (maybe they even went to the same high school). If you notice a theme like this, we provide an easy way to override the community name and replace it with a descriptive one.

Don't forget to click save once you're done!

*Note: Some community detection algorithms treat communities as black and white. You're either in or you're out. While this helps simplify the analysis (and admittedly makes it much easier to color by community), it throws away a lot of useful information about the overlapping community structures within the network. The SLPA algorithm preserves this data, and we believe the breakdown is even more valuable than simply knowing the primary community an element belongs to.*

### Color by communities

First, make sure to save the community results. This will save the best match for each element to the "Community" attribute so you can use the community values to decorate your maps.

![Les Miserables](/images/les-mis.jpg)

Eventually we'll build a UI to make the process of coloring by communities even easier, but for now you just need to add these lines to your advanced perspective:

```
@settings {
  element-color: categorize("community", spectral);
}
```

Wondering what "spectral" means? Kumu has built in support for a number of color scales. Here's a few custom ones for you to try:

* olympic
* neon
* heat
* stoplight

Head over to the [color reference](/color-reference.md) for information on all the color scales that are available.

### Rerun from scratch (optional)

When you rerun community detection, we'll use the existing communities to seed the algorithm by default. This keeps the communities more stable, but occasionally you may want to throw away the previous communities and start fresh. For instance, if you've made a number of changes to the map the previous communities will unfairly dominate the new network. Just click "throw away the current communities" and we'll dump the existing communities and rerun the algorithm from scratch.

Remember, not all networks have meaningful community structure. Use the default settings and try to avoid fiddling too much just to get a pretty picture.

The science of community detection is still evolving. Use the results from the algorithm to ask better questions about your maps but don't take them as fact.

<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/guides/metrics.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
