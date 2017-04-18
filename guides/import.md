# Import

Imports make it quick and easy to start visualizing your existing data, but you'll need to make a few tweaks before your file is ready for import.

<iframe src="https://player.vimeo.com/video/96531654" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>


## Structuring your data for Kumu
Take the time to read our guide on structuring your data for Kumu before you start building your import spreadsheet:
<script async class="speakerdeck-embed" data-id="3fa28aedbab94c04870608fce4649dac" data-ratio="1.77777777777778" src="//speakerdeck.com/assets/embed.js"></script>

## Preparing your file for import

First, make sure you are working with either an .xlsx or .csv file format (no .xls allowed). Tweak your spreadsheet so it contains the following columns:

**For elements**

* Label
* Type (optional)
* Description (optional)

**For connections**

* From
* To
* Type (optional)
* Label (optional)

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

That's it! Now click the green "+" button at the bottom of your map or drag and drop the file onto the map. You'll have the option to review the import before finalizing to double-check that everything imported correctly. Click save and you're all set!

**Get your hands dirty!** <a href="../content/paypal-mafia.xlsx" target="_blank">Click here for a sample import file</a> for the <a href="https://kumu.io/jeff/paypal-mafia">PayPal Mafia</a> that you can use to see how imports work with real data before creating your import file.

## Common pitfalls

Having trouble with your import? Here are a few common pitfalls...

### Trying to import .xls files

If you run into this error message

<p class="alert alert-danger">
Sorry, there was an error with your import. <br/>Error: Import format not recognized: auto
</p>

...you're trying to import an .xls file. Save it as .xlsx and try again!

### Not starting your element file with the "Label" column

Label should be the first column in your spreadsheet for an element import.

### Funny character issues?

If you're running into funny character issues, please make sure your file is UTF-8 encoded.

## Integrating with Google Sheets

Our Google Spreadsheets integration populates a map using the contents of a spreadsheet hosted on Google Drive. This is a great way to crowdsource community maps without having to give everyone access to the project on Kumu.

### Limitations of Google Sheets with Kumu
Unlike file-based imports, this sets up an ongoing import. The elements and connections will be fetched from the spreadsheet on the fly each time you refresh the page. None of the data will be saved to Kumu's servers and the imported elements and connections are read-only within Kumu. All edits must be made within the spreadsheet.

* Elements and connections are read only within Kumu (edits must be made within the spreadsheet).
* You can't pin elements in place when they're created from a Google Sheet.
* Presentations do not work with maps fed by a Google Sheets integration.
* Metrics do not work well with maps supplied by a Google Sheet.

### Setting up the Google Sheets Integration

There are two versions of the Google Sheets integration, private and public. Private is more secure and uses oAuth to authorize Kumu to access the sheet while the public integration requires you to turn on link sharing for the sheet.

#### Private Google Sheets Instructions

*Note: This is a paid add-on that costs $29/project to activate.*

1. Create a new spreadsheet in Google Drive
1. Make sure the spreadsheet includes the required columns mentioned above
1. Activate the paid add-on by clicking the link in the Google Sheets import tab in Kumu
1. Paste the spreadsheet link into the corresponding box within the import modal in Kumu

#### Public Google Sheets Instructions

1. Create a new spreadsheet in Google Drive
1. Make sure the spreadsheet includes the required columns mentioned above
1. Click the "Share" button in the upper right
1. Click "Get shareable link"
1. Set the permissions to "Anyone with the link can view"
1. Copy the link url and paste into the corresponding box within the import modal in Kumu

## Master Imports in 5 Simple Steps

Looking to hone your skills importing data to Kumu? These tips will turn you into a master importer in two minutes flat.

1. <a href="#separate-sheets">Separate elements and connections into their own sheets</a>
1. <a href="#reserved-fields">Take advantage of reserved fields</a>
1. <a href="#piped-lists">Use pipes to separate | multiple | values</a>
1. <a href="#selector-friendly">Try to be selector friendly</a>
1. <a href="#ask-for-help">Ask for help!</a>


<h3 id="separate-sheets">1. Separate elements and connections into their own sheets</h3>

Since elements and connections often have very different sets of fields, we recommend using one worksheet for each type.  If you prefer keeping everything within a single sheet, you can use two blank lines to signal the start of a new section instead. If you are using a .csv file, you'll need to either use the single sheet method or create separate files for elements and connections.

<h3 id="reserved-fields">2. Take advantage of reserved fields</h3>

Additional fields can be imported simply by adding new columns. Feel free to track as few or as many as you want. Our reserved fields aren't required, but they can save you time and unlock powerful features.

<dl>
    <dt>Type</dt>
    <dd>
      Use the type field to categorize elements and connections. Common element
      types include person, project, and company. Common connection types include
      personal, business, and family.
      Try to be <a href="#selector-friendly">selector friendly</a> with your types if you can.
    </dd>

    <dt>Description</dt>
    <dd>
      The description is the first thing everyone will read so make sure to provide
      a short introduction.  If there's a compelling story behind the element or
      connection, the description is the best place to put it.
    </dd>

    <dt>Tags</dt>
    <dd>
      Tags are used to store short pieces of information. Make sure to separate
      multiple tags using a pipe "|".
      Try to be <a href="#selector-friendly">selector friendly</a> with your tags if you can.
    </dd>

    <dt>Image</dt>
    <dd>Include an image URL and we'll display it on the map and in the profile.</dd>

    <dt>Email</dt>
    <dd>
      Add an email and we'll automatically include their
      <a href="http://en.gravatar.com/">gravatar</a> on the map and in the profile.
      Gravatars can be a huge time saver when working with social data.
    </dd>
</dl>

<h3 id="piped-lists">3. Use pipes to separate multiple values</h3>

For columns with multiple values in a single cell (such as tags, skills, hobbies, etc), you need to separate them using the "|" character. If you're already separating them using commas, just use find and replace to swap out the commas for "|" before importing.

<h3 id="selector-friendly">4. Try to be selector friendly</h3>

Selectors provide a simple way to slice up your data. By keeping your field names and values selector friendly you'll be able to write much shorter queries.

Use single words for your element types, connection types, and tags. By doing so you'll be able to use shorthand selectors such as:
<ul>
      <li><code>person</code> To select all elements with type "Person"</li>
      <li><code>personal-connection</code> To select all connections with type "Personal"</li>
      <li><code>project.priority</code> To select all projects tagged "priority"</li>
</ul>

If you include special characters or multiple words you'll have to use the longhand instead (such as <code>["element type"="Government Sector"]</code>) and that's just not nearly as much fun.

<h3 id="ask-for-help">5. Ask for help!</h3>

Still have questions? <a href="mailto:support@kumu.io">Ask us!</a>

<p class="alert"><strong>Note:</strong> If you're running into funny character issues, please make sure your file is UTF-8 encoded.</p>

<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/guides/import.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
