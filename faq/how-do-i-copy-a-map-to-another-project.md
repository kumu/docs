# How do I copy a map to another project?

There's multiple ways to copy a map to another project, or to even merge maps together, depending on what the existing maps look like separately. You can find three options below.

{% hint style="info" %}
To prevent data loss, we always recommend making a backup of your project before you make any changes. Read [how to create a backup here](../guides/import/blueprints.md#project-backups).&#x20;
{% endhint %}

### **1. Copy map to new, empty project**

To copy or transfer a map into a brand new project that has no other content inside of it, you can simply [fork the original project](../guides/forking.md), then [delete any maps and views](how-do-i-delete-a-project-map-or-view.md) that you don't need. After deleting any content, it's usually helpful to [empty the trash](how-do-i-delete-data-from-my-project.md) as well. If you take this forking approach, you'll be able to copy not just the map data (elements, connections, and loops), but also the accompanying view.

### **2. Copy map to existing project with other maps**

As you might already know from [Kumu's architecture](../overview/kumus-architecture.md#projects), the data behind your maps and views is all connected and lumped together at the project level. This means that it's _technically_ not possible to export only one map from your project and transfer it to another project. However, we created this handy tool as a workaround: [magic map-transferring tool](https://to-kumu-map-blueprint.netlify.app/). To copy or transfer a map into an existing project that already has other data inside of it, simply follow the steps given on the tool page.

{% hint style="warning" %}
Two caveats:&#x20;

* Make sure the maps that you're bringing into the existing map do not have any elements with the same label, to prevent data from being deleted or overridden. . In this case, please refer to the third option below.
* This tool doesn't support cases where you fork a project, then update a map, and then need to bring the updated map back into the original project.&#x20;
{% endhint %}

### 3. Merge map with existing map in another project&#x20;

If you're trying to merge two existing maps together into the same map, things get a bit more complex. The easiest way to do so is to [export](../guides/export.md)[ both maps to Excel](../guides/export.md), merge the data to make sure there aren't any duplicates, and to then [import](../guides/import/#excel-csv) the merged data back into your Kumu project. Note that this option doesn't allow you to keep your decorations and/or element placement locations (in case of [pinned elements](how-do-keep-elements-from-moving.md).&#x20;

If you're trying to merge two maps together while keeping their original look & feel, please reach out to [support@kumu.io](mailto:support@kumu.io), so we can help you move the map and any accompanying views safely, without deleting or overriding data in the target project.
