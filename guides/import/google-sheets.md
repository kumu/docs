# Google Sheets

Our Google Sheets integration populates a map using the contents of a spreadsheet hosted on Google Drive. Any data you add, edit, or delete in a Google Sheet connected to a Kumu project will be reflected in Kumu as soon as you refresh the page of your project.&#x20;

There are two versions of the Google Sheets integration, private and public:

* **Private** is more secure and uses oAuth to authorize Kumu to access the sheet. It means that your Google Sheet is private to you and anyone you explicitly give permission to view and/or edit your file.
* The **Public** integration requires you to make your data publicly viewable on the internet. Anyone with the link to your Google Sheet will be able to view and/or edit and/or comment your data

{% hint style="info" %}
Pssst! We wrote ["The Ultimate Guide to using Google Sheets with Kumu"](https://blog.kumu.io/the-ultimate-guide-to-using-google-sheets-with-kumu-d46e96fd47a8) to help you unlock all of the Google Sheets superpowers. Have a look if you're interested in external integrations, crowdsourcing, visualizing surveys etc!&#x20;
{% endhint %}

## Connect your Google Sheet to Kumu

1. Create a spreadsheet with Google Sheets
2. [Structure your data](./#structure-your-data-for-kumu) for Kumu
3. Click on "Share" in the top-right corner of your Google Sheet. Make sure to check below the "General access" section whether your file is _private_ (set to "restricted"), or _public_ (set to "Anyone with the link"), and make a change if necessary. Then click "Copy link"
4. Open your Kumu project, click the green **+** button at the bottom of the screen, and choose "Import" from the popup
5. Paste the shareable link in the correct box below the text "Link map to public / private Google Sheet"
6. Click “Import spreadsheet”&#x20;
7. Wait for Kumu to review your data, and then click Save Import
8. Voilà, your data will appear!

{% hint style="info" %}
Seeing errors during your Google Sheets import? Visit the [common pitfalls](import.md#common-pitfalls) guide to help troubleshoot.&#x20;
{% endhint %}

{% hint style="success" %}
Get your hands dirty! Find some example data sets, and their accompanying maps, in our [public data samples folder](https://drive.google.com/drive/folders/1\_xoIFJ2snCcxta1Fw8AwrxWCe5YlKXCW?usp=sharing).
{% endhint %}

## Caveats for the Google Sheets integration

Unlike file-based imports, the Google Sheets integration is an ongoing import. The elements and connections will be fetched from the spreadsheet on the fly each time you refresh the page. None of the data will be saved to your project or Kumu's servers.

* Elements and connections are read-only within Kumu—all edits to the underlying data must be made within the spreadsheet. You can’t make edits in [Table](../table.md) either.&#x20;
* The above also implies that Google Sheets provides a _one-way_ synchronization: Kumu pulls data from Google Sheets _into_ the Kumu project, but can’t send updated information _back_ from Kumu to Google Sheets.
* Some Kumu features (such as [pinning elements in place](../../faq/how-do-keep-elements-from-moving.md) and [direct decorations](../direct-decorations.md)) don’t work for maps connected to a Google Sheet.

## Crowdsourcing data through Google Sheets

Since Google Sheets can be opened up to the general public for editing, this integration is a great way to crowdsource maps where individuals can add and update their own data, without having to give everyone full edit access to the project on Kumu.

This video gives an explanation of how to crowdsource data with Google Sheets:\


{% embed url="https://www.youtube.com/embed/0eZQ2MPGzv4" %}
