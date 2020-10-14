# Remove element and label overlap

If you add a fair amount of data to a Kumu map that is using a [force-directed layout](/guides/layouts/force-directed.html), you'll soon find out that elements and their labels tend to overlap. As a result, your map can become less readable.

But don't worry, there's a solution! Kumu has a built-in tool that will automatically re-position your elements and labels to make sure none of them overlap. To use this tool, open up the [wizard](/guides/wizard.html) and search for "overlap". You'll see two options: "Remove element overlap" and "Remove label overlap".

Select one option or the other, based on the effect you want to see on your map. Kumu will move your elements to new positions, then tell you how to save the new positions. If you save the positions, your elements will be pinned in place and won't float anymore. If you'd rather discard the new positions, just press `spacebar` or `B` on your keyboard to bump the map back into a floating position.

<p class="alert alert-info">
<b>Keyboard shortcuts:</b> press <code>o</code> to remove both element and label overlap, and press <code>Alt</code> + <code>o</code> to remove just the label overlap.
</p>

<p class="alert alert-warning">
Maps that source their data from <a class="alert-link" href="/guides/import.html#import-from-google-sheets">Google Sheets</a> or a <a class="alert-link" href="/guides/blueprints.html#set-a-remote-blueprint">remote JSON blueprint</a> can't save positions for elements, so you won't be able to permanently remove overlap on those maps.
<br><br>
However, you can still remove overlap before <a class="alert-link" href="/overview/collaboration.html#create-a-screenshot">taking a screenshot or creating a hi-res PDF</a>.
</p>


<!-- Before:

![before remove overlap](/images/before-remove-overlap.png)

After:

![after remove overlap](/images/after-remove-overlap.png) -->




<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/guides/layouts/remove-overlap.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
