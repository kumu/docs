# Clustering

Clustering is a powerful tool that allows you to connect elements based on the data in their fields, and it's particularly useful on stakeholder and network maps.

When clustering is activated, Kumu will create new elements to represent each possible value for a field of your choice, and it will draw a connection between your elements and the value(s) in their field.


## Why is clustering valuable?

There are hidden relationships in much of the data you have stored in spreadsheets; they're just not stored explicitly as connections. For example, you probably have a spreadsheet full of contacts, with one column storing the person's name and another column storing the organization she works for. If you imported this directly into Kumu, you'd end up with a map like this:

<img src="/images/cluster-before-final.png" alt="Elements with no relationships">

Not that eye opening, right? You could click on each element to open its profile, allowing you to see each person's organization, but it would take you a long time to gain any insight into your data.

If you **cluster** these people by their organizations, you can start to get a better understanding of your network:

<img src="/images/cluster-after-final.png" alt="Elements with relationships">

*Voila!* We used clustering to transform a rigid spreadsheet into a relationship map of all the people and organizations they work for.


## Activate clustering

To set up your first cluster, click the Settings icon on the right side of the map to open the Basic Editor, and use the dropdown next to **Connect by** to select a field. Every dataset is unique, but here are some ideas to get you started:

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


To add multiple cluster rules, click the settings icon to the right of the **Connect by** tool, and your Basic Editor will show you the **Cluster Settings** menu:

![Cluster basic editor](/images/overview-cluster.png)

Click the **Add rule** button if you want to cluster by more than one field.


## Limiting which fields can be clustered

If you'd like to hide certain fields from your Cluster Settings dropdown menus, you can click on an element, click on the downward arrow <i class="fa fa-angle-down"></i> next to the field name, and use the field settings to disable clustering:

![clustering menu](/images/clustering-menu.jpg)

If you want to disable clustering on any of the core fields (label, description, tags, or type), you can click the menu icon <i class="fa fa-bars"></i>, click **FIELDS**, select the field you want to disable, and un-check the clustering box in the Advanced Settings:

![advanced settings clustering menu](/images/clustering-menu-advanced.png)


## Advanced Clustering

If you prefer working in the Advanced Editor, you can use the `cluster` property in the `@settings` block to activate clustering. Here's the basic syntax:

```
@settings {
 cluster: selector by "Field" as "type";
}
```

Replace `selector` with any valid [selector](/guides/selectors.md). Replace `Field` with the name of the field you want to cluster by (keep the field name enclosed in double quotes), and replace `type` with the value that Kumu should set as the Type for each element and connection created by clustering.

```
@settings {
 cluster: person by "Organization" as "Organization";
}
```

Both the selector and the type are optional. Omitting the selector will cause the clustering rule to be applied to all elements on the map, and omitting the type will cause Kumu to set the elements' types automatically.


Multiple cluster rules can be added by separating them with a comma:

```
@settings {
 cluster: person by "Organization" as "Organization", organization by "Sector" as "Sector";
}
```

### Why would I want to customize the type?

Customizing the type is useful when you want to make sure that Kumu re-uses existing elements instead of creating new elements through clustering.

One use case is cross-matching multiple fields, such as "Skills needed" and "Skills offered". In that case, you're probably looking to see the overlap between who's looking to learn a skill and who might be able to teach it. If you omit the type from your cluster code, you'll get two separate elements for each skill: one with the type "Skills needed" and the other with the type "Skills offered".  But, if you include the type "Skill" as seen below, Kumu will create only one element for each skill value even if the values originated in different fields.

```
@settings {
 cluster: "Skills needed" as "Skill", "Skills offered" as "Skill";
}
```


<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/guides/clustering.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
