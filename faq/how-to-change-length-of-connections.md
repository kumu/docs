# Can I change the connection length or strength?

By default our layout algorithm treats all connections the same (same spring strength and length). If you'd like to modify that behavior to have shorter or stronger connections based on a given connection field, you can do so by adding the following (example based on using a quantitative "strength" field):

## Scale length/strength by field

```
@settings {
  connection-strength: scale("strength", 0, 1);
  connection-size: scale("strength", 1, 20);
}
```

This also works for `connection-length` as well.

## Set specific strength/length

You can also use this to assign specific strength and size values based on qualitative values for connections:

```
connection["level of influence"="high"] {
  connection-strength: 1;
}

connection["level of influence"="low"] {
  connection-strength: 0.2;
}

```
