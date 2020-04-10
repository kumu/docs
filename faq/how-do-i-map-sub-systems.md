Yes, there's a few different ways to handle sub-systems inside Kumu. Here's a little more info:

#### Use filtering to show/hide subsystems
1. Tag each element and connection with the layer it belongs too. For example, you could create a custom field called "Layer", make sure the field's "Limit" setting is set to "One or more", and then add tags like "Layer 1", "Layer 2", etc. (or however you want to name your layers)
2. [Add a filter control](https://docs.kumu.io/guides/controls.html) to filter elements and connections by layer.

That process will allow you to see the entire system at once, if you want, and still allow you to filter down to a very specific layer/sub-system.


#### Or, create a separate map in the same project
1. In the top left, next to the project title, open the map dropdown and select "New Map". Name your new map after the sub-system it will visualize
2. Add elements and connections to the map as usual. If you add an element that exists on the original map, Kumu will pull it in from that map. Those elements' profiles will stay linked—if you change the profile in one place, it will update the same profile in the other map.