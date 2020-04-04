# What are loops?

In Kumu, the three basic items you can create are **elements**, **connections**, and **loops**.

Visually speaking, elements are circles, connections are lines between the elements, and loops are groups of two or more connections.

![Elements, connections, and loops](/images/elements-connections-loops-bold.png)

Loops show up on the map as a text label, and the default position of that label is in the middle of all the connections that are part of the group.

You can use these visual tools in all kinds of different ways, but here are some common uses that we see:

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


## Creating a loop

To create a loop, you can click the green <i class="fa fa-plus"></i> button at the bottom of your map and select "Add loop". Then, click on the connections you want to include in the loop, then add a descriptive loop label below and press `enter` on your keyboard.

If you want to edit a loop, click on the loop's label to open its [profile](/guides/profiles.html) in the left side panel. In the bottom right corner of the profile, click the pencil icon <i class="fa fa-pencil"></i> to select and de-select connections that are a part of the loop.


## Identifying loops in systems

Colloquially, you can use the word “loop” to describe any kind of line that curves around in a circle or an oval. When you’re mapping systems in Kumu, you’ll find many groups of connections that meet that definition, but they aren’t necessarily the loops that a system mapper is looking for.

In a system map, a great litmus test for discovering loops is to ask the question, “If I follow the arrows in this group of connections, can I get trapped?” If the answer is yes, you’ve found a loop! 

If not, the structure is not a loop, but might still be complex enough to deserve some further study.

Here’s an example of a structure that looks like a loop, but is not, because no matter which arrow you follow, you always end up at the same factor, escaping the trap:

![not a loop](https://miro.medium.com/max/4992/1*noatmnqxsIbLdQx3FtM-BA.png)

On the other hand, if you reverse just one of the arrows in the structure, you inevitably get trapped going around and around in a circle:

![this is a system loop](https://miro.medium.com/max/5020/1*KtuXkBbRz3KVUD9zPePAwQ.png)

_This_ is the kind of loop you’re looking for in a system map.

It’s rarely so simple—in many cases, your loops will contain more than three connections, and they likely won’t be laid out in such a nice, circular shape. You'll also have the rest of the elements and connections in the map contending for your attention.

But there's one other tip that can be helpful in those more complicated cases! Notice in the screenshot above that every element has at least one incoming and one outgoing connection. In all loops, this is a basic requirement, so if you can filter out elements that don't meet the requirement, it can help you focus on what counts.

Here's how you can set up that filter in Kumu:
1. Use [Metrics](/guides/metrics.html) to calculate **indegree** and **outdegree**.
2. Use [filtering](/guides/filter.html) to hide the elements that have indegree and outdegree both equal to `0`. You can use filter settings in the Basic Editor to do this, or just copy/paste the following code at the bottom of your Advanced Editor:

```
@settings {
  ignore: element[indegree = "0"][outdegree = "0"];
}
```

There's no guarantee that you'll find loops among the remaining elements and connections, but you'll at least narrow down the portion of the system that you need to carefully study.


## Decorating loops

Once you've identified your loops, you might want to customize how they look! One common thing to change is your loops' font size. This can be done in the Advanced Editor, like so:

```
loop {
  font-size: 40; // Replace with any number
}
```

This code will change the font size for all loops. If you just want to change the size for a specific loop, you can use a [selector](/guides/selectors.html). Here's an example that selects by label to decorate one loop:

```
// replace My Specific Loop with the label of your loop
loop[Label = "My Specific Loop"] {
  font-size: 40;
}
```

Less common, but still useful, is to categorize loops with types like Vicious, Virtuous, Stagnating, and Stabilizing, then color-code by those loop types. If you add those types to the Loop Type field (under the Label in the profile), you can use this code to color code automatically:

```
loop {
  font-color: categorize("Loop Type", olympic)
}
```

You can replace `olympic` with the name of any of our [color palettes](/guides/color-reference.html).





<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/faq/what-are-loops.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
