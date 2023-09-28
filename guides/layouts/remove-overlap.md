# Remove overlap

If you add a fair amount of data to a Kumu map that is using a [force-directed layout](force-directed.md), you'll soon find out that elements and their labels tend to overlap. As a result, your map can become less readable.

But don't worry, there's a solution! Kumu has a built-in tool that will automatically re-position your elements and labels to make sure none of them overlap. To use this tool, open up the [quick actions menu](../../overview/user-interfaces/quick-actions.md) and search for "overlap". You'll see two options: "Remove element overlap" and "Remove label overlap".

Select one option or the other, based on the effect you want to see on your map. Kumu will move your elements to new positions, then tell you how to save the new positions. If you save the positions, your elements will be pinned in place and won't float anymore. If you'd rather discard the new positions, just press `spacebar` or `B` on your keyboard to bump the map back into a floating position.

{% hint style="info" %}
Keyboard shortcuts: press `o` to remove both element and label overlap, and press `Alt` + `o` to remove just the label overlap.
{% endhint %}

{% hint style="info" %}
Maps that source their data from [Google Sheets](../import/#import-from-google-sheets) or a [remote JSON blueprint](../import/blueprints.md#set-a-remote-blueprint) can't save positions for elements, so you won't be able to permanently remove overlap on those maps.\
\
However, you can still remove overlap before [taking a screenshot or creating a hi-res PDF](../../overview/collaboration.md#create-a-screenshot).
{% endhint %}
