## Imported views

When you're working on projects that have several different [views](/guides/views.html), you'll often find yourself rebuilding certain settings in every single view. For example, you might want all views to have a base element size of 20, or you might want all views to have a [filter control](/guides/controls.html) across the top to filter by element type.

But let's say you decide later on that you want the base element size to be 25, or you want to filter by tags instead of element type—if you had to update those settings across a big group of views, it would get tedious and complicated.

**Imported views** solve that problem! Instead of rebuilding your base settings in every view, you can simply define them in one view, then instruct your other views to import those base settings. When you make any change to your first view, Kumu will automatically update all other views that are importing those base settings.

You can use the Advanced Editor to import views. Here's the basic syntax:

```
@import "my-view";
```

Replace `my-view` with the [slug](/guides/slugs.html) of your original view's name, and you'll be ready to go!

<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/guides/imported-views.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
