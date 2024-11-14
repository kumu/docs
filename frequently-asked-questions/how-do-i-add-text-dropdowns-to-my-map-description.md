# How do I add text dropdowns to my map description?

Text dropdowns are a great way to condense large texts or different types of information in your [map overview](../overview/map-editor.md#side-panel). Simply click on the dropdown-arrow to reveal more information:

<figure><img src="../.gitbook/assets/Text dropdowns.gif" alt=""><figcaption></figcaption></figure>

To create them, add the following code to your map overview:&#x20;

```
<details> 
<summary> Text that should be visible at all times goes here </summary> 
Text that shows up after clicking the arrow shows up here.  
</details> 
```

Note that you can use as many of these blocks as you wish, to create different sections:

```
<details>
<summary> What are citrus fruits? </summary> 
Here are some examples:
1. Lemon 
2. Oranges 
3. Grapefruit 
</details>

<details> 
<summary> Countries commonly ranked "happiest in the world": </summary>  
- Denmark 
- Costa Rica 
- Australia 
</details>
```

