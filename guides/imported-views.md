## Imported views

When you're working on projects that have several different [views](/guides/views.html), you'll often find yourself rebuilding certain settings in every single view. For example, you might want all views to have a base element size of 20, or you might want all views to have a [filter control](/guides/controls.html) across the top to filter by element type.

But let's say you decide later on that you want the base element size to be 25, or you want to filter by tags instead of element type—if you had to update those settings across a big group of views, it would get tedious and complicated.

**Imported views** solve that problem! Instead of rebuilding your base settings in every view, you can simply define them in one view, then instruct your other views to import those base settings. When you make any change to your first view, Kumu will automatically update all other views that are importing those base settings.


## Import views with the Basic Editor

The easiest way to import views is with the [Basic Editor](/overview/view-editors.html#basic-editor). Open the Basic Editor, then click **More Options**, and select **Import a view**.

Use the **Imported Views** interface to select another view in your project that you want to import. The map will instantly update to reflect the new imported view rules.

![](/images/imported-views-ui.png)


## Import views with the Advanced Editor

You can use the [Advanced Editor](/overview/view-editors.html#advanced-editor) to import views. Here's the basic syntax:

```
@import "my-view";
```

Replace `my-view` with the [slug](/guides/slugs.html) of your original view's name, and you'll be ready to go!


