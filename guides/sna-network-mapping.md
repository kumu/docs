# SNA / Network Mapping

This guide walks you through the basics of network analysis using Kumu. We'll walk through four parts:

1. Creating a project
1. Collecting the data
1. Running the metrics
1. Decorating your map

Looking for more background about network analysis before you get started? Check out [Social Network Analysis Made Easy](https://speakerdeck.com/jeffcmohr/social-network-analysis-made-easy):

<script async class="speakerdeck-embed" data-id="5c286ba03f9b01327c755690da73e3c1" data-ratio="1.77777777777778" src="//speakerdeck.com/assets/embed.js"></script>


## Step 1: Creating a project

If you haven't already, sign up for a user account by visiting [http://kumu.io/join](http://kumu.io/join).

Head to your [dashboard](http://kumu.io/dashboard) and click to create a new project. You can choose from either a public project (free) or a private project (starting at $9/month).

## Step 2: Collecting the data

Data can be collected via survey, pulled from existing data sources, or populated via personal knowledge.

### Surveys

Surveys ask participants both relational and demographic questions ([click here](http://www.surveymonkey.com/s.aspx?sm=JbeN1eq4AWhuxJjDhIgY7yWG9l5N4D%2fZ8bOLGMyAMcw%3d) for a sample survey done via SurveyMonkey). There are a number of both free and paid tools for survey analysis:

* [Google Forms](https://docs.google.com/forms) (Free)
* [Survey Monkey](https://www.surveymonkey.com/) (Free & Paid)
* [Survey Gizmo](https://www.surveygizmo.com) (Free & Paid)

Spend time thinking deeply about the questions in your survey. Some common questions include:

* Who do you work with?
* Who do you turn to for new ideas?
* Who do you turn to for advice?
* How does working with this person affect your energy levels?

Each of the various relational questions get at a different kind of network. It may be a network of trust, idea sharing & innovation, collaboration, or any other relationships that are important. Here are the three questions from the sample survey:

* **Information Sharing Network** - At least twice in the last month, have you received information from this person that you need to do your job?
* **Problem Solving Network** - At least twice in the last month, have you gone to this person for help with technical work-related problems?
* **Support Network** - At least twice in the last year, have you gone to this person for help with a difficult situation at work?

### Existing data

Sometimes you'll already have access to the type of data needed to run a social network analysis. You might use email traffic, lists of "friends" or "followers" from a social network, information about board membership, or even data from your CRM platform. The key here is to be both creative and honest about what the data represents.

For example, how helpful is the fact that someone is a "friend" of yours on LinkedIn? Have you ever accepted a connection to someone you didn't really know all that well? (We're definitely guilty of this)

### Personal knowledge

For certain networks, it's not plausible to collect information via surveys and you don't have data lying around. In those cases, it's often best to rely on personal knowledge of who knows who - sometimes even crowdsourcing this information by pulling together a group of people from the network and building out the links one by one.

### Getting the data into Kumu

You can get the data into Kumu in one of two ways: imports or populating by hand. For more information on imports, check out our [imports guide](/guides/import.md). If you're creating your map by hand, [start here](/getting-started/first-steps.md#build-your-first-map).

There are a few subtleties to how you structure your data for easiest use within Kumu. We've laid out some of those below:

**Use connection type to differentiate relationships among people**<br />
Say you ask two questions on your survey: one that asks questions getting at the relationships that represent the *trust* network and another that probes for the relationships that represent the *innovation* network. When structuring your data, use "trust" or "innovation" as the connection type for the respective connections and you'll be able to quickly switch between the "trust" and "innovation" network using filters.

**Element types make two (or more) mode networks a cinch**<br />
Sometimes you're looking to understand more than just how people are connected to each other. You may want to include organizations, projects, alma maters, and more. Simply differentiate these elements using the element type field and you can easily show and hide them as needed.

**Don't forget about the power of clustering**<br />
Clustering ([click here for the guide](/guides/clustering.md)) makes it easy to turn field data stored in the profile of any element into a dynamic network. Storing data about the organization someone works for within the profile? Use clustering to then transform that data into explicit connections on your map. This can be a big time saver if you don't already have connection data created.


## Step 3: Running the metrics

Metrics provide clues to who may be playing important (or not so important) roles across your network. You'll want to take the results of analysis based on metrics with a grain of salt as minor errors in data collection (or just missing data from someone not responding to a survey) can throw things off.

But we'll assume you have somewhat complete data. In that case, here's the metrics that are available and a short description of each:

### Degree

**MEASURES** The number of connections for a given element

**IDENTIFIES** Local connectors and hubs

**BEWARE** Not always the most influential or connected to the wider network

### Closeness centrality

**MEASURES** The distance from one element to all other elements

**IDENTIFIES** Those with high visibility about what’s happening across the network

**BEWARE** These people can quickly spread information (good or bad) across the network

### Betweenness centrality

**MEASURES** The number of times an element lies on the shortest path between two other elements

**IDENTIFIES** Key bridges and those who control the flow of information across a network

**BEWARE** These people may be bottlenecks or single points of failure

### Other metrics
You also have access to the following metrics (not seeing your favorite? [let us know](mailto:jeff@kumu.io)):

* **Indegree** - Indegree measures the number of incoming connections for an element. In general, elements with high indegree are the leaders, looked to by others as a source of advice, expertise, or information.
* **Outdegree** - Outdegree measures the number of outgoing connections for an element. In general, elements with high outdegree can reach a high number of elements and spark the flow of information across a network (but may not be the most efficient at spreading the information).
* **Reach (two-step out)** - Reach measures the portion of the network within two steps of an element. In general, elements with high reach can spread information through the network through close friend-of-a-friend contacts.
* **Reach efficiency** - Reach efficiency normalizes reach by dividing it by size (number of neighbors). In general, elements with high reach efficiency are less connected but gain more exposure through each direct relationship.

Note: Kumu now has support for [weighted metrics](http://blog.kumu.io/weighted-sna-metrics/) as well.

### Calculating and saving metric values

Click the blocks icon (<i class="fa fa-cube"></i>) in the bottom toolbar and choose "social network Analysis". You'll see the sidebar change and a dropdown to choose the metric you'd like to run. Select the metric and then click the button to run the metric. Once complete, you'll see an ordered listing of the elements based on the metric values. The respective value will also be saved to the profile of each element.

### Saving multiple versions of a single metric

By default, all metrics are saved to the name of the metric (betweenness calculations are saved to the "betweenness" field). Each time you run the metric the previous values are overwritten. If you'd like to keep the previous values, rename the field (maybe it's "2014 betweeness" or "betweeness before") before you run the metric again so that future saves don't overwrite the values.

## Step 4: Decorating your map

You can decorate your map based on the metrics or any other data you've imported to Kumu. We often see people using a mixture of both metric and qualitative data to size and decorate the map. Here's an example using colors to differentiate by sector (Higher Education, NGO, Consulting, etc.) and size to differentiate by betweenness centrality:

![Innovation Lab Network](/images/innovation-lab.png)

First, make sure you've run whatever metric you'd like to use for sizing or coloring. Then click the settings button on the right side of the map and choose "decorate". Click "add element rule" and then use the top dropdown to specify "all elements". You'll see a checkbox to "Change size" and then choose to "Scale elements based on field values." Choose your metric of choice or "metrics::last" to always size by the last metric that was run (this is helpful especially in the early analysis of a map).

![Decoration Builder](/images/metrics-scale.png)

For decorations based on qualitative fields, check out the guide on [views](/views.md).

### Looking to add or remove connection arrows?

By default, Kumu will import your connections as directed but won't display the arrow. To turn the arrow on, select all the connections by hitting the **a** keystroke, click the direction button (<i class="fa fa-random"></i>) in the lower right of the selection profile and then choose "directed." Connections can be directed, undirected, or mutual (arrows both ways). You also use this button to switch directions for a given directed connection.

**Still have questions?** Send an email to [support@kumu.io](mailto:support@kumu.io).

<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/guides/sna-network-mapping.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
