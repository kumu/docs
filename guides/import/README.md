# Import

Kumu's import feature makes it possible to map your existing data, without recreating every bit of it by hand.&#x20;

{% hint style="warning" %}
Before you import your data, make sure to [structure it for Kumu to understand](import.md).
{% endhint %}

{% embed url="https://www.youtube.com/watch?v=BltdbB9SYFI" %}
Full video on importing data
{% endembed %}

## Three options for importing data

Kumu offers three ways to import data. Read about them below!

## **Excel /CSV**&#x20;

An Excel sheet or a Comma Separated Value (CSV) file is one of the most common ways to hold and edit data. &#x20;

**Pros**

* Most platforms allow you to export data into an .xlsx or a .csv file. You'll then be able to easily [structure it for Kumu](import.md) and import it into your project
* Great for bulk-editing data by dragging cells and using formulas in your Excel sheet

**Cons**&#x20;

* Not great for cases where data requires frequent updating: each edit to your Excel sheet requires a re-import into Kumu
* Re-imports into Kumu increase the chances of duplicating data. Read how to prevent this in [this guide](../../faq/how-do-I-avoid-duplicating-data.md)
* As soon as you make changes to your data directly in Kumu, your Excel sheet will be outdated. (Luckily, you can always [export your Kumu map](../export.md) into an Excel sheet to get the most updated version again)

[Visit our guide to import data with Excel/CSV here](excel-csv.md)

## **Google Sheets**

Google Sheets provides online spreadsheets that can be edited by multiple people at the same time.&#x20;

**Pros**

* Updates data in your Kumu map after each page refresh
* Great for crowdsourcing: allow people to add/edit their data without giving direct access to the Kumu map
* Allows for real-time collaboration: multiple people can work on the sheet at the same time
* Allows for versioning and activity-tracking: you can always see who made changes and/or restore to an earlier version of your data

&#x20;**Cons**

* Data in Kumu is read-only. Any changes to underlying data must be made in the Google Sheet.&#x20;
* Some Kumu features (such as [pinning elements in place](../../faq/how-do-keep-elements-from-moving.md), [popovers](../popovers.md), and [direct decorations](../direct-decorations.md)) don’t work for maps connected to a Google Sheet

[Visit our guide to import data with Google Sheets here](google-sheets.md)

## **JSON / Blueprints**

You can create our JSON imports—we call them **blueprints**—in any language from any dataset. Kumu can interpret JSON files and JSON remote links. A JSON file simply holds data structures and objects, while a JSON link is commonly used for transmitting data between web applications (e.g., sending some data from an external server to Kumu, so it can be displayed on your map).&#x20;

**Pros**

* A remote JSON link is the closest thing Kumu has to a public API
* JSON files are great to use as downloadable backups of your project

**Cons**

* Not easy for bulk-editing data
* Requires knowledge of JSON-structured data or a willingness to learn

[Visit our guide to import data with JSON here](blueprints.md)

{% hint style="success" %}
Want to dive right in? [Find some example data sets here](https://drive.google.com/drive/folders/1_xoIFJ2snCcxta1Fw8AwrxWCe5YlKXCW?usp=sharing).

Need some inspiration? [Find some Kumu Projects in the Wild here.](https://kumu.io/kumu/projects-in-the-wild#projects-in-the-wild)&#x20;

Want to add your Kumu project to Projects in the Wild? [Submit it here.](https://form.typeform.com/to/aUUuSLnj)&#x20;
{% endhint %}
