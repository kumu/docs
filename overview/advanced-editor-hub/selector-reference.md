# Selector reference

Selectors provide a powerful, friendly way to slice through maps, based on [Cascading Style Sheets (CSS)](https://developer.mozilla.org/en-US/docs/Web/CSS) selectors.

If you're familiar with CSS, you'll feel right at home. If you haven't seen or used CSS, don't worry! All the selector patterns you'll ever need are documented in this reference. To see examples of how selectors can be used, check out our [general guide on selectors](../../guides/selectors.md).

There are two reference tables on this page. The first shows you all the different kinds of selectors you can use in Kumu, and the second table gives details about logical operators that can be used inside of certain selectors.

In the first table, you'll notice that the word "slug" appears a lot. A [slug](../../guides/slugs.md) is a piece of text that has had all letters converted to lowercase, all special characters removed, and all spaces and replaced with hyphens. So, when you see something like `type-slug` in the table below, this will be replaced in your custom selector with something like `private-company` or `individual` or another "slug" version of an element type.

## Selectors

## Operators

| Operator | Description                                                 |
| -------- | ----------------------------------------------------------- |
| `=`      | is equal to                                                 |
| `!=`     | is not equal to                                             |
| `^=`     | starts with                                                 |
| `$=`     | ends with                                                   |
| `*=`     | text contains                                               |
| `~=`     | list of values includes (this operator matches full values) |
| `>`      | is greater than                                             |
| `>=`     | is greater than or equal to                                 |
| `<`      | is less than                                                |
| `<=`     | is less than or equal to                                    |

| Selector                                              | What It Selects                                                                                                                                                             |
| ----------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `*`                                                   | All elements, connections, and loops                                                                                                                                        |
| `element`                                             | All elements                                                                                                                                                                |
| `connection`                                          | All connections                                                                                                                                                             |
| `loop`                                                | All loops                                                                                                                                                                   |
| `type-slug`                                           | All elements whose element type slug matches `type-slug`                                                                                                                    |
| `type-slug-connection`                                | All connections whose connection type slug matches `type-slug`                                                                                                              |
| `#label-slug`                                         | The item whose label slug matches `label-slug`.                                                                                                                             |
| `#assigned-id-slug`                                   | The item whose [assigned ID](../../faq/how-do-I-avoid-duplicating-data.md) slug matches `assigned-id-slug`.                                                                 |
| `#system-id`                                          | The item whose system ID matches `system-id`.                                                                                                                               |
| `.tag`                                                | All items whose Tags field contains `tag`. Note that this selector starts with a dot `.`                                                                                    |
| `["field name" operator "field value"]`               | All items that have a [field name and field value](../kumus-architecture.md#fields) that meet the condition of the `operator` (valid operators are listed below this table) |
| `["field name"]`                                      | All items that have any value in the field whose name matches `field name`                                                                                                  |
| `[!"field name"]`                                     | All items that have no value in the field whose name matches `field name`                                                                                                   |
| `:from(selector)`                                     | All connections coming from an item that matches the `selector`                                                                                                             |
| `:to(selector)`                                       | All connections going to an item that matches the `selector`                                                                                                                |
| `:directed`                                           | All directed connections                                                                                                                                                    |
| `:undirected`                                         | All undirected connections                                                                                                                                                  |
| `:mutual`                                             | All mutual connections                                                                                                                                                      |
| `:focus`                                              | All items at the root of a [focus setting](../../guides/focus.md)                                                                                                           |
| `:orphan`                                             | All elements that have zero connections (including connections that have been filtered out)                                                                                 |
| `:not(selector)`                                      | All items that do not match the `selector`                                                                                                                                  |
| `:loop(selector)`                                     | All items that are part of a loop matching `selector`                                                                                                                       |
| `this-selector --> that-selector`                     | All items matching `this-selector` connected to items that match `that-selector`                                                                                            |
| `this-selector <-- that-selector`                     | All items matching `this-selector` connected from items that match `that-selector`                                                                                          |
| `this-selector <--> that-selector`                    | All items matching `this-selector` connected to or from items that match `that-selector`                                                                                    |
| `this-selector <-connection-selector-> that-selector` | All items matching `this-selector` connected to or from items that match `that-selector` via connections that match `connection-selector`                                   |
