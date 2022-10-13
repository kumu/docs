# Is it possible to change the fonts in Kumu?

Many Kumu users have wondered if they can use the typefaces/fonts specified in their organization's brand guidelines within a Kumu project. Kumu does not currently have this feature, where you can embed a font and allow everyone else to view your map in that font. However, if you are looking to use your typeface or font on the map and then create an image, there is a slight workaround.  

## Custom font work around for static images of your Kumu map

There are two places with editable text in a Kumu project - on the map itself (element and connection labels, controls, and the legend) and in the side panel (see the documentation [here](https://docs.kumu.io/overview/map-editor.html#side-panel) to learn how to use the sidepanel). 

> If you have a font downloaded on your computer, you can use it in a project, but anyone without the font installed on their system or cached in their browser will see whatever the browser defaults to, which is usually Times New Roman.

### Change map font

If you'd like to change the font/typeface that is showing up on element and connection labels, controls, and the legend, you can use the @settings block in the advanced editor [explanation of the settings block](https://docs.kumu.io/guides/settings-reference.html#settings-reference), and the font-family property.

```
@settings {
  font-family: your-font-name-here;
    }
 ```



### Change sidebar font
