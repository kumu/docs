# Kumu's architecture

We've designed Kumu from the ground up to be a powerful, flexible mapping machine, capable of mapping complexity of all kinds. Through that process, we've settled on a specific **architecture**—a way of organizing and visualizing data and information—that makes it possible to create many different kinds of maps.

System maps, network maps, stakeholder/actor maps, community and asset maps, mind maps, concept maps...the list goes on!

In this guide, we'll explain each of the building blocks that make up Kumu's architecture. Take 10 minutes to read through and learn the difference between each building block—it will be really helpful in the long run!

<p><iframe width="560" height="315" src="https://www.youtube.com/embed/VzNdrLLlJIU" frameborder="0" allowfullscreen></iframe></p>

#### Jump to a section
- [Elements, connections, and loops](#elements-connections-and-loops)
- [Fields](#fields)
- [Views](#views)
- [Maps](#maps)
- [Projects](#projects)
- [Trash](#trash)


## Elements, connections, and loops

In Kumu, you can use **elements**, **connections**, and **loops** to represent your system or network. Visually speaking, elements are circles, connections are lines between the elements, and loops are groups of two or more connections.

![Elements, connections, and loops](/images/elements-connections-loops-bold.png)

You can use these visual components in all kinds of different ways, but here are some common uses that we see:

<table class="table borderless">
<tbody>
  <tr>
    <th>Elements</th>
    <th>Connections</th>
    <th>Loops</th>
  </tr>
  <tr>
    <td>Factors in a system (causes and effects)</td>
    <td>Cause-and-effect relationships</td>
    <td>Causal loops</td>
  </tr>
  <tr>
    <td>Stocks</td>
    <td>Flows</td>
    <td>Sub-systems</td>
  </tr>
  <tr>
    <td>Decisions, chances, and ends in a decision tree</td>
    <td>Paths along the decision tree</td>
    <td>Multi-part decisions</td>
  </tr>
  <tr>
    <td>Steps in a process</td>
    <td>Paths from one step to the next</td>
    <td>Sub-processes</td>
  </tr>
  <tr>
    <td>People</td>
    <td>Interpersonal relationships</td>
    <td>Sub-networks or communities</td>
  </tr>
  <tr>
    <td>People &amp; organizations</td>
    <td>Connect people to the organizations they're affiliated with</td>
    <td>Sub-networks or communities</td>
  </tr>
  <tr>
    <td>Authors &amp; books/articles they've co-authored</td>
    <td>Connect authors to their books/articles</td>
    <td>Sub-networks or communities</td>
  </tr>
  <tr>
    <td>Stakeholders &amp; areas of interest</td>
    <td>Connect stakeholders to the areas they're interested in</td>
    <td>Sub-networks or communities</td>
  </tr>
  <tr>
    <td>Funders, non-profits, and population groups</td>
    <td>Connect funders to non-proftis, and connect non-profits to the populations they serve</td>
    <td>Sub-networks or communities</td>
  </tr>
  <tr>
    <td>Companies and sectors/industries</td>
    <td>Connect companies to their sectors/industries</td>
    <td>Sub-networks or communities</td>
  </tr>
</tbody>
</table>

For instructions on how to create elements, connections, and loops in Kumu, check out the [Building your first map](/getting-started/first-steps.html#build-your-first-map) section of our First Steps guide.

## Fields

Each element, connection, and loop can hold additional rich information about the item. This information is stored in **fields**, which have two components: a name, and a value.

The most basic field is named "Label". Any value you add to an element's or loop's "Label" field will be displayed as a text label underneath or on top of that element or loop. (Connection labels are hidden by default, but it's possible to show those labels as well). In addition to "Label", there are three other pre-named fields:
1. **Type** — a field designed to help you separate your items into categories. For example, you elements might have "Person" or "Organization" in their type field, to clarify what the element represents.
1. **Description** — a field designed to hold longer descriptions of an item. Descriptions can include multiple paragraphs, and even images and videos.
1. **Tags** - a field designed to hold multiple values that each describe your item in a different way. For example, a connection between a person and a non-profit might have "Strong relationship", "Board Member", "Donor", and "Advocate" all stored as separate values in the Tags field, adding rich detail to the person's relationship with the organization.

Beyond those four pre-named fields, you can create as many custom fields as you want—you can have a "Website" field, a "Net Assets" field, a "What do you want to learn?" field, etc. Fields can be created and edited using [profiles](/guides/profiles.html):

![profile](/images/introduction-profile.png)

For more information on fields and how to create and customize them, [check out our full guide on fields](/guides/fields.html).


## Views

A **view** is a collection of rules that affect the visual appearance of your elements, connections, and loops.

There are a lot of different kinds of rules that you can create. For example:

<table class="table borderless table-striped">
    <tr>
        <td>All elements with "Person" in their Type field should be colored blue.</td>
    </tr>
    <tr>
        <td>All connections with "Very Weak" in their Tags field should be filtered out (temporarily hidden).</td>
    </tr>
    <tr>
        <td>Connections should be drawn between all the people who have the value "Finance" in a field named "What do you want to learn?".</td>
    </tr>
</table>

Note that these rules are not tied to specific elements, connections, or loops, but instead are designed to act on groups of items, based on data and information inside of them—the rules in your views are all **data-driven**. Whether you have ten, one-hundred, or even one-thousand elements, the first rule from the list above is going to find _every single element_ with "Person" in the Type field and color it blue.

It gets better! Let's say you add some elements and connections to Kumu and apply a few rules, just so you can build a prototype visualization with the data you have on hand. Then, you decide that the prototype looks good, so you load in your full dataset, adding tens or hundreds more elements and connections to the visualization. Good news: **your view rules will apply to all the new items**. No need to re-create every rule from your prototype!

All view rules are completely scaleable—Kumu will apply them to any and all new data you add, whether you're adding new elements, connections, and loops, or just adding new values to your fields.

To learn more about building views and creating specific types of rules, check out the guides below. There's a lot to learn about views! But don't feel like you need to learn it all at once. You can get a lot of value out of Kumu without knowing all this information, but this is a great place to return to when you feel ready to take your Kumu skills to the next level.

<table class="table borderless">
    <tr>
        <th>Guide</th>
        <th>Main idea</th>
    </tr>
    <tr>
        <td><a href="/overview/view-editors.html">View editors</a></td>
        <td>Learn your way around the user interfaces that allow you to edit views.</td>
    </tr>
    <tr>
        <td><a href="/guides/decorate.html">Decorate</a></td>
        <td>Change visual appearance of items (color, size, pattern, shadow, image, etc.).</td>
    </tr>
    <tr>
        <td><a href="/guides/filter.html">Filter</a></td>
        <td>Temporarily show or hide items.</td>
    </tr>
    <tr>
        <td><a href="/guides/showcase.html">Showcase</a></td>
        <td>Make certain items translucent, fading them subtly into the background.</td>
    </tr>
    <tr>
        <td><a href="/guides/focus.html">Focus</a></td>
        <td>Focus on a single element, hiding everything else. Then, expand outward to reveal more elements and connections, step-by-step.</td>
    </tr>
    <tr>
        <td><a href="/guides/clustering.html">Cluster</a></td>
        <td>Connect elements automatically, based on the information in their fields.</td>
    </tr>
    <tr>
        <td><a href="/guides/bridge.html">Bridge</a></td>
        <td>Connect elements based on their "mutual friends" (elements they're both connected to).</td>
    </tr>
    <tr>
        <td><a href="/guides/imported-views.html">Imported views</a></td>
        <td>Import rules from another view, so that you don't have to re-build them.</td>
    </tr>
    <tr>
        <td><a href="/guides/controls.html">Controls</a></td>
        <td>Customize the way people interact with your map.</td>
    </tr>
    <tr>
        <td><a href="/guides/layouts.html">Layouts</a></td>
        <td>Change the way Kumu positions your elements.</td>
    </tr>
</table>


## Maps

In Kumu, a **map** is a collection of elements, connections, and loops—each map can remember a full list of which elements, connections, and loops should be included.

In addition, a map can remember specific positions for all of its elements, and it can remember the positions of any labels that represent loops.

A map can also remember a few default settings:
- **Default view** — the view whose rules will be applied to the map by default.
- **Default element behavior** — tells the map whether new elements should stay in a fixed position by default, or float around, relying on their connections to pull them into a final position
- **Default connection direction** — tells the map whether new connections should be "Directed" (arrow on one end), "Undirected" (no arrows), or "Mutual" (arrows on both ends) by default

Finally, a map can remember a rich description about itself, called a "Map Overview", which Kumu displays next to the map so your audience can read it:

![map overview with video](/images/map-overview-with-video.png)

For more info on how to build the basic structure of your map, check out our [full guide on the map editor](/overview/map-editor.html).

## Projects

**Projects** are the top level of Kumu's architecture. Think of projects as a "buckets" that contain everything defined above: elements, connections, loops, fields, views, and maps.

There's an important distinction to be made between a map and a project: the project contains the master list of elements, connections, and loops, and the map simply borrows a collection of data from that list. If you edit an element, connection, or loop while working on a map, you're not just editing the map—you're actually editing the project's master list.

If you ever find yourself creating multiple maps within one project, it's very important to remember that concept, because when you move or edit an item (for example, change an element's Label, Type, or any other field value) those changes will be applied to **every other map** that is borrowing the same item from the project's master list.

If you only have one map in your project, don't sweat this detail!

Projects can also remember a few more important things:
- The project's privacy level (public or private)
- Any [presentations](/guides/presentations.html) you have created to share your work
- Any [contributors](/overview/collaboration.html) that can edit your project
- Any [add-ons](/guides/add-ons.html) that have been installed on the project
- Any [license](/guides/licensing.html) you have added, to tell people how they can or cannot share or re-use your work

You create new projects and see all your existing projects on your [dashboard](/overview/dashboard.html).


## Trash

Last but not least, Kumu's architecture includes the **trash**.

The trash is a list of all the elements, connections, and loops that, once upon a time, were the the lifeblood of your system map, the all-powerful hubs of your network map, the social-media-savvy influencers of your stakeholder map...until you realized that the data was totally inaccurate, imprecise, full of typos (_\*gasp\*_), or duplicated (_\*shudder\*_), and deleted it using the [little trash can icon](/overview/map-editor.html#side-panel) <i class="fa fa-trash">  </i>.

All prose aside, the trash is where your project stores the items that have been deleted from every single map. From time to time, you may want to [follow this guide](/faq/how-do-i-delete-data-from-my-project.html) to empty it out!

But, we should give credit where credit is due: the trash is your last line of defense against accidentally deleting data (a.k.a. hard work, time, and effort) from your project. If you ever think that you've deleted something accidentally, and you need to recover it from the trash, just [ask for help](/about/where-can-i-get-help.html), and the Kumu team and community will find a solution.


<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/overview/kumus-architecture.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
