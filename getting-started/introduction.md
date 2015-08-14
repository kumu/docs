# Introduction

This is initial content.

## Getting to know the user interface

**The Map.** The right side of your screen is the map. Elements are the circles you see on the map and connections are the lines between the elements. To select either of them, simply click on the circle or the line. In the lower right corner of the map you'll find a cloud icon (<i class="fa fa-cloud"></i>) that can be used to import data to your account. You can also drag and drop files directly onto your map to import them.

**The Sidebar.** The left side of your screen is the sidebar. When nothing is selected, the sidebar displays either the *map overview* or the active *perspective* settings (you can toggle between the two in the upper right corner of the sidebar). If you click on any element, connection or loop, the left side of your screen will display the *profile* for whatever you've selected. If you want to hide the sidebar, simply click the three vertical dots (<i class="fa fa-ellipsis-v"></i>) off to the middle right side of the sidebar.

**The Toolbar.** At the bottom of the map you'll find the toolbar. Use the toolbar to pin elements in place, add direction to connections, access the main menu, and much more. Here's what each of the icons does:

<table>
  <tbody>
    <tr><td class="icon"><i class="fa fa-th"></td><td> Access the main menu</td></tr>
    <tr><td class="icon"><i class="fa fa-map-marker"></td><td>Pin elements in place so they don't float</td></tr>
    <tr><td class="icon"><i class="fa fa-random"></td><td>Change the direction of connections (or add/remove the arrow)</td></tr>
    <tr><td class="icon"><i class="fa fa-warning"></td><td>Add delays to connections</td></tr>
    <tr><td class="icon"><i class="fa fa-trash-o"></td><td>Move the selected item to the trash</td></tr>
    <tr><td class="icon"><i></td><td>Cluster</td></tr>
    <tr><td class="icon"><i class="fa fa-tint"></td><td>Decorate</td></tr>
    <tr><td class="icon"><i class="fa fa-filter"></td><td>Filter</td></tr>
    <tr><td class="icon"><i class="fa fa-crosshairs"></td><td>Focus</td></tr>
    <tr><td class="icon"><i class="fa fa-ellipsis-h"></td><td>Access additional settings</td></tr>
  </tbody>
</table>

**Map Navigation.** You'll find a number of other controls in the upper right corner of your map that allow you to zoom in and out, zoom fit, share your map (including present mode, screenshots, embeds, and exporting), access help, and change default map settings.

<!--
### Main menu (<i class="fa fa-th"></i>)

Use this menu to quickly change between maps and perspectices or switch between projects. You'll also find links to manage attributes, members, rename a project, and delete a project.

### Pin (<i class="fa fa-map-marker"></i>)

Pinning allows you to add a fix the position of the element on the map. You can pin individual elements by selecting the element and then clicking the pin button. You can also select mutiple elements (or all of the elements by hitting the ***a*** keystroke) and then click the pin button to pin multiple elements at once.

### Direction (<i class="fa fa-random"></i>)

Connections can be directed, undirected, or mutual (arrows both ways). Select a connection and then click the direction button to choose between the options. You also have an option to switch directions when the connection is directed.

### Delay (<i class="fa fa-warning"></i>)

Delays are used in system maps (especially causal loop diagrams) to signify a time delay between two factors. A delay shows up as two perpendicular lines on a connection and can be added by selecting a connection and then clicking the delay button.

### Delete (<i class="fa fa-trash-o"></i>)

Elements, connections and loops can be deleted by selecting it and then clicking the delete button (or by clicking delete on your keyboard). When elements are deleted, they are initially moved into a "trash can" and can later be permanently deleted by emptying the trash can.

### Cluster

Clustering is a powerful way to connect elements based on data stored in the profile. To learn more, read our [Clustering Guide](/guides/clustering.html). To activate clustering, click the cluster button and then choose the attribute you want to cluster by. You can then choose to permanently save a cluster by clicking "save" or remove the cluster by clicking "cancel." If you refresh the page any unsaved clusters will be removed.

