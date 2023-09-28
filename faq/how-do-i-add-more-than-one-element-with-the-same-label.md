# How do I add more than one element with the same label?

By default, Kumu assumes that each of your elements will have a unique label, and that you won't be creating repeats or duplicates. For certain types of maps, however, it's useful to have more than one element with the same label.

The way you create more than one element with the same label is different based on whether you are building by hand or importing from a spreadsheet. This guide will give instructions for both options.

## Build duplicate elements by hand

1. Click the green ![](../icons/plus-circle.svg) button and select **Add element** (or, just press `E` on your keyboard).
2. Create your first element with the label that you will be re-using.
3. Follow step 1 again to create the second element
4. Label the second element with something else—even random letters will be fine.
5. In the profile of the second element, edit the Label, changing it to match the label of your first element.

After these steps, you'll have two separate elements with the same label.

## Import duplicates from a spreadsheet

1. On the spreadsheet tab that contains your elements (i.e., the tab with `Label` in Column A), insert a column before Column A
2. Put `ID` as the title of the new column
3. Fill in the `ID` column with unique IDs for all elements.
4. Fill in the `Label` column with your labels. As long as the IDs are unique, you are allowed to repeat any Labels you like.
5. Import the spreadsheet, and Kumu will create one circle for each unique ID, with the Label you assigned in the spreadsheet.

{% hint style="info" %}
For more information on how to use IDs, [check out our guide here. ](how-do-I-avoid-duplicating-data.md#use-ids-to-separate-identical-labels)
{% endhint %}
