# Can I change the connection length or strength?

By default our layout algorithm treats all connections the same (same spring strength and length). If you'd like to change the visual look of connections, you have multiple options, as outlined below. 

## Change thickness of connections

To change the thickness of the connections, follow these steps:

1. Click on the Settings icon <i class="fa fa-sliders">  </i> on the right side of the map to open the Basic Editor. 
2. Then click More Options and choose "Decorate Connections" to open the decorations editor.
3. Make sure the dropdown at the top is set to "Decorate all connections".
4. Check the "Change size" checkbox and then choose "Scale connection widths by field". 
5. Select the attribute you want to scale by. Please note that the field must have the Type set to Number or Currency for the option to show up. Learn how to change Field Type [here](https://docs.kumu.io/guides/fields.html#customize-a-field).
6. Set the scale you'd like to use and click Done!  

## Scale length/strength by field

If you'd like to modify connections to be shorter or longer connections based on a given connection field, you can do so by adding the code below (example based on using a quantitative "strength" field).

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
