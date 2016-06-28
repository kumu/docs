# How do I avoid duplicate elements in imports?

If you find duplicate elements or connections in your map, make sure you understand that we reconcile elements in spreadsheet imports by both **label AND type**. This means that the following import structure would create two different elements:

Label | Type
---|---
Abracadabra|Person
Abracadabra|Organization

It also means that if you edit the label or type of any element in your spreadsheet and then just re-import the file, you'll get a duplicate element.

**Things to remember:**

* If you edit the label or type for any element in your spreadsheet and re-import, that will create a duplicate element. To avoid this, either edit the label/type directly in Kumu or delete that element and empty the trash before re-importing.
* If you need to have elements with the same label AND type, you need to use [custom IDs](/guides/selector-reference.html#assigned) to prevent those elements from being combined into a single element.
* If you find you’re creating a lot of duplicate elements in your iterative process of building the map, consider using our [google sheets integration](/guides/import.html#integrating-with-google-sheets), which will keep things up to date as you go.
* To remove duplicates, [check out these steps](how-to-get-rid-of-duplicates.md).
