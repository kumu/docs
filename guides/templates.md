# Templates

When creating a new map, you have the option of picking one of our templates.

Templates provide an easy way to have a great looking map right from the start. Simply choose the template that best fits your use case and we'll add the proper decorations, adjust default settings, and even bootstrap the project with relevant fields.

{% hint style="info" %}
**Note:**&#x20;

* You can [change a map's template](templates.md#switching-templates) at any point, so you're never stuck with your first choice!&#x20;
* You can use different templates for [each map within the same project](../overview/map-editor.md). This is useful when you'd like to visualize your data in multiple ways.
{% endhint %}

**Jump to:**

* [Systems template](templates.md#systems-template)
* [Causal loop template](templates.md#causal-loop-template)
* [Stakeholder template](templates.md#stakeholder-template)
* [Big Data Template](templates.md#big-data-template)
* [Stock and Flow template](templates.md#stock-and-flow-template)
* [Geo template](templates/geo.md)
* [Systems Leverage template](templates.md#systems-leverage-template)
* [Custom template](templates.md#custom-template)

## Systems Template

Systems maps help you make sense of complex issues by visualizing the underlying webs of cause and effect. The systems template has a manual layout, meaning that you can manually drag and drop your elements anywhere on the map.

By default, the systems template changes the style of opposite connections from "solid" to "dashed", and adds a legend entry called "Opposite" (follow [this guide](../faq/how-do-i-remove-opposite.md) to learn how to take that away).

{% embed url="https://player.vimeo.com/video/120851694" %}

## Causal loop template

This is a simplified version of our systems template, which draws each factor as text-only instead of including a shape. Great for capturing the basic structure of a system, or to create a mind map.

## Stakeholder Template

Stakeholder maps help you explore the people, projects, groups and organizations involved, and how they're connected, in a visually engaging way. The stakeholder template uses a [force-directed layout](layouts/force-directed.md), meaning that elements "float" around the map (follow [this guide](../faq/how-do-keep-elements-from-moving.md) to learn how to turn that off.)

The stakeholder template has two default Element Types in the legend, namely "Person" and "Organization" (learn how to delete these from your legend [here](legends.md#removing-legend-entries)).

{% embed url="https://player.vimeo.com/video/120964653" %}

## Big Data Template

The big data template is tuned for performance with datasets of greater than a few thousand elements or connections. You won't have access to all the decorations in other templates, but you'll be able to support much larger maps. The big data template uses the dark layout by default (visit the [default view settings](default-view-settings.md) to change that under "Themes").

The big data template is great for large networks, Social Network Analysis (SNA), network science, or Graph Theory.

_Note: the big data template was formerly known as the SNA (Social Network Analyis) template_

{% embed url="https://player.vimeo.com/video/120999753" %}

## Stock and Flow Template

The stock and flow diagram is a common tool in system dynamics. These diagrams contain "stocks" which are quantities of a certain factor, and "flows" which describe changes in stock quantities over time. The stock and flow template uses a manual layout, meaning that you can drag and drop the elements to any place on the map.

The stock and flow template offers numerous default legend entries that help you visualize the flows in your map, such as "Stock", "Flow", "Variable", "Source", "Sink" etc. (learn how to delete these from your legend [here](legends.md#removing-legend-entries)).

**How to use**\
To use the stock & flow template, first create your elements and connections. Once the basic structure of your stock & flow diagram is in place, click on each entity and edit the element type in the profile (below the label) to the pre-defined options, e.g. "stock", "flow", "variable" etc. Choosing one of the options will automatically update the visual of your stock & flow map.&#x20;



<figure><img src="../.gitbook/assets/Screenshot 2024-09-12 at 3.16.46 PM.png" alt=""><figcaption></figcaption></figure>

## Geo Template

The geo template lets you build your visualizations on top of geographic maps. When you’re using the geo template, Kumu will automatically position your elements on a world map, using latitude & longitude, addresses, or even just cities and countries. Visit [this guide](templates/geo.md) to learn more about the geo template.

## Systems Leverage Template

Build a systems map on a radar to capture two additional dimensions: leverage and severity. Or be adventurous and explore alternative dimensions of your own. Learn more about the systems leverage template in [this post](https://blog.kumu.io/introducing-radar-plots-b46fc4c6e61e).

## Custom Template

The customer template allows you to start from scratch: without any default decorations or settings. This is the best option for those that are already familiar with Kumu and don't want any default settings interfering with their map-building.

## Switching templates

If you tested out one template, but realized it wasn't right for your project, don't worry—switching to a different template just takes a few clicks!

Click the settings icon ![](../icons/sliders-h.svg) on the right side of your map to open the Basic Editor. Then, select **Customize defaults** from the list. In the menu that appears, scroll down to the **General settings** section.

In that section, you can use the Template dropdown menu to select a different template. Move back to the main Basic Editor panel, then click **SAVE** to finish the process.

If you've applied a few different templates to test them out, you probably have leftover field values (especially Element Type values) that you aren't using and want to delete. To solve that problem, check out our guide on [deleting field values](fields.md#deleting-field-values).
