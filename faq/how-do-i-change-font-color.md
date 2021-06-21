# How do I change the font color on my map? 

There's multiple ways to change the color of the font on your map: 

- Customize the default color for all fonts in your map
- Use Direct Decorations to color specific fonts
- Change font color in the Advanced Editor

## Change default font color

To change the color of all text in your map, following the following steps: 

1. Click on the Settings button to open the Basic Editor on the right side
2. Click "More Options" and then "Customize View Defaults"
3. Scroll down to Font Color and choose the color there

*Note that changing the default font color of your map also changes the font color of your legend.*

## Change font color with Direct Decorations
[Direct Decorations](https://docs.kumu.io/guides/direct-decorations.html) are best used when wanting to change the font color of only one or a few elements in your map.
To do so: hover over the element or connection whose font color you'd like to change so the edit pencil shows up. Click on the Pencil and then Click on the Text icon to change its color there. 

[Direct Decorations Font Color](images/dir-dec-font-color.jpg)

## Change font color in the Advanced Editor
By adding code to the Advanced Editor you can change font color driven by the data stored inside of your profiles. 
First, choose a [selector](https://docs.kumu.io/guides/selectors.html) to specific which item's font color you want to target, and then add the color code. 

For example:

```
selector {
  font-color: black;
}
```

Or use [hex codes](https://htmlcolorcodes.com/) to find more specific colors: 

```
selector {
  font-color: #3EF4B5;
}
```
  

