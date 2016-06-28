# How do I avoid duplicate elements in imports?

If you are finding duplicate elements or connections in your map, then you’ll first need to understand how we reconcile spreadsheet imports within Kumu: We reconcile new elements by label and by type.

**Things to consider**

* If you change anything in the label or type columns in your spreadsheet, that will create a duplicate element.
* Keep label and type for elements the same from import to import, or you’ll have to go through the process of clearing things out and re-importing them (see “How do I get rid of duplicate elements?” for those steps).
* If you need to have elements with the same label and different types, you should use [custom IDs](/guides/selector-reference.html#assigned).
* If you find you’re creating a lot of duplicate elements in your iterative process of building the map, consider using our [google sheets integration](/guides/import.html#integrating-with-google-sheets), which will keep things up to date as you go.
* To delete duplicates, check out these steps.
