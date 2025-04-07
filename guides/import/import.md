# Structure your data for Kumu

This guide explains how to structure your data in Excel or Google Sheets. Finding it challenging to start from scratch? Do it the other way around! Manually create a few elements, connections, and some profile fields in Kumu, and click the [export](../export.md) icon in the bottom-right corner of your project.&#x20;

**Skip to section:**&#x20;

* [Common Import Pitfalls](import.md#common-pitfalls)
* [Master Imports in 5 Steps](import.md#master-imports-in-5-steps)

## Structure your data

Before you can import your data into Kumu, you'll need to structure your spreadsheet so that Kumu can read it. First, make sure your spreadsheet contains the following required column headers:

**For elements**

* Label (must be in the first cell of Column A)

**For connections**

* From (must be in the first cell of Column A)
* To (must be in the first cell of Column B)

After you create the required column headers, you can start filling out the rows to create new elements and connections. You can also optionally add more columns to hold custom data:

**For elements**

* Type
* Description
* Tags
* Organization
* Net worth

...etc.

**For connections**

* Type
* Description
* Tags
* Label
* Strength

...etc.

All of these optional columns can be used to add data to [fields](../fields.md) inside your elements and connections. If you want to store multiple values inside of one cell (for example, tags or keywords), just separate each value with the pipe character `|`. If you put multiple elements in the "To" cell of a connection, separating each element with the pipe character `|`, Kumu will draw a connection from the "From" element to each separate element in the "To" cell.

{% hint style="info" %}
It's also possible to use ID as the first column header in element and connection sheets. To learn how and why you would do that, [check out our guide on avoiding duplicate data](../../faq/how-do-I-avoid-duplicating-data.md).
{% endhint %}

Here's a sample element import spreadsheet:

| Label     | Type    | Description                                                 | Tags                  |
| --------- | ------- | ----------------------------------------------------------- | --------------------- |
| Jeff Mohr | Person  | <p>Co-Founder and CEO, always<br>up for learning</p>        | Founder\|Male\|Runner |
| Kumu      | Company | <p>A web-based platform<br>for mapping relationships...</p> | Mapping\|Technology   |

And here's a sample connection import spreadsheet:

| From       | To       | Type       | Strength         |
| ---------- | -------- | ---------- | ---------------- |
| Barack     | Michelle | Personal   | Strong           |
| Ed Snowden | NSA      | Contractor | It's complicated |

{% hint style="success" %}
Get your hands dirty! [Click here for a sample import file](https://docs.google.com/spreadsheets/d/1f0OesdZ32eqKWG77v3fsL7htW5TxeBSX/edit?usp=sharing\&ouid=107261106798466659559\&rtpof=true\&sd=true) for the [PayPal Mafia map](https://kumu.io/jeff/paypal-mafia), or find our [folder of public data samples here](https://drive.google.com/drive/folders/1_xoIFJ2snCcxta1Fw8AwrxWCe5YlKXCW?usp=sharing). You can examine these files to see how imports work with real data before creating your own import file.&#x20;
{% endhint %}

{% hint style="info" %}
If you need to convert an [adjacency matrix](https://en.wikipedia.org/wiki/Adjacency_matrix) to meet Kumu's format, see our ["How do I restructure my adjacency matrix"](../../faq/how-do-i-restructure-my-adjacency-matrix.md) FAQ.
{% endhint %}

#### Ignore unneeded sheets

Sometimes, you'll have other sheets in your Excel or Google Sheets workbook that aren't formatted for Kumu and shouldn't be imported, but need to stay in the workbook. If that's the case, just add `(ignore)` to the name of the sheet, and Kumu will ignore it during the upload.

## Common pitfalls

Having trouble with your import? If Kumu is giving you an error message, click on the triangular error icon to see what is wrong. If Kumu just loads indefinitely, there's also likely something wrong with the format of your sheet(s). Here are a few common pitfalls...

#### Not starting your file with the correct column headers

**Label** should be the first column header in your spreadsheet (cell `A1`) for an element import, and for a connection import, you should have **From** and **To** in the first two columns (cells `A1` and `B1`). The only exception to this is when you're using IDs in the first column, please read more about that [here](../../faq/how-do-I-avoid-duplicating-data.md#use-ids-to-separate-identical-labels).

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

If you add an XLSX file to Google Drive, it will still open as an Excel sheet, only inside Google Drive. Make sure you're file is actually a Google Sheet by clicking on "Open with" at the top of the page and choosing Google Sheets, or by clicking File in the top-left corner and then choose "Save as Google Sheets". You can enter that sheet's link as your Google Sheet link.

**Too much data**

Kumu can only [handle so much data](../../faq/how-much-data-can-kumu-handle.md). Perhaps you're trying to add 10,000+ data points? Try importing a sub-set of your data first. If that imports without a problem, then your dataset is likely too large for one Kumu project.

#### Funny character issues?

If you're running into funny character issues, please make sure your import file is [UTF-8 encoded](https://help.alchemer.com/help/encode-an-excel-file-to-utf-8-or-utf-16).

## Master Imports in 5 Steps

Looking to hone your importing skills? These tips will turn you into a master importer:

1. [Separate elements (or element types) and connections into their own sheets](import.md#1-separate-elements-or-element-types-and-connections-into-their-own-sheets)
2. [Take advantage of pre-named fields](import.md#2-take-advantage-of-pre-named-fields)
3. [Use pipes to separate | multiple | values](import.md#3-use-pipes-to-separate-multiple-values)
4. [Try to be selector friendly](import.md#4-try-to-be-selector-friendly)
5. [Ask for help!](import.md#5-ask-for-help)

#### 1. Separate elements (or element types) and connections into their own sheets

Since elements and connections often have very different sets of fields, we recommend using separate sheets in your workbook for each dataset. Sometimes, you'll have different types of elements (for example, people and organizations) that have very different fields. In that case, you can separate those elements into separate sheets as well. Each separate sheet can have different column headers, and Kumu will still be able to read and understand each sheet.

If you prefer keeping everything within a single sheet, you can use two blank rows to tell Kumu that a new section is starting—that is, Kumu should look at the first row of the new section to find column headers. If you are using a .csv file, this tip doesn't work—you'll need to either use the single sheet method or create separate files for elements and connections.

#### 2. Take advantage of pre-named fields

Our pre-named fields aren't required in your spreadsheet, but they get special visual treatment in [profiles](../profiles.md), so it's great to use them when you can!

TypeUse the type field to categorize elements and connections. Common element types include person, project, and company. Common connection types include personal, business, and family. [Try to be selector friendly](import.md#try-to-be-selector-friendly) with your types, when you can.DescriptionThe description field designed to hold longer-form content that describes an item. Descriptions can include multiple paragraphs, and even images and videos. [You can use Markdown](../markdown.md) to format each description's content.TagsThe tags field is designed to hold multiple values that each describe your item in a different way. For example, a connection between a person and a non-profit might have "Strong relationship", "Board Member", "Donor", and "Advocate" all stored as separate values in the Tags field, adding rich detail to that person's relationship with the non-profit.\
\
Make sure to separate multiple tags using a pipe "|" in your spreadsheet cells, and [try to be selector friendly](import.md#try-to-be-selector-friendly) with your tags, when you can.ImageInclude an image URL and Kumu will display it on the map and in the profile.EmailAdd an email and Kumu will automatically include their [gravatar](http://en.gravatar.com/) on the map and in the profile. Gravatars can be a huge time saver when working with social network data!

#### 3. Use pipes to separate multiple values

For columns with multiple values in a single cell (such as tags, skills, hobbies, etc), you need to separate them using the pipe character `|`. If you're already separating them using commas, just use find-and-replace to swap out the commas for the pipe character `|` before importing.

#### 4. Try to be selector friendly

[Selectors](../selectors.md) provide a simple way to slice up your data. By keeping your field names and values selector-friendly, you'll be able to write much shorter queries.

Use single words for your element types, connection types, and tags. By doing so you'll be able to use shorthand selectors in the [Advanced Editor](../../overview/view-editors.md#advanced-editor), such as:

* `person` To select all elements with type "Person"
* `personal-connection` To select all connections with type "Personal"
* `project.priority` To select all projects tagged "priority"

If you include special characters or multiple words, you'll have to use longer selector code instead (e.g. `["element type"="Government Sector"]`)—and that's just not nearly as much fun!

#### 5. Ask for help!

Still have questions? Having trouble structuring your data? [Let us know!](../../about/where-can-i-get-help.md) We've massaged _a lot_ of data to get it into Kumu's format, and we're happy to help.
