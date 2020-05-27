# Import

Kumu's import feature makes it possible to map your existing data, without recreating every bit of it by hand. Whether your data is in [Excel](#import-from-excel-or-csv), a [comma-separated values (CSV) file](#import-from-excel-or-csv), or [Google Sheets](#import-from-google-sheets), you can follow this guide to quickly bring it into Kumu.

<iframe src="https://player.vimeo.com/video/96531654" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>


## Structure your data for Kumu
<!-- Take the time to read our guide on structuring your data for Kumu before you start building your import spreadsheet:
<script async class="speakerdeck-embed" data-id="3fa28aedbab94c04870608fce4649dac" data-ratio="1.77777777777778" src="//speakerdeck.com/assets/embed.js"></script>

## Prepare your file for import -->

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

All of these optional columns can be used to add data to [fields](/guides/fields.html) inside your elements and connections. If you want to store multiple values inside of one cell (for example, tags or keywords), just separate each value with the pipe character `|`. If you put multiple elements in the "To" cell of a connection, separating each element with the pipe character `|`, Kumu will draw a connection from the "From" element to each separate element in the "To" cell.

<p class="alert alert-info">
  It's also possible to use <b>ID</b> as the first column header in element and connection sheets. To learn how and why you would do that, <a class="alert-link" href="/faq/how-do-I-avoid-duplicating-data.html">check out our guide on avoiding duplicate data</a>.
</p>

Here's a sample element import spreadsheet:

<table class="table table-condensed">
      <thead>
        <tr>
          <th>Label</th>
          <th>Type</th>
          <th>Description</th>
          <th>Tags</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Jeff Mohr</td>
          <td>Person</td>
          <td>Co-Founder and CEO, always<br /> up for learning</td>
          <td>Founder|Male|Runner</td>
        </tr>
        <tr>
          <td>Kumu</td>
          <td>Company</td>
          <td>A web-based platform<br />for mapping relationships...</td>
          <td>Mapping|Technology</td>
        </tr>
      </tbody>
</table>


And here's a sample connection import spreadsheet:

<table class="table table-condensed">
      <thead>
        <tr>
          <th>From</th>
          <th>To</th>
          <th>Type</th>
          <th>Strength</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Barack</td>
          <td>Michelle</td>
          <td>Personal</td>
          <td>Strong</td>
        </tr>
        <tr>
          <td>Ed Snowden</td>
          <td>NSA</td>
          <td>Contractor</td>
          <td>It's complicated</td>
        </tr>
      </tbody>
</table>

<p class="alert alert-success">
  <b>Get your hands dirty!</b> <a class="alert-link" href="../content/paypal-mafia.xlsx" target="_blank" class="_">Click here to download a sample import file</a> for the <a class="alert-link" target="_blank" class="_" href="https://kumu.io/jeff/paypal-mafia">PayPal Mafia map</a>. You can examine this file to see how imports work with real data before creating your import file.
</p>

<p class="alert alert-info">
  If you need to convert an <a class="alert-link" href="https://en.wikipedia.org/wiki/Adjacency_matrix" target="_blank" rel="noopener">adjacency matrix</a> to meet Kumu's format, see our <a class="alert-link" href="/faq/how-do-i-restructure-my-adjacency-matrix.html" target="_blank" rel="noopener">"How do I restructure my adjacency matrix"</a> FAQ.
</p>

#### Ignore unneeded sheets

Sometimes, you'll have other sheets in your Excel or Google Sheets workbook that aren't formatted for Kumu and shouldn't be imported, but need to stay in the workbook. If that's the case, just add `(ignore)` to the name of the sheet, and Kumu will ignore it during the upload.


## Import from Excel or CSV

After you've [structured your data](#structure-your-data), save your spreadsheet file with either the .xslx or .csv extension (Kumu doesn't support the .xls file extension).

Then, you can import that file into Kumu in two different ways:

**1)** Simply drag and drop the file onto the map's canvas.

OR

**2)** Click the green <i class="fa fa-plus"></i> button at the bottom of your map, select **Import**, and click "Select .xslx file" (this button works for .csv files as well)

