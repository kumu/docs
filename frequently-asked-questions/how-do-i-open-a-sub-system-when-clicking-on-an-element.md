# How do I open a sub-system when clicking on an element?

This guide describes how to add a second "layer" of elements + connections to your map that only appear when double-clicking a certain element. You're essentially linking an element to another map in the same project through a [URL field](../guides/fields.md#url). This allows you to add additional data to your map, that might not always need to be visible in the main map.&#x20;

<figure><img src="../.gitbook/assets/Sub system.gif" alt=""><figcaption><p>Double-click an element to access a sub-system</p></figcaption></figure>

**Here are the steps to do so:**&#x20;

1. Create your main map, as you want it to be visible to your viewer upon opening the Kumu project (this is your first "layer")
2. Copy the URL of this main map from the browser bar
3. Click on the first dropdown in the top-left corner of your project, and choose "+ New Map"
4. Create the second map that shows what you want it to look like when someone double-clicks an element (this is your second "layer")
5. Click to add a map description to your second map and write "Return to main map". [Hyperlink these words](../guides/markdown.md) with the URL you copied at step 2
6. Then copy the URL of this second map directly from the browser bar
7. Go back to your main map (top-left corner dropdown) and add a field called "URL" to the element you want to be able to double-click
8. Paste the URL from step 6 as the value in that field
9. Now if you _double-click_ that element on your map, it'll navigate you to the other map

{% hint style="info" %}
Looking to make this feature even more interactive? Add a[ Lightbox](../guides/lightbox.md) URL in the URL field (step 8). This way, when you double-click the element, a popup will appear displaying your subsystem—easily dismissible with a quick click of the X in the top-right corner.
{% endhint %}

You can find the example map from the visual above [by clicking here](https://kumu.io/AlexVipond/sub-system-demo).
