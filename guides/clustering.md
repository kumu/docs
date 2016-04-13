# Clustering

Clustering is a powerful tool that allows you to transform profile information into a richly interactive map. It creates an element for each field value in the profile and draws a connection from the element to that value.

## A quick example

There are hidden relationships in much of the data you have stored in spreadsheets, they're just not stored as explicitly from/to connections. Most of you probably have a spreadsheet full of contacts, with one column storing the person's name and another column storing the organization she works for. If you imported this directly into Kumu, you'd end up with a map like this:

<img src="/images/cluster-before-final.png" alt="Elements with no relationships">

**Not that eye opening, right?** With other tools, if you wanted to see the relationship view you'd have to create a separate connections worksheet pointing each person to the organization they work for and then import both into Kumu.

With Kumu, just click the settings button on the right side of the map and then choose "cluster." You'll see a checklist of all the fields (except those you've disabled for clustering) that you can use to activate any number of clusters. In this example, we'd choose **organization.** *Voila!* You now have a relational map of all the people and organizations without ever having to do the import workaround.

<img src="/images/cluster-after-final.png" alt="Elements with relationships">

## Choosing what to cluster by

First, make sure that you have added data for at least some of the elements for the field you want to cluster by. This could be a field like "Organization" that stores the organization(s) each person works for, or it may be another field like:

* Skills
* Region
* Initiative
* Sector

Here's a quick look at a sample map before clustering has been activated:

<img src="/images/cluster-civic-1.png" alt="Civic Canopy without clusters" class="plain">

## Activating clusters

Once you have data that you want to cluster by, click on the settings icon on the right side of the map. Choose "cluster" and this will open a pane in the sidebar with checkboxes for each field. Simply check the box for each field you want to cluster by. You can cluster by as many fields as you'd like.

Let's say we check "Collective Impact-ish Initiative". You'll now see the various initiatives drawn as elements and connected to the people who are involved in each initiative.

<img src="/images/cluster-civic-2.png" alt="Civic Canopy clustered by collective impact initiative" class="plain">

## Saving clusters

If you save the changes to the view while you have fields checked for clustering, those fields will be clustered automatically anytime someone loads the map with that view active.

## Limiting which fields can be clustered

If you'd like to hide certain fields from showing up in the clustering menu, use the field settings to disable clustering.

![clustering menu](/images/clustering-menu.jpg)

If you want to disable any of the core fields (label, description, tags or type), you'll need to use the field settings within the main menu.

![advanced settings clustering menu](/images/clustering-menu-advanced.png)

You can access this using the menu in the upper left corner of your map and then choosing "fields". From there, click the core field you'd like to edit.

## Advanced Clustering
You can also activate clustering automatically within a perspective and further customize the behavior by using the <code>cluster</code> setting within the <code>@settings</code> block. Here's the basic format:

```
@settings {
 cluster: "selector" by "field" as "type";
}
```

Both <code>selector</code> and <code>type</code> are optional, and multiple clusters can be added by separating them with a comma.  If you just include a field name then clustering will behave identical to the cluster form in the basic editor.

The <code>selector</code> determines which elements to cluster, <code>field</code> determines what to cluster by, and <code>type</code> overrides the element type assigned to the new elements. By default we use the singular form of the field name as the type for both the elements and connections that are created.

### Why would I want to customize the type?

Customizing the type is great when you want to cross-match multiple fields, such as "Skills needed" and "Skills offered". In that case, you're probably looking to see the overlap between who's looking to learn a skill and who might be able to teach it. If you use the cluster form to do this you'll get two separate elements for each skill (one for the offer and one for the need).  Ideally we want to have a single element for each skill and color the connections by whether it's something the person might be able to teach or if they're interested in learning that skill.

To customize the type, just add <code>as &lt;type&gt;</code> to your cluster declaration:

```
@settings {
 cluster: "Skills needed" as "Skill", "Skills offered" as "Skill";
}
```

You can then add the relevant decorations to your perspective to color the connection types and see who you could connect to build learning pairs.

### How to restrict clustering to a subset of elements

Say you're looking to cluster by "tags" but only want to activate clustering for the people in your map. Just add <code>&lt;selector&gt; by</code> to the beginning of the rule (you can replace "person" with any selector):

```
@settings {
 cluster: person by "tags";
}
```

<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/guides/clustering.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
