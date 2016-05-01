# System Mapping

Looking to create engaging system maps with the power to change hearts and minds? You've come to the right place. Kumu enables you to build interactive maps with narratives, links, video and other background for each element, connection, and loop in the map.

<!-- REMEMBER TO ADD NEW SYSTEMS MAPPING VIDEO
{% video %}https://vimeo.com/99685006{% endvideo %}
-->

## Building the basic structure of a map

Kumu allows you to have both fixed and fluid layouts for your map. We recommend having a fixed layout for your system map by pinning each element in place so that you'd don't overwhelm people with a new layout each time they see the map.

The first thing you'll want to do is change the default settings so that elements are fixed by default and connections are directed by default. You can do this by clicking the settings button on the right side of the map:

<span class="small">
![setting defaults](/images/system-sidebar-default.png)
</span>

### Adding elements and connections

The quickest way to add an element and have it pinned in place is to use the **alt** + **click** approach. By using this method, a new element will be created wherever you click on the map. You can quickly add a connection to a new element by holding **alt** and dragging out from the existing element. A new element will be created wherever you let go and you'll be prompted for the new element's label.

You can also use the **alt** + **drag** method to connect two existing elements. Simply follow the same instructions but release on top of an existing element.

If you add elements by clicking the green "+" button and then choosing "add element", the element may be initially floating depending on whether you have changed the default settings as mentioned above. Click on the element and then hit the pin button (<i class="fa fa-map-marker"></i>) to prevent it from moving.

#### Forcing line breaks in entity names

Sometimes our default line break isn't quite right for your map. To add a manual line break, just include a double space in the label of any element, connection or loop and we will treat it as a line break.

### Changing the curvature of connections

Often times you'll want to change the curvature of a connection based on the layout of the map. To do this, just click and drag the connection (close to the middle of the connection). You'll see the curvature changing and once you release, the connection will stay in that position (note this only work for connections where both elements that are part of that connection are pinned in place).

### Setting connection direction

If you've followed our instructions to set connections to default as directed, you're probably all set. But if you need to add/change/remove an arrow, first select the connection and then click the direction button (<i class="fa fa-random"></i>) in the lower right of the profile. If you'd like to make all of the connections in your map directed, use the "a" keystroke to select everything in your map and then click the direction button (<i class="fa fa-random"></i>) followed by the "directed" link.

### Marking connections as same or opposite

If you're looking to indicate whether a connection has a same or opposite causal relationship (does an increase in one factor cause an increase or a decrease in the other), there are a few ways to go about it:

#### Using the connection label
If you're just looking to have "same" or "opposite" show up on the connection as a label, click to select the connection and then add "same" or "opposite" as the label. You can do this by clicking "add label" placeholder in the connection profile. You'll see the text appear on the connection on the map.

#### Using types

Another option is to add "same" or "opposite" as the connection type. By doing this, you can then use that information to decorate the connection. For example, we might use the default connection styling for "same" connections and add a decoration rule that adds a dashed pattern for all "opposite" connections.

To do this, click the settings button on the right side of the map and then choose "decorate". Click "add connection rule" and then use the top area to select for `connection type` `is` `opposite` and then check the "change style" box and choose "dashed":

![](/images/dashed-opposite-connection.png)

Alternatively, you can add the below to the advanced editor for your view and it will have the same effect:

```
opposite-connection {
    pattern: dashed;
}
```

#### Using pre and post labels

Some system mappers like to go even further and include not just whether a connection is same or opposite, but also the "+" and "-" labels on the trailing and leading ends of a connection. We've customized the behavior of the type field for connections to allow for creation of these labels. The table below lists the value to add as the connection type and the corresponding behavior it creates:

Value | Behavior
--- | ---
**+** | adds a "+" to the *trailing* end of the connection
**-** | adds a "-" to the *trailing* end of the connection
**++** | adds a "+" to both ends of the connection
**--**  | adds a "-" to both ends of the connection
**+-** | adds a "+" to the *leading* end and a "-" to the *trailing* end of the connection
**-+** | adds a "-" to the *leading* end and a "+" to the *trailing* end of the connection