### Decorate (<i class="fa fa-tint"></i>)

The decorate button allows you to quickly add decorations to your map. To learn more, read [Decorating Your Map](/basics/decorations.html).

### Filter (<i class="fa fa-filter"></i>)

The filter button allows you to change which element and connection types are visible by choosing which to display. Keep all the options checked to have all types displayed or uncheck specific types to hide only those entities with the given type. The undefined option allows you to show and hide entities which do not have any type assigned.

### Focus (<i class="fa fa-crosshairs"></i>)

Focus allows you to show only a certain part of your map. Click on an element and then click the focus button and you'll be presented with the following options:

* **Selected** - Hide all but the specific element
* **Direct (1 degree)** - Display the specific element and one step out
* **Indirect (2 degrees)** - Display the specific element and two steps out
* **Extended (3 degrees)** - Display the specific element and three steps out

We've also wrapped the focus behavior into your navigation of the map by allowing you to click and hold on a specific element to activate the direct focus. Below are the primary actions for activating focus using a long click:

<dl>
<dt>Click and hold an element without focus activated</dt>
<dd>Activates direct focus for the specified element</dd>
<dt>Click and hold another element when focus is already activated</dt>
<dd>Adds the selected element to the given focus, allowing you to expand outward</dd>
<dt>Click and hold on the map background</dt>
 <dd>Deactivates the focus</dd>
 </dl>
-->

## Working with maps

We offer a number of different ways to add content to your map:

**Using the add buttons.** Adding an element is as simple as clicking the blue "Add Element" button in the upper left of the map. Type the name of the element you want to add and then hit enter. To add a connection, select the element you want to connect from first and then click the "Add Connection" button. Type the name of the element you want to connect to and then hit enter. If the element you are trying to connect to doesn't exist yet, Kumu will create the element for you first and then create the connection to it.

<img src="/images/add-element-button.png" class="border" alt="add element button">

**Using keyboard shortcuts** You can also add an element by hitting the "e" key on your keyboard, typing the name of the element, and then hitting enter. The shortcut for adding connections is the "c" key.

**Alt + click to add elements.** To add elements to the map and have them pinned by default, hold alt and then click on the map where you'd like the element to be placed. You'll be prompted to add a label and then the element will be created, pinned in the place you clicked. When building a system map, this is usually the best method for creating your map.

**Alt + drag to connect** You can use alt + drag to connect two elements that already exist. Hold alt and then click and drag from one element to another. Let go when your cursor is hovering over the element you wish to connect to. You can also add a new element and connect to it using this method by holding alt and then clicking and dragging to a blank part of the map. When you release, a new element will be created in that spot with a connection to it. The new element will inherit the pin state of the existing element (if the element you are connecting from is pinned, the new element will be pinned and vice versa).

<p class="alert alert-success">
  <strong>Alt is your friend!</strong> Use this shortcut and build maps much faster.
</p>

**Importing data.** Click the cloud icon in the lower right corner to import data.

## Building out profiles

(attributes, markdown, widgets)

## Styling your maps

(perspectives / settings)


Kumu makes it easy to create decorations that allow you to tell powerful stories through your maps. We're all for democratizing the ability of people everywhere to create great maps so many of the decorations can be added without any knowledge of HTML or CSS. But if you're comfortable with CSS, we've got [even more powerful decorations](/references/css-property-reference.html) for you to take advantage of.

### Decorating elements

Kumu allows you to decorate individual elements or use data stored on the profile of an element to create a decoration rule that will apply to all elements that share the same data. For example, you could just decorate the elements "Jack" and "Jane" or you could use the fact that Jack and Jane both have the element type "people" to decorate them. The benefit of the latter approach is once you add "Judy" (who also has type "person"), she will also inherit the same decoration.

Decorations are stored within [perspectives](/guides/perspectives.html) which offer a lot of flexibility and depth in creating multiple views of your map. For now we'll focus just on adding decorations.

