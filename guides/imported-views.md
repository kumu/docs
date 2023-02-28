# Imported views

### Imported views

When you're working on projects that have several different [views](views.md), you'll often find yourself rebuilding certain settings in every single view. For example, you might want all views to have a base element size of 20, or you might want all views to have a [filter control](controls.md) across the top to filter by element type.

But let's say you decide later on that you want the base element size to be 25, or you want to filter by tags instead of element type—if you had to update those settings across a big group of views, it would get tedious and complicated.

**Imported views** solve that problem! Instead of rebuilding your base settings in every view, you can simply define them in one view, then instruct your other views to import those base settings. When you make any change to your first view, Kumu will automatically update all other views that are importing those base settings.

### Import views with the Advanced Editor

You can use the [Advanced Editor](../overview/view-editors.md#advanced-editor) to import views. Here's the basic syntax:

```scss
@import "my-view";
```

Replace `my-view` with the [slug](slugs.md) of your original view's name, and you'll be ready to go!