<br /><br />
Simply add the value to the "type" field on any connection:

![connection type](/images/systems-connection-type.png)

And we'll automatically add the pre and post labels for you:

![pre and post labels](/images/systems-connection-type-example.png)

### Creating loops

Kumu has built-in support for loops including detailed profiles so you can add narratives and other research to support your map. To create a loop, click the green "+" button and then click on the **connections** you'd like to have as part of your loop. Add a lable for the loop and hit `enter`.

<img src="/images/systems-reinforcing-loop.png" class="plain">

We recommend using a combination of "R" or "B" (for reinforcing and balancing) plus a short label for the dynamic at play (R: Trust in Government) and even a numerical label if that further helps differentiate your loops (R15: Trust in Government).

To edit an existing loop, click on the label and then click the edit icon (<i class="fa fa-pencil"></i>). You can then click connections to add/remove them from the loop. We automatically position the loop label at the center of the connections. You can drag the loop label to another location if you want to reposition it and it will stay fixed in that location.

### Moving loops

Hold alt and drag the loop label to move the entire loop (connections and label) at one time.

## Add narratives and other background information

One of the challenges with current system mapping platforms is that they don't allow for extensive narrative and data to be saved for each element, connection, loop and map. Instead, you're left with a simple graphical map that requires a consultant to explain it to anyone else.

### Narratives

Kumu allows you to add this information easily for any and all levels of your map. Start by using the map overview to add a description of the overall map and key dynamics at play. Then include a narrative for each loop that describes the behavior, both current and historical, and includes links to any supporting research that led to the creation of the loop. For specific elements, provide a quick definition to ensure there isn't confusion. And for connections, include a brief description of why two elements are causally related and any supporting research.

<img src="/images/systems-narrative.png" alt="System map in Kumu" class="plain">


#### Strengthen your narrative using links to elements and loops

Ever gotten lost in someone's description of a system map? Does the first paragraph relate to the top right or the bottom left of the system map? Why can't I find what they are talking about on the map?

Good news! Kumu allows you to create links to elements and loops within your description. When someone hovers their cursor on the link, the map will pan and zoom to that location on the map.

To add these links, either wrap the label in double brackets `[[label]]` or follow the standard markdown link syntax but include a selector for the label. Here's the markdown format:

```
[Link Label](= #your-element-name)
```
Substitute "your-element-name" for the label of the desired element or loop you'd like to link to. Make sure to first remove all special characters from the name and then replace any spaces with dashes (so "Your Element Name!" would become "your-element-name").

### Trends, needed change, and other data

It is often quite helpful to walk a group through the exercise of discussing how a given factor has been trending over time. By saving this information for a given element, you could color an element that has been significnatly decreasing as dark red to have this information jump to life.

Another helpful piece of data is whether a given factor needs to significantly increase, increase, stay the same, decrease, or significantly decrease going forward. By using this data and adding a color scale to the values, you can quickly see where the most change needs to happen in a given map.

Finally, you can even add data like **% complete** to be able to track the status of your implementation efforts as your progress with a systems intervention. The great part about Kumu is you don't need to just pick one of these ways to decorate. Create multiple views and easily switch between different perspectives.

## Creating magazine-ready maps

There are a number of decorations you can add that really make your system map ***pop***. One of these is using larger circles that fit the label within the circle rather than below it. One caution, if you're hoping to size elements by certain data, you probably want to keep the label placement below the element. But if you are using color scales instead, this can be a nice way to create a great looking map.

<img src="/images/systems-magazine-ready.png" alt="Hawaii Quality of Life Map" class="plain">

To make this happen, you'll need to create a view that increases the size of the circle and then changes the label placement. Here is the sample advanced CSS for a recent collaboration with [Hawaii Business Magazine](http://hawaiiqualityoflife.org):

```
element {
  color: #fff;
  font-color: #000;
  font-size: 18;
  size: 75;
  label-placement: center;
  stroke-width: 2;
  stroke-color: #000;
}
```

You can see we've included other decorations including font-color, font-size, and more (you can see the full list [here](/views.md)).

<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/guides/system-mapping.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
