# Import / Export

Imports make it quick and easy to start visualizing your existing data, but you'll need to make a few tweaks before your file is ready for import.

{% video %}https://vimeo.com/96531654{% endvideo %}


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

Here's a sample of how your element spreadsheet might look:

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


And here's a sample of how your connection spreadsheet might look:

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

That's it! Now click the cloud icon (<i class="fa fa-cloud-upload"></i>) in the lower right corner or drag the file onto the map. You'll have the option to review the import before finalizing to double-check that everything imported correctly. Click save and you're all set!

**Get your hands dirty!** [Click here for a sample import file](../content/paypal-mafia.xlsx) for the PayPal Mafia that you can use to see how imports work with real data before creating your import file.

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


## Master Imports in 5 Simple Steps

Looking to hone your skills importing data to Kumu? These tips will turn you into a master importer in two minutes flat.

1. <a href="#separate-sheets">Separate elements and connections into their own sheets</a>
1. <a href="#reserved-attributes">Take advantage of reserved attributes</a>
1. <a href="#piped-lists">Use pipes to separate | multiple | values</a>
1. <a href="#selector-friendly">Try to be selector friendly</a>
1. <a href="#ask-for-help">Ask for help!</a>


<h3 id="separate-sheets">1. Separate elements and connections into their own sheets</h3>

Since elements and connections often have very different sets of attributes, we recommend using one worksheet for each type.  If you prefer keeping everything within a single sheet, you can use two blank lines to signal the start of a new section instead. If you are using a .csv file, you'll need to either use the single sheet method or create separate files for elements and connections.

<h3 id="reserved-attributes">2. Take advantage of reserved attributes</h3>

Additional attributes can be imported simply by adding new columns. Feel free to track as few or as many as you want. Our reserved attributes aren't required, but they can save you time and unlock powerful features.

<dl>
    <dt>Type</dt>
    <dd>
      Use the type attribute to categorize elements and connections. Common element
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
For columns with multiple values in a single cell (such as tags, skills, hobbies, etc), you need to separate them using the "|" character. If you're already separating them using commas, just use find and replace to switch before importing.

<h3 id="selector-friendly">4. Try to be selector friendly</h3>
Selectors provide a simple way to slice up your data. By keeping your attribute names and values selector friendly you'll be able to write much shorter queries.

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

## Exports

You can quickly export your entire map (or just a portion through selections). This makes it easy to refine your data in Excel (or Google Drive) and share it with others, or even transfer your data into a new project. You'll find the export button within the share menu in the upper right:

![layout overview](/images/export-within-share.png)

If you click export without anything selected, your entire map will be exported as an xlsx. If you only want to export a portion of your map, just select the things you'd like to export before clicking export.

You'll now have all of your elements and connections available as two separate sheets in a xlsx file. You can use this to edit and refine your data if you (or your teammates) prefer working in Excel. Simply drag the file back onto the map when you're done to pick up any changes.

Note: If you're working with loops, you'll need to continue to edit them within Kumu as exports don't support loops yet.

## Downloading a project blueprint

If you need to backup your entire project (all maps, perspectives, and underlying data except presentations), hold shift while clicking the export button. This will create a .json file that can be used as a snapshot in time of your project, and can be imported into a blank project to restore it.
