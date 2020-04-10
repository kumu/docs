1. Create a new element, and name it anything—random letters is fine. This is just to force Kumu to create a new element instead of focusing on the original element that you're trying to duplicate.
2. After the element is created, open its profile and rename it to match the name of the original element. Kumu will keep the elements separate but will allow them to have the same name.
3. In the profile of the ghost element, choose how you want to mark it as a ghost. For example, you could set the element type to "Ghost" add a "Ghost" tag, or even create a new field called "Ghost" and set its value to True.
4. Using that profile data, add decorations to make all ghost elements visually distinct. For example, you could make them translucent:

```
element["Ghost" = "True"] {
  opacity: 0.5;
}
```

For additional useability, you can also do the following:
1. Select the original element, and scroll down to the very bottom where you see "permalink". Click on the permalink to open it up.
2. In the URL bar of your browser, copy the permalink, starting with `#map-` and going all the way to the end
3. Open the profile of the ghost element, and add a new field called "URL". In the URL field, paste in that copied portion of the permalink

Now, when you double-click the ghost element on the map, Kumu will take you to the  profile of the original element 