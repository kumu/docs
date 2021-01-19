# How do I list an element's connections in its profile?

In the profile of each element in your map, it's possible to list that element's connections, using three tools:
- Kumu's [list widget](/guides/widgets.html#lists)
- [`:from` and `:to` pseudo-selectors](/guides/selectors.html#connected-from-and-connected-to)
- A field with its **Type** set to **Text** (e.g. the **Description** field)

![List of element's connections in its profile](/images/list-widget-element-connections.png)

To get started, open one of your element profiles. If you want the connection list to be in a custom field, create that field, and [set its type to **Text**](/guides/fields.html#customize-a-field). Alternatively, you can use the Description field, since its type is Text by default.

In your custom Text field or in the Description field, add the following:

```
[[list ":from([label = 'My Element Label']),:to([label = 'My Element Label'])"]]
```

Replace both instances of `My Element Label` with the actual label of the element whose profile you're editing. After you click **Done** to save the field's content, you'll see a list of all connections leading to or from that element.

If you just want the connections leading your element, you can omit the second half of the selector. Here's what it would look like:

```
[[list ":from([label = 'My Element Label'])"]]
```

And if you just wanted the connections to the element, just omit the first half:

```
[[list ":to([label = 'My Element Label'])"]]
```

Again, replace `My Element Label` in all of these examples with the actual label of the element whose profile you're editing.


<div class="alert alert-warning">
<p>
  If your map has multiple elements with the same label, your list widget will list all connections to or from <em>any</em> of the elements with that label. To avoid that, you would need to replace <code>[label = 'My Element Label']</code> with a more specific selector.
</p>
<p>
  <a class="alert-link" href="/guides/selectors.html">Visit the full guide on selectors</a> or <a href="mailto:support@kumu.io">contact support</a> to learn how to write a more specific selector for your use case.
</p>
</div>


## Use Google Sheets to generate list widget code for all elements

If you have a lot of elements, it's pretty tedious to go through each element's profile and add the list widget code. 

If you're using either **Label** or **ID** as the unique identifier for elements, you can quickly generate list widget code using a custom Google Sheets formula we created.

To get access to the custom formula, you can open our ["With custom Kumu formulas" Google Sheet](https://docs.google.com/spreadsheets/d/1qRhkn6qECtBaAncWykMa0hAG97jPK6q_bODrwntqze8/edit?usp=sharing), then click "File" > "Make a copy" to create your own editable copy of the sheet.

Delete the example tabs in the Google Sheet, then create a new tab and copy/paste your list of elements into it, starting from cell `A1`. Make sure that **Label** is in Column A, or that you have an **ID** column in the sheet, filled with unique IDs for your elements.

<p class="alert alert-info">
  If you don't have your list of elements on hand, you can use Kumu to <a class="alert-link" href="/guides/export.html">export it to Excel</a>.
</p>

In your dataset, start editing the cell directly below the column header for the field where your list of connections should go. For example, if you want to put the connection list in the Description field, and your Descrition field is in Column B of your spreadsheet, start editing cell `B2` underneath the Description column header.

In that cell, type `=KUMU_LIST_WIDGET_ELEMENT_CONNECTIONS(` to get started.


## Sample usages

`KUMU_LIST_WIDGET_ELEMENT_CONNECTIONS(A2, "both")`

`KUMU_LIST_WIDGET_ELEMENT_CONNECTIONS(A2, "from", FALSE)`


## Syntax

`KUMU_LIST_WIDGET_ELEMENT_CONNECTIONS(element_identifier, connection_direction, identify_by_label)`

| Parameter | Description |
| --- | --- |
| `element_identifier` | <p>The cell that contains the unique identifier for the element.</p><p>In most projects, this will be the element Label, but <a href="/faq/how-do-I-avoid-duplicating-data.html">you can also use an ID column</a> to identify elements.</p> |
| `connection_direction` | Enter `"both"` to list all connections from and to the element. Enter `"from"` to list only the connections from the element, and enter `"to"` to list only the connections to the element. This parameter is not case sensitive. |
| `identify_by_label` | <p>Enter <code>TRUE</code> if the element's unique identifier is coming from the Label column. Enter <code>FALSE</code> if the element's unique identifier is coming from the ID column.</p><p>If you don't specify this parameter, it defaults to <code>TRUE</code>.</p> |


Given those parameters, `KUMU_LIST_WIDGET_ELEMENT_CONNECTIONS` returns Kumu list widget code to list all the connections that are connected from or to the specified element.

Then, you can simply import that data back into Kumu, and when you open any element profile, its connections will be listed!



 <span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/faq/how-do-i-list-an-elements-connections-in-its-profile.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