#### Step 1: <i class="fa fa-tint"></i> Click the decorate button

If you are looking to decorate a specific element, select the element and then click on the decorate button (<i class="fa fa-tint"></i>) in the toolbar. If you have multiple items selected, Kumu will automatically find out what the matching attributes are across the selection and allow you to use this data to create your decoration rule.

#### Step 2: Build your selector

You'll find yourself within a modal for creating your decoration.

![Decorate](/images/decorate-2.png)

The first dropdown presents you with four options (depending on whether you had elements selected when you clicked the decorate button):

* Decorate **all** elements
* Decorate **selected** elements
* Decorate **similar** elements (by attribute)
* Build a **custom** selector

For this example, we'll select the last option to "Build a **custom** selector" in order to color all elements with type = people.

The first dropdown on the left is used to select which attribute you'd like to use for the decoration. We'll select "element type." The middle dropdown is used for the selector operation and can be one of the following:

* is
* isn't
* contains
* is less than
* is greater than
* has any value
* is unknown

We'll select "is" and then use the text entry area on the right to type "People" as the element type we want to decorate. You'll notice that Kumu will suggest values for any attribute which has prompt set to "autocomplete."

#### Step 3: Choose your decorations
In this step you get to create the decorations that will apply to your selection in Step 2. You have a number of options available to you for decorating elements that we've split into three tabs

* Change size
* Change color
* Add image
* Add bullseye
* Add shadow

We'll keep it simple and toggle the "Change color" checkbox and then choose the option to set a fixed element color. Click the box to the right of the color label and then choose the color you'd like to use. You can also type your own color name or hex color value but we recommend sticking with one of our defined color palettes to improve the look and feel of your map.

#### Step 4: Add a label (or not)

The last step is deciding whether to add a label for the decoration. If you add a label, the decoration and label will appear on a legend in the lower left corner of your map. If you leave the label blank, the decoration won't be included in the legend.

Click save and then you're done!


### Decorating connections

Decorating connections is quite similar to decorating elements.

#### Step 1: <i class="fa fa-tint"></i> Click the decorate button

If you are looking to decorate a specific connection, select the connection and then click on the decorate button (<i class="fa fa-tint"></i>) in the toolbar. If you have multiple items selected, Kumu will automatically find out what the matching attributes are across the selection and allow you to use this data to create your decoration rule.

#### Step 2: Build your selector

You'll find yourself within a modal for creating your decoration.

![Decorate](/images/decorate-connection.png)

You'll find yourself within a modal that has three sections on the left hand side: Select, Decorate, and Label. The first dropdown presents you with four options (depending on whether you had connections selected when you clicked the decorate button):

* Decorate **all** connections
* Decorate **selected** connections
* Decorate **similar** connections (by attribute)
* Build a **custom** selector

For this example, we'll select the last option to "Build a **custom** selector" in order to change the width of connections which are tagged influential.

The first dropdown on the left is used to select which attribute you'd like to use for the decoration. We'll select "tags." The middle dropdown is used for the selector operation and can be one of the following:

* is
* isn't
* contains
* is less than
* is greater than
* has any value
* is unknown

For tags, you need to select "contains." Use the text entry area on the right to type "Influential" as the tag you want to decorate. Click "next" and proceed to step 3.

#### Step 3: Choose your decorations

The following decorations are available for connections:

* Change size
* Change color

In this example we'll select the first option "Change size" and drag the slider to the right (a value of around 5 works well).

#### Step 4: Add a label (or not)

The last step is deciding whether to add a label for the decoration. If you add a label, the decoration and label will appear on a legend in the lower left corner of your map. If you leave the label blank, the decoration won't be included in the legend.

Click save and then you're done!


## Keeping things comprehensible

(focus / filter)

## Collaborating with teammates

(public vs private, inviting members, conflicts)

## Sharing your work

(presentations)

## Advanced features

(clustering, metrics)

## Project administration
