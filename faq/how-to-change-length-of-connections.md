# How do I change the length or strength of connections?

By default our layout algorithm treats all connections the same (same spring strength and length). If you'd like to change the visual look of connections, you have multiple options, as outlined below.

## Change thickness of connections

To change the thickness of the connections, follow these steps:

1. Click on the settings icon ![](../icons/sliders-h.svg) on the right side of the map to open the Basic Editor.
2. Choose "Decorate Connections" to open the decorations editor.
3. Set the dropdown at the top to "Decorate all connections" (or use the other options to specify which connections you'd like to target)
4. Use the slider to change the connection manually, and click Done at the bottom.

## Scale the thickness of connections

6. Follow the steps above, but in step 4 check the "Change size" checkbox and then choose "Scale connection widths by field" to scale the thickness based on a field.
7. Select the attribute you want to scale by. Please note that the field must have the Type set to Number or Currency for the option to show up. Learn how to change Field Type [here](../guides/fields.md#customize-a-field).
8. Set the scale you'd like to use and click Done!

## Scale length/strength by field in the Advanced Editor

If you'd like to modify connections to be shorter or longer connections based on a given connection field, you can do so by adding the code below (example based on using a quantitative "strength" field).

```scss
@settings {
  connection-strength: scale("strength", 0, 1);
  connection-size: scale("strength", 1, 20);
}
```

This works for `connection-length` as well.

## Set specific strength/length in the Advanced Editor

You can also use this to assign specific strength and size values based on qualitative values for connections:

```scss
connection["level of influence"="high"] {
  strength: 1;
}

connection["level of influence"="low"] {
  strength: 0.2;
}

```