Either way, you'll have the option to review the import before finalizing to double-check that everything imported correctly. After you review the import, just click save, and you're all set!

<p class="alert alert-warning">
Seeing errors during your Excel import? You can use the <a class="alert-link" href="#common-pitfalls">common pitfalls</a> section of this guide to help troubleshoot.
</p>

## Import from Google Sheets

Our Google Sheets integration populates a map using the contents of a spreadsheet hosted on Google Drive. Since Google Sheets can be opened up to the general public for editing, this integration is a great way to crowdsource maps without having to give everyone full edit access to the project on Kumu.

<p><iframe width="560" height="315" src="https://www.youtube.com/embed/0eZQ2MPGzv4" frameborder="0" allowfullscreen></iframe></p>

There are two versions of the Google Sheets integration, private and public. Private is more secure and uses oAuth to authorize Kumu to access the sheet, while the public integration requires you to make your data publicly viewable on the internet.

<p class="alert alert-warning">
Seeing errors during your Google Sheets import? You can use the <a class="alert-link" href="#common-pitfalls">common pitfalls</a> section of this guide to help troubleshoot.
</p>

#### Private Google Sheets Instructions

1. Create your spreadsheet in Google Drive
1. [Structure your data](#structure-your-data-for-kumu)
1. Copy the private spreadsheet link from the URL bar in your browser, and go back to your Kumu map
1. Click the green <i class="fa fa-plus"></i> button, select **Import**, and click the "Google Sheets" tab
1. Under **Link to private Google Sheet**, paste your Google Sheets link into the box

#### Public Google Sheets Instructions

1. Create your spreadsheet in Google Drive
1. [Structure your data](#structure-your-data-for-kumu)
1. Click the "Share" button in the upper right
1. Click "Get shareable link"
1. Set the permissions to "**On** - public on the web (Anyone on the internet can find and access. No sign-in required.)"
1. Copy the shareable link URL, and go back to your Kumu map
1. Click the green <i class="fa fa-plus"></i> button, select **Import**, and click the "Google Sheets" tab
1. Paste your Google Sheets link into the box under **Link to public Google Sheet**


#### Caveats for the Google Sheets integration

Unlike file-based imports, the Google Sheets integration is an ongoing import. The elements and connections will be fetched from the spreadsheet on the fly each time you refresh the page. None of the data will be saved to your project or Kumu's servers, and the imported elements and connections are read-only within Kumu. All edits must be made within the spreadsheet.

* Elements and connections are read-only within Kumu—all edits to the underlying data must be made within the spreadsheet.
* You can't pin elements in place when they're created from a Google Sheet.
* Metrics can't be saved for maps fed by a Google Sheet—you would have to recalculate them every time you refresh the map.


## Common pitfalls

Having trouble with your import? Here are a few common pitfalls...

#### Not starting your file with the correct column headers

**Label** should be the first column header in your spreadsheet (cell `A1`) for an element import, and for a connection import, you should have **From** and **To** in the first two columns (cells `A1` and `B1`).

#### Not having column headers in the first row

Your column headers (e.g. Label, Type, Description, etc.) should be in row 1 of your spreadsheet.

#### Not ignoring unneeded sheets

If you have multiple sheets in your file, and you only want to import some, make sure that Kumu ignores the other sheets when importing. To do this, you can add `(ignore)` to sheet names—for example: `Sheet 3 (ignore)`.

#### Hidden data in unused cells

If it seems like your spreadsheet is taking _forever_ to load, or it's consistently throwing errors, you might have some data or formatting hiding in your unused cells. To clear all content and formatting from unused cells in Excel, [follow this Excel guide](https://support.office.com/en-us/article/clear-cells-of-contents-or-formats-9ff6b8ff-1afd-495f-8ad8-8c1f6f82a9d6).

#### Trying to import .xls files

If you run into this error message...

<p class="alert alert-danger">
Sorry, there was an error with your import. <br/>Error: Import format not recognized: auto
</p>

...you're trying to import an .xls file. Save it as .xlsx and try again!

#### Funny character issues?

If you're running into funny character issues, please make sure your import file is UTF-8 encoded.

## Master Imports in 5 Steps

Looking to hone your importing skills? These tips will turn you into a master importer:

1. [Separate elements (or element types) and connections into their own sheets](#1-separate-elements-or-element-types-and-connections-into-their-own-sheets)
1. [Take advantage of pre-named fields](#2-take-advantage-of-pre-named-fields)
1. [Use pipes to separate | multiple | values](#3-use-pipes-to-separate-multiple-values)
1. [Try to be selector friendly](#4-try-to-be-selector-friendly)
1. [Ask for help!](#5-ask-for-help)


#### 1. Separate elements (or element types) and connections into their own sheets

Since elements and connections often have very different sets of fields, we recommend using separate sheets in your workbook for each dataset. Sometimes, you'll have different types of elements (for example, people and organizations) that have very different fields. In that case, you can separate those elements into separate sheets as well. Each separate sheet can have different column headers, and Kumu will still be able to read and understand each sheet.

If you prefer keeping everything within a single sheet, you can use two blank rows to tell Kumu that a new section is starting—that is, Kumu should look at the first row of the new section to find column headers. If you are using a .csv file, this tip doesn't work—you'll need to either use the single sheet method or create separate files for elements and connections.

#### 2. Take advantage of pre-named fields

Our pre-named fields aren't required in your spreadsheet, but they get special visual treatment in [profiles](/guides/profiles.html), so it's great to use them when you can!

<dl>
    <dt>Type</dt>
    <dd>
      Use the type field to categorize elements and connections. Common element types include person, project, and company. Common connection types include personal, business, and family. <a href="#try-to-be-selector-friendly">Try to be selector friendly</a> with your types, when you can.
    </dd>

    <dt>Description</dt>
    <dd>
      The description field designed to hold longer-form content that describes an item. Descriptions can include multiple paragraphs, and even images and videos. <a href="/guides/markdown.html">You can use Markdown</a> to format each description's content.
    </dd>

    <dt>Tags</dt>
    <dd>
      The tags field is designed to hold multiple values that each describe your item in a different way. For example, a connection between a person and a non-profit might have "Strong relationship", "Board Member", "Donor", and "Advocate" all stored as separate values in the Tags field, adding rich detail to that person's relationship with the non-profit.<br><br>Make sure to separate multiple tags using a pipe "|" in your spreadsheet cells, and <a href="#try-to-be-selector-friendly">try to be selector friendly</a> with your tags, when you can.
    </dd>

    <dt>Image</dt>
    <dd>
      Include an image URL and Kumu will display it on the map and in the profile.
    </dd>

    <dt>Email</dt>
    <dd>
      Add an email and Kumu will automatically include their <a href="http://en.gravatar.com/">gravatar</a> on the map and in the profile. Gravatars can be a huge time saver when working with social network data!
    </dd>
</dl>

#### 3. Use pipes to separate multiple values

For columns with multiple values in a single cell (such as tags, skills, hobbies, etc), you need to separate them using the pipe character `|`. If you're already separating them using commas, just use find-and-replace to swap out the commas for the pipe character `|` before importing.

#### 4. Try to be selector friendly

[Selectors](/guides/selectors.html) provide a simple way to slice up your data. By keeping your field names and values selector-friendly, you'll be able to write much shorter queries.

Use single words for your element types, connection types, and tags. By doing so you'll be able to use shorthand selectors in the [Advanced Editor](/overview/view-editors.html#advanced-editor), such as:
-  `person` To select all elements with type "Person"
-  `personal-connection` To select all connections with type "Personal"
-  `project.priority` To select all projects tagged "priority"

If you include special characters or multiple words, you'll have to use longer selector code instead (e.g. `["element type"="Government Sector"]`)—and that's just not nearly as much fun!

#### 5. Ask for help!

Still have questions? Having trouble structuring your data? [Let us know!](/about/where-can-i-get-help.html) We've massaged _a lot_ of data to get it into Kumu's format, and we're happy to help.


<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/guides/import.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
