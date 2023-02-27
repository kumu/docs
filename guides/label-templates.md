# Label templates

When you're working with a map that displays labels for elements, connections, or loops, Kumu will only display the text in the Label [field](fields.md) by default. If you want to include other fields in the label, **label templates** can help you do that.

{% embed url="https://www.youtube.com/embed/tqF5xJ9MfZo" %}

Label templates are customized through the Advanced Editor, using a simple syntax.

```scss
selector {
    label: "{{Field name}}";
}
```

Replace `selector` with any valid [selector](selectors.md), and replace `Field name` with the name of any of your fields. Remember to wrap each field name in double curly brackets `{{}}` and wrap the entire `label` value in double quotes.

{% hint style="info" %}
Some [field types](fields.md#field-type) will give unwanted results when used as label templates. If a field type is set to **text**, **url** or **e-mail**, you'll either get an error or find HTML code being added to your labels on the map. For example, the "Description" field is set to type "text" by default, and can't be changed to another type. In that case, please use a different field for your label template and make sure the Type is set to either **string**, **number**, **currency** or **date**.
{% endhint %}

For example, below is the code for an **element** label that includes the **label** and **element type**.

```scss
element {
    label: "{{label}} {{element type}}";
}
```

{% hint style="info" %}
When using the **Type** field in label templates, you need to specify whether it is **Element** Type, **Connection** Type, or **Loop** Type. For example, use `{{connection type}}`

when adding Type to a connection's popover.
{% endhint %}
