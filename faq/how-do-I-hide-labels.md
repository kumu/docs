# How do I hide labels on my map?

Kumu automatically shows the label of your element or connections on your map. 
If you prefer to take them out, you'll have to add a bit of code to your Advanced Editor. 

## Hide element labels
To hide the element labels in your map, add the following code to your Advanced Editor:

```
element {
  label-visibility: hidden; 
}
```

To only change the _position_ of element labels, go to [this guide](/faq/how-do-i-change-element-text-position.md). 

## Hide connection labels
To hide the connection labels in your map, add the following code to your Advanced Editor:

```
connection {
  label-visibility: hidden; 
}
```

<p class="alert alert-info">
If you'd like to refine which elements or connections to show labels for and which not, please visit our <a class="alert-link" href="/guides/selectors.md">Selectors guide</a> to change the selector to something more precise. 
</p>
