# Is it possible to change the font?

Many Kumu users have wondered if they can use the typefaces/fonts specified in their organization's brand guidelines within a Kumu project. **Kumu does not currently have this feature,** where you can embed a font and allow everyone else to view your map in that font. However, if you are looking to use your typeface or font on the map and then create an image, there is a slight workaround.  

## Custom font work around for static images of your Kumu map

There are two places with editable text in a Kumu project - on the map itself (element and connection labels, controls, and the legend) and in the side panel (see the documentation [here](/overview/map-editor.md#side-panel) to learn how to use the sidepanel). 

> If you have a font downloaded on your computer, you can use it in a project, but anyone without the font installed on their system or cached in their browser will see whatever the browser defaults to, which is usually Times New Roman.

This workaround works on the Chrome and Firefox browsers but not Safari.

### Change map font

If you'd like to change the font/typeface that is showing up on element and connection labels, controls, and the legend, you can use the @settings block in the advanced editor ([explanation of the settings block](/guides/settings-reference.md#settings-reference)), and the font-family property. 

> :heavy_exclamation_mark:Remember, this is most useful if you need the map for a screenshot, because there is no guarantee other users will see the correct font.

```scss
@settings {
  font-family: your-font-name-here;
    }
 ```

![change-font-on-map](https://user-images.githubusercontent.com/12152549/195633516-39296430-1a25-478a-855e-2db78d790ea2.gif)


### Change sidebar font

In the sidebar you can [use markdown](/guides/markdown.md) to format your text and add richness to the panel. Kumu has pre-specified fonts for different elements such as headers, call outs, and body text, so there is no guarantee here, but you can play around with html to add the font of your choice. 

> :heavy_exclamation_mark: Remember, there is no guarantee other users will see the correct font as you are only seeing it because it is installed on your computer or cached in your browser.


