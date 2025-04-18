# My data won't import. What can I do?

You're trying to import data into Kumu, but for some reason it's not working. Perhaps Kumu is giving an error, or the import review page keeps loading indefinitely. In this guide you can find some troubleshooting tips to solve this.&#x20;

#### Not starting your file with the correct column headers

For an element import: **Label** should be the first column header in your spreadsheet (cell `A1`) for an element import. For a connection import, you should have **From** and **To** in the first two columns (cells `A1` and `B1`). The only exception to this is when you're using IDs in the first column, please read more about that [here](../faq/how-do-I-avoid-duplicating-data.md#use-ids-to-separate-identical-labels).

#### Not having column headers in the first row

Your column headers (e.g. Label, Type, Description, etc.) should be in row 1 of your spreadsheet.

#### Not ignoring unneeded sheets

If you have multiple sheets in your file, and you only want to import some, make sure that Kumu ignores the other sheets when importing. To do this, you can add `(ignore)` to sheet names—for example: `Sheet 3 (ignore)`. Also make sure to double-check if you have any hidden sheets in your file!

#### Hidden data in unused cells

If it seems like your spreadsheet is taking _forever_ to load, or it's consistently throwing errors, you might have some data or formatting hiding in your unused cells. To clear all content and formatting from unused cells in Excel, [follow this Excel guide](https://support.office.com/en-us/article/clear-cells-of-contents-or-formats-9ff6b8ff-1afd-495f-8ad8-8c1f6f82a9d6).

#### Trying to import .xls files

If you run into this error message...

{% hint style="danger" %}
Sorry, there was an error with your import.\
Error: Import format not recognized: auto
{% endhint %}

...you're trying to import an .xls file. Save it as .xlsx and try again!

#### Importing an Excel file in Google Drive as a Google Sheet

If you add an .xlsx file to Google Drive, it will still open as an Excel sheet, only inside Google Drive. Make sure you're file is actually a Google Sheet by clicking on "Open with" at the top of the page and choosing Google Sheets, or by clicking File in the top-left corner and then choose "Save as Google Sheets". You can enter that sheet's link as your Google Sheet link.

#### Funny character issues?

If you're running into funny character issues, please make sure your import file is [UTF-8 encoded](https://help.alchemer.com/help/encode-an-excel-file-to-utf-8-or-utf-16).

Is your import still not working after going through all of these steps? Please send (a link to) your data sheet to [support@kumu.io](mailto:support@kumu.io), and we'll be happy to help!
