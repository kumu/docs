# Building your first map

Now that you've chosen a template, you'll land on this blank screen:

![](/images/blank-ui.png)

Your first step is to decide whether you will be building your map by hand or importing from a spreadsheet.


## Building your map by hand

**Use the green "+" button.** Add an element by clicking the green "+" button at the bottom of the map and choose "add element". Type the name of the element you want to add and then hit enter. Add a connection by clicking the green "+" button and choose "add connection". Type the name of the elements you want to connect and hit enter. You can also select an element before choosing "add connection" and that element will automatically be included in the from input for the add connection interface.

<p class="alert alert">
  Speed up this process by using keyboard shortcuts! Just hit "e" to add an element and "c" to add a connection.
</p>

**Sketch mode.** Activate sketch mode by clicking the green "+" button and then clicking "sketch mode". Once activated, you can add an element by clicking anywhere on the map and you can add a connection by dragging from an existing element. You can move elements by holding alt while dragging the element.

**Alt and click or click & drag.** Alt is a great shortcut for building a map. Hold alt and click anywhere on the map to add an element. Hold alt and drag from an existing element to add a connection.

## Importing data

**Import data from a spreadsheet.** Drag a spreadsheet onto the map or click the green "+" button at the bottom of the map. Make sure your spreadsheet (.xlsx or .csv) includes the following columns:

- *For elements:* Label, Type (optional), Description (optional)
- *For connections:* From, To, Type (optional), Label (optional)

Additional fields can be imported by including extra columns in your spreadsheet. Here's an example:

<table class="table">
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
      <td>Co-Founder and CEO, always<br> up for learning</td>
      <td>Founder|Male|Runner</td>
    </tr>
    <tr>
      <td>Kumu</td>
      <td>Company</td>
      <td>A web-based platform<br>for mapping relationships...</td>
      <td>Mapping|Technology</td>
    </tr>
  </tbody>
</table>

And here's a sample of what your connection spreadsheet might look like:

<table class="table">
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

<a class="btn" href="/decorations.md">Next: Creating data-driven decorations</a>
