# Clustering

Clustering is a powerful tool that allows you to transform profile information into a richly interactive map. It creates an element for each attribute value in the profile and draws a connection from the element to that value.

## A quick example

There are hidden relationships in much of the data you have stored in spreadsheets, they're just not stored as explicity from/to connections. Most of you probably have a spreadsheet full of contacts, with one column storing the person's name and another column storing the organization she works for. If you imported this directly into Kumu, you'd end up with a map like this:

<img src="/images/cluster-before-final.png" alt="Elements with no relationships">

**Not that eye opening, right?** With other tools, if you wanted to see the relationship view you'd have to create a separate connections worksheet pointing each person to the organization they work for and then import both into Kumu.

With clustering, **simply hit the k key** or click the cluster buttom in the bottom toolbar and you'll be prompted with a checklist of all the attributes. In this example, we'd choose **organization.** Click cluster and *voila!* You now have a relational map of all the people and organizations without ever having to do the import workaround.

<img src="/images/cluster-after-final.png" alt="Elements with relationships">

## Choosing what to cluster by

First, make sure that you have information stored in the profiles of some of your elements that you want to cluster. This could be an attribute like "Organization" that stores the organizations each person works for, or it may be other attributes like:

* Skills
* Region
* Initiative
* Sector

Here's a quick look at a sample map before clustering has been activated:

<img src="/images/cluster-civic-1.png" alt="Civic Canopy without clusters" class="plain">

## Activating clusters

Once you have data that you want to cluster by, click on the cluster icon in the toolbar or use the "k" keystroke. This will open a pane in the sidebar that allows you to choose which items you want to cluster. Simply check the box for each attribute you want to cluster by. You can toggle as many on and off as you'd like.

Let's say we choose "Collective Impact-ish Initiative" from the drop down. You'll now see the various initiatives drawn as elements and connected to the people who are involved in each initiative.

<img src="/images/cluster-civic-2.png" alt="Civic Canopy clustered by collective impact initiative" class="plain">

## Toggling or saving clusters

You can easily toggle multiple attribute values on and off by checking and unchecking the relevant boxes. Many times this is the preferred way of using clusters.

If you want to convert the clusters into permanent elements and connections (meaning you always want them as part of your map), you can save them to the current map or to a new one.

<img src="/images/cluster-civic-save.png" alt="saving clusters">

Saving to a new map can be helpful if you'd like to preserve a clustered view without it changing the content on your current map.

Saving clusters can also be helpful as a shortcut to creating connection data in excel. Rather than creating an explicit connections worksheet with from & to columns for people and the organization they work for, you could import a single spreadsheet of those people with a column for organization:

<table style="margin: 20px auto">
<tbody><tr>
<td>Label
</td>
<td>Type
</td>
<td>Organization
</td>
</tr>
<tr>
<td>Jeff
</td>
<td>Person
</td>
<td>Kumu
</td>
</tr>
<tr>
<td>Warren
</td>
<td>Person
</td>
<td>Berkshire Hathaway
</td>
</tr>
<tr>
<td>Reid
</td>
<td>Person
</td>
<td>LinkedIn
</td>
</tr>
</tbody></table>

Simply cluster by organization and then save to your map. Now you have a network of people connected by the organization they work for.

## Advanced Clustering
We've unleashed a ton of power and flexibility for clustering through our perspective engine overhaul. You can now activate clustering automatically within a perspective by using the new <code>cluster</code> setting within the <code>@settings</code> block. Here's the basic format:

```
@settings {
 cluster: "selector" by "attribute" as "type";
}
```

Both <code>selector</code> and <code>type</code> are optional, and multiple clusters can be added by separating them with a comma.  If you just include an attribute name then clustering will behave identical to the existing cluster form.

The <code>selector</code> determines which elements to cluster, <code>attribute</code> determines what to cluster by, and <code>type</code> overrides the element type assigned to the new elements. By default we use the singular form of the attribute name as the type for both the elements and connections that are created.

### Why does this matter?

This is great when you want to cross-match multiple attributes, such as "Skills needed" and "Skills offered". In that case, you're probably looking to see the overlap between who's looking to learn a skill and who might be able to teach it. If you use the cluster form to do this you'll get two separate elements for each skill (one for the offer and one for the need).  Ideally we want to have a single element for each skill and color the connections by whether it's something the person might be able to teach or if they're interested in learning that skill.

### How to customize the type

To customize the type, just add <code>as &lt;type&gt;</code> to your cluster declaration:

```
@settings {
 cluster: "Skills needed" as "Skill", "Skills offered" as "Skill";
}
```

You can then add the relevant decorations to your perspective to color the connection types and see who you could connect to build learning pairs.

### How to restrict clustering to specific types

Say you're looking to cluster by "tags" but only want to activate clustering for the people in your map. Just add <code>&lt;selector&gt; by</code> to the beginning of the rule (you can replace "person" with any selector):

```
@settings {
 cluster: person by "tags";
}
```

<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/guides/clustering.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
