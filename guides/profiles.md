# Profiles

Every element, connection and loop shares a similar profile which you can use to add narrative and any data that is important for you to track. By using [views](/guides/views.html) you can bring any of the information in the profile to life through decorations and filters. We'll look at each of the parts of the profile one by one:

## Label

The label is the name of the element and what shows up on the map. We automatically add a line break when the name becomes too long but if you'd like to include your own line breaks, simply add a double space. This is quite useful when trying to make labels fit within an element circle rather than having the labels show up below the element.

## Type

Type is meant for the broadest categorization of the elements, connections and loops on your map. Each entity can only have one type so keep this in mind when selecting which types you are planning to use. Below are a few common types for elements:

* Person
* Company
* Project
* Sector

### Attention system mappers: Using types for pre and post labels on connections

We've customized the behavior of the type field for connections to allow for creation of pre and post labels that are common in causal loop diagrams. Check out the [systems mapping guide](/guides/system-mapping.html) to learn more.

### Loops

We recommend using the standard "reinforcing" and "balancing" terminology for loop types. You can then later use these types to decorate each loop based on whether it is a reinforcing or a balancing loop.

## Image (optional)

If an image has been added to an element, you'll see it appear in the upper right corner of the profile. To be able to add an image, first create an field labeled "image" and then copy and paste the URL for the given image you'd like to use. It will also show up within the background of the element on the map.

## Description

The description is meant to include a narrative overview of what you are mapping. For a person, this may be a short bio and for a project it may be a quick summary or intended impact. You can add formatting (bold, italics), links to external websites, links within your map and to other maps, images, video and more through markdown. Make sure to read the [Markdown Guide](/guides/markdown.html) to learn all that you can add.

We've also extended Markdown's features by adding a powerful widget framework. Embed videos from YouTube and Vimeo or presentations from SlideShare and Speaker Deck (support for additional platforms on the way). Head over to the [Widget Guide](/guides/widgets.html) to learn how.

## Tags

Tags are meant for storing short pieces of information that don't require the structure and label that come with fields. We recommend using single words without special characters but you are free to use tags as you desire. When you start typing a tag, Kumu will prompt you with other tags that have already been assigned to entities within your project.

## Fields

Fields are a powerful and flexible way to store more structured information for any given element, connection or loop. We recommend reading our [fields section](/basics/fields.html) to learn all that you can do.

## Other Tips

### Try to be selector friendly

Selectors provide a simple way to slice up your data. By keeping your field names and values selector friendly you'll be able to write much shorter queries.

Use single words for your element types, connection types, and tags. By doing so you'll be able to use shorthand selectors such as:
<ul>
      <li><code>person</code> To select all elements with type "Person"</li>
      <li><code>personal-connection</code> To select all connections with type "Personal"</li>
      <li><code>project.priority</code> To select all projects tagged "priority"</li>
</ul>

If you include special characters or multiple words you'll have to use the longhand instead (such as <code>["element type"="Government Sector"]</code>) and that's just not nearly as much fun.

<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/guides/profiles.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
