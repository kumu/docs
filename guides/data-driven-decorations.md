# Data-driven decorations

When you're visually decorating your maps in Kumu (e.g. color-coding, changing sizes, aligning text, etc.), **data-driven decorations** are usually the most efficient way to do so. However, data-driven decorations is a feature you may not have come across in other graphic tools you've used. This guide will help with the learning curve!

First, a quick definition: data-driven decorations are rules that tell Kumu how to style your map. Those rules accomplish two tasks:
- Tell Kumu which items (i.e. elements, connections, or loops) the rule should apply to.
- Tell Kumu which visual style should be applied to those items.

Here are some examples of rules you could create:

#### All elements should be colored blue.
1. **Which items?** All elements.
2. **Which visual style?** Change color to blue.

#### Elements with "Person" in their Type field should have a green shadow.
1. **Which items?** All elements with "Person" in their Type field.
2. **Which visual style?** Add a green shadow.

#### Connections' thickness should vary based on the number in their "Strength" field.
1. **Which items?** All connections.
2. **Which visual style?** Scale the connection thickness based on its strength.

#### Loops that have something in their "Type" field should be color coded based on that value
1. **Which items?** Only the loops that have something in their "Type" field.
2. **Which visual style?** Assign a color automatically, so that each loop's color corresponds with its type.


Note that these rules are not tied to specific elements, connections, or loops, but instead are designed to act on groups of items, based on data and information inside of their [profiles](/guides/profiles.html)—in other words, the rules are all **data-driven**.

Whether you have ten, one-hundred, or even one-thousand elements, the first rule from the list above is going to find _every single element_ color it blue.

It gets better! Let's say you add some elements and connections to Kumu and apply a few rules, just so you can build a prototype visualization with the data you have on hand. Then, you decide that the prototype looks good, so you load in your full dataset, adding tens or hundreds more elements and connections to the visualization. Good news: **your data-driven rules will automatically apply to all the new items in real time**. No need to re-create every rule from your prototype after you add new data!

All data-driven decorations are completely scaleable—Kumu will apply them to any and all new items you add, whether you're adding new elements, connections, and loops, or just editing the information in their profiles.



<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/data-driven-decorations.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>