## Label Templates

When you're working with a map that displays labels for elements, connections, or loops, Kumu will only display the text in the Label [field](/guides/fields.html) by default. If you want to include other fields in the label, **label templates** can help you do that.

<p><iframe width="560" height="315" src="https://www.youtube.com/embed/tqF5xJ9MfZo" frameborder="0" allowfullscreen></iframe></p>

Label templates are customized through the Advanced Editor, using a simple syntax.

```
selector {
    label: "{{Field name}}";
}
```

Replace `selector` with any valid [selector](/guides/selectors.html), and replace `Field name` with the name of any of your fields. Remember to wrap each field name in double curly brackets `{{}}` and wrap the entire `label` value in double quotes.

<p class="alert alert-warning">
Some <a class="alert-link" href="/guides/fields.html#field-type">field types</a> will give unwanted results when used as label templates. If a field type is set to <strong>text</strong>, <strong>url</strong> or <strong>e-mail</strong>, you'll either get an error or find HTML code being added to your labels on the map. For example, the "Description" field is set to type "text" by default, and can't be changed to another type. In that case, please use a different field for your label template and make sure the Type is set to either <strong>string</strong>, <strong>number</strong>, <strong>currency</strong> or <strong>date</strong>.
</p>

For example, below is the code for an **element** label that includes the **label** and **element type**.
```
element {
    label: "{{label}} {{element type}}";
}
```

<p class="alert alert-info">
When using the <strong>Type</strong> field in label templates, you need to specify whether it is <strong>Element</strong> Type, <strong>Connection</strong> Type, or <strong>Loop</strong> Type. For example, use <code>{% raw %}{{connection type}}{% endraw %}</code> when adding Type to a connection's popover.
</p>

<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/guides/label-templates.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
