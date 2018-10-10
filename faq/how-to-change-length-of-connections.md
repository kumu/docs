# Can I change the connection length or strength?

By default our layout algorithm treats all connections the same (same spring strength and length). If you'd like to modify that behavior to have shorter or stronger connections based on a given connection field, you can do so by adding the code below (example based on using a quantitative "strength" field).

<p class="alert alert-info">
Looking to change the thickness of connections? You can learn how to do that in <a class="alert-link" href="/guides/decorate.html#refine-your-decorations">our guide on decorations</a>.
</p>

## Scale length/strength by field

```
@settings {
  connection-strength: scale("strength", 0, 1);
  connection-size: scale("strength", 1, 20);
}
```

This works for `connection-length` as well.

## Set specific strength/length

You can also use this to assign specific strength and size values based on qualitative values for connections:

```
connection["level of influence"="high"] {
  strength: 1;
}

connection["level of influence"="low"] {
  strength: 0.2;
}

```

<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/faq/how-to-change-length-of-connections.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
