# Clustering

Clustering is a powerful tool that allows you to connect elements based on the data in their [fields](/guides/fields.html), and it's particularly useful on stakeholder and network maps.

When clustering is activated, Kumu will create new elements to represent each possible value for a field of your choice, and it will draw a connection between your elements and the value(s) in their field.

Here's a visual example—musical artists clustered by their genre:

![cluster by element type](/images/artists-clustered-by-genre.png)


This guide will make you an expert on clustering, one of Kumu's most unique and powerful tools!

<p class="alert alert-info">
Before you start: <a class="alert-link" href="/guides/fields.html">use fields</a> to add additional information to your elements, connections, and loops.
</p>


## Why is clustering valuable?

There are hidden relationships in much of the data you have stored in spreadsheets; they're just not stored explicitly as connections. For example, you probably have a spreadsheet full of contacts, with one column storing the person's name and another column storing the organization she works for. If you imported this directly into Kumu, you'd end up with a map like this:

<img src="/images/cluster-before-final.png" alt="Elements with no relationships">

Not that eye opening, right? You could click on each element to open its profile, allowing you to see each person's organization, but it would take you a long time to gain any insight into your data.

If you **cluster** these people by their organizations, you can start to get a better understanding of your network:

<img src="/images/cluster-after-final.png" alt="Elements with relationships">

*Voila!* We used clustering to transform a rigid spreadsheet into a relationship map of all the people and organizations they work for.


## Cluster in the Basic Editor

To set up your first cluster, click the Settings icon <i class="fa fa-sliders"></i> on the right side of the map to open the Basic Editor, and use the dropdown next to **Connect by** to select a field. Every dataset is unique, but here are some ideas to get you started:

**If your elements are people, cluster by...**
* Tags
* Skills
* Teams
* Interests
* Projects
* Organization
* City

**If your elements are organizations, cluster by...**
* Tags
* Initiatives
* Populations served
* Funding sources
* Board members
* Region
* Sector

If you need to restrict clustering to certain elements, cluster by more than one field, or customize the element type of the elements created by clustering, [learn how to fine-tune your cluster settings](#fine-tune-cluster-settings).


## Cluster in the Advanced Editor

If you prefer working in the Advanced Editor, you can use the `cluster` property in the `@settings` block to activate clustering. Here's the simplest version of the cluster syntax:

```
@settings {
    cluster: "Field";
}
```

Just replace `Field` with the name of any field in your project, and any element with data in that field with be clustered!

If you need to restrict clustering to certain elements, cluster by more than one field, or customize the element type of the elements created by clustering, [learn how to fine-tune your cluster settings](#fine-tune-cluster-settings).


## Fine-tune cluster settings

When you're using the Basic Editor's **Connect by** tool or the simplest version of the Advanced Editor's cluster syntax, cluster settings follow three default rules:

1. All elements on the map will be clustered by the field you chose.
1. You can only cluster by one field.
1. The new elements that get created by clustering will use the name of the cluster field as their element type (for example, if you cluster by "Organization", the created elements will have the element type "Organization").

These default rules often won't cause any problems for your map, but there are some cases where you will want to override them. To do that, you can use either the Basic Editor or Advanced Editor to fine-tune your cluster settings.


### Fine-tune in the Basic Editor

To fine-tune your cluster settings in the Basic Editor, click the settings icon to the right of the **Connect by** tool, and your Basic Editor will show you the **Cluster Settings** menu:

![Cluster basic editor](/images/overview-cluster.png)

Click the **Add rule** button to create a new cluster rule. Then, click next to "Connect" to bring up the Selector Builder, which allows you to narrow the [selection](/guides/selectors.md) of elements that will be clustered.

Click next to "by" to choose which field those elements will be clustered by, and click next to "as" to change the element type that will be assigned to the elements created by clustering. (Wondering when it's useful to fine-tune the element type? [Jump to the explanation](#when-is-it-useful-to-fine-tune-element-type).)

If you want to cluster by more than one field, just click the **Add rule** button and repeat the process!

### Fine-tune in the Advanced Editor

In the Advanced Editor, here's the syntax for fine-tuned clustering:

```
@settings {
 cluster: selector by "Field" as "Type";
}
```

Replace `selector` with any valid [selector](/guides/selectors.md). Replace `Field` with the name of the field you want to cluster by, and replace `Type` with the value that Kumu should set as the element type for each element created by clustering (make sure your `Field` and `Type` are wrapped in double quotes).

(Wondering when it's useful to fine-tune the element type? [Jump to the explanation](#when-is-it-useful-to-fine-tune-element-type).)

Here's an example that clusters all elements with the element type "Person" by their organization. The organizations that are added to the map will have the type "Organization".

```
@settings {
 cluster: person by "Organization" as "Organization";
}
```

Multiple cluster rules can be added by separating them with a comma:

```
@settings {
 cluster: person by "Organization" as "Organization", organization by "Sector" as "Sector";
}
```

### When is it useful to fine-tune element type?

Fine-tuning the element type is useful when you want to make sure that Kumu re-uses existing elements instead of creating new elements through clustering.

When Kumu is about to create a new clustering element, it first searches the entire project for an element with a matching Label and Type. If it finds a match (on any map), it will re-use that element (complete with any Description, Tags, and custom field data as well).

One use case for this feature is cross-matching multiple fields, such as "Skills needed" and "Skills offered". In that case, you're probably looking to see the overlap between who's looking to learn a skill and who might be able to teach it. To start, you would cluster all elements by "Skills offered", then add a second rule to cluster all elements by "Skills needed".

If you don't customize the type of the elements created by this cluster setting, the types will default to "Skills offered" and "Skills needed", and you'll get two separate elements for each skill: one with the type "Skills offered" and the other with the type "Skills needed".

![cluster default types](/images/cluster-default-type.png)

But, if you set the element types to "Skill" for both clustering rules, Kumu will create only one element for each skill value—even though the values originated in different fields.

![cluster customized types](/images/cluster-customized-type.png)


## Limiting which fields can be clustered

If you'd like to hide certain fields from your Cluster Settings dropdown menus, you can click on an element, click on the downward arrow <i class="fa fa-angle-down"></i> next to the field name, and use the field settings to disable clustering:

![clustering menu](/images/clustering-menu.jpg)

If you want to disable clustering on any of the core fields (label, description, tags, or type), you can click the menu icon <i class="fa fa-bars"></i>, click **FIELDS**, select the field you want to disable, and un-check the clustering box in the Advanced Settings:

![advanced settings clustering menu](/images/clustering-menu-advanced.png)


<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/guides/clustering.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
