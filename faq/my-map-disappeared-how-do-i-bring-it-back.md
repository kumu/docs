# My map disappeared. How do I bring it back?

If it seems like your entire map, or parts of your map, have suddenly disappeared, this guide has a few troubleshooting steps.


## Is focus turned on?

Kumu's [focus feature](/guides/focus.html) has the ability to hide entire sections of your map, narrowing focus to just a small selection. This is really useful when you need it—but can be pretty scary if you see most of your map disappear without explanation!

To know when focus is turned on, look for a blue target icon <i class="fa fa-crosshairs"> on the right side of the map. If it's blue, click it to turn focus off, or just press `Esc` on your keyboard.


## Has a filter been applied?

Kumu's [filter feature](/guides/filter.html) can show and hide elements, connections, and loops based on the content in their profiles.

To check if a filter has been applied and might be hiding some or all of your content, open up the [Basic Editor](/overview/view-editors.html#basic-editor), and look at the text next to **Filter**, which tells you the number of hidden items. If that text indicates there are hidden items, click the settings icon to the right of **Filter**, and see if you can adjust the filter settings to bring your data back into view.
  
Another option is to go into your Advanced Editor and see if you can find a line of code saying ignore: "element code or name";. You can delete that line and it will bring that/those element(s)back. Don't forget to click Save at the bottom!

![Unhide Elements](/images/unhide-elements.png)  
  
## Did your Google Sheet disconnect? 

If you imported your data through Google Sheets, then that link is the lifeline to the data in your map. If your sheet link is disconnected or deleted, then all the data in your map will disappear. Click on the green button at the bottom and choose Import, or hit the "i" key of your keyboard to see whether your Google Sheet is still connected. 
  
## Do you have pinned elements in a map with a geo template?

On rare occasions, elements in one map might disappear because elements on a geo template were [pinned down](https://docs.kumu.io/faq/how-do-keep-elements-from-moving.html) in _another_ map. If you have a geo template in any of your maps, please navigate there and: click "A" on your keyboard to select all elements on the map, and then click Alt + P (option + P for mac) to unpin the elements. Wait for the message "You unpinned X elements in your map" in the bottom-left corner, and then navigate to the map that was blank. Your data should now be back!

## Has the data been deleted?

If all else fails, it's possible that the data may have (accidentally) been deleted from the map. That's not an immediate cause for concern—before data is _really_ deleted from your project, it goes to the project's trash.

To check the trash, click the menu icon <i class="fa fa-bars"></i> in the top left corner of the screen, then select **Trash** from the sidebar. If the Trash panel shows that there is data in the trash, send an email to [support@kumu.io](mailto:support@kumu.io), and we can help you get that data out of the trash and back into the map.





<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/faq/my-map-disappeared-how-do-i-bring-it-back.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
