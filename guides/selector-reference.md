# Selector reference

Selectors provide a powerful, friendly way to slice through maps,
based on [Cascading Style Sheets (CSS)](https://developer.mozilla.org/en-US/docs/Web/CSS) selectors.

If you're familiar with CSS, you'll feel right at home. If you haven't seen or used CSS, don't worry! All the selector patterns you'll ever need are documented in this reference. To see examples of how selectors can be used, check out our [general guide on selectors](/guides/selectors.html).

There are two reference tables on this page. The first shows you all the different kinds of selectors you can use in Kumu, and the second table gives details about logical operators that can be used inside of certain selectors.

In the first table, you'll notice that the word "slug" appears a lot. A slug is a value that has had all spaces and special characters replaced with hyphens, and all letters converted to lowercase. So, when you see something like `type-slug` in the table below, this will be replaced in your custom selector with something like `private-company` or `individual` or another "slug" version of an element type. Try creating your own slug with this tool:

<input id="simple-slugify-input" type="text" class="search-box" onkeyup="simpleSlugify()" placeholder="Type to create slug...">

<input id="simple-slugify-result" type="text" class="search-box" value="" placeholder="Slug will appear here...">

<script>
  function simpleSlugify() {
    var string = document.querySelector("#simple-slugify-input").value;

    string = string
      .replace(/'/g, '')
      .replace(/[^a-záéíóúñäëïöüçøñâêîôû0-9]/gi, '-')
      .replace(/-{2,}/g, '-')
      .replace(/^-/, '').replace(/-$/, '')
      .toLowerCase();

    var result = document.querySelector("#simple-slugify-result");
    result.value = string;
  }
</script>

## Selectors

<table id="selectors-table" class="table border-bottom">
  <tr>
    <th class="text-left" style="width: 50%;">Selector</th>
    <th class="text-left">What it selects</th>
  </tr>
  <tr>
    <td><code>*</code></th>
    <td>All elements, connections, and loops</td>
  </tr>
  <tr>
    <td><code>element</code></th>
    <td>All elements</td>
  </tr>
  <tr>
    <td><code>connection</code></th>
    <td>All connections</td>
  </tr>
  <tr>
    <td><code>loop</code></th>
    <td>All loops</td>
  </tr>
  <tr>
    <td><code>type-slug</code></th>
    <td>All elements whose element type slug matches <code>type-slug</code></td>
  </tr>
  <tr>
    <td><code>type-slug-connection</code></th>
    <td>All connections whose connection type slug matches <code>type-slug</code></td>
  </tr>
  <tr>
    <td><code>#label-slug</code></th>
    <td>The item whose label slug matches <code>label-slug</code>. </td>
  </tr>
  <tr>
    <td><code>#assigned-id-slug</code></th>
    <td>The item whose <a href="/faq/how-do-I-avoid-duplicating-data.html">assigned ID</a> slug matches <code>assigned-id-slug</code>. </td>
  </tr>
  <tr>
    <td><code>#system-id</code></th>
    <td>The item whose system ID matches <code>system-id</code>. </td>
  </tr>
  <tr>
    <td><code>.tag</code></th>
    <td>All items whose Tags field contains <code>tag</code>. Note that this selector starts with a dot <code>.</code></td>
  </tr>
  <tr>
    <td><code>["field name" operator "field value"]</code></th>
    <td>All items that have a <a href="/overview/kumus-architecture.html#fields">field name and field value</a> that meet the condition of the <code>operator</code> (valid operators are listed below this table)</td>
  </tr>
  <tr>
    <td><code>["field name"]</code></th>
    <td>All items that have any value in the field whose name matches <code>field name</code></td>
  </tr>
  <tr>
    <td><code>[!"field name"]</code></th>
    <td>All items that have no value in the field whose name matches <code>field name</code></td>
  </tr>
  <tr>
    <td><code>:from(selector)</code></th>
    <td>All connections coming from an item that matches the <code>selector</code></td>
  </tr>
  <tr>
    <td><code>:to(selector)</code></th>
    <td>All connections going to an item that matches the <code>selector</code></td>
  </tr>
  <tr>
    <td><code>:directed</code></th>
    <td>All directed connections</td>
  </tr>
  <tr>
    <td><code>:undirected</code></th>
    <td>All undirected connections</td>
  </tr>
  <tr>
    <td><code>:mutual</code></th>
    <td>All mutual connections</td>
  </tr>
  <tr>
    <td><code>:focus</code></th>
    <td>All items at the root of a <a href="/guides/focus.html">focus setting</a></td>
  </tr>
  <tr>
    <td><code>:not(selector)</code></th>
    <td>All items that do <b>not</b> match the <code>selector</code></td>
  </tr>
</table>

## Operators

<table class="table border-bottom">
  <tr>
    <th class="text-left">Operator</th>
    <th class="text-left">Description</th>
  </tr>
  <tr>
    <td><code>=</code></th>
    <td>is equal to</td>
  </tr>
  <tr>
    <td><code>!=</code></th>
    <td>is not equal to</td>
  </tr>
  <tr>
    <td><code>^=</code></th>
    <td>starts with</td>
  </tr>
  <tr>
    <td><code>$=</code></th>
    <td>ends with</td>
  </tr>
  <tr>
    <td><code>*=</code></th>
    <td>text contains</td>
  </tr>
  <tr>
    <td><code>~=</code></th>
    <td>list of values includes</td>
  </tr>
  <tr>
    <td><code>&#8250;</code></th>
    <td>is greater than</td>
  </tr>
  <tr>
    <td><code>&#8249;</code></th>
    <td>is less than</td>
  </tr>
  <tr>
    <td><code>&#8250;=</code></th>
    <td>is greater than or equal to</td>
  </tr>
  <tr>
    <td><code>&#8249;=</code></th>
    <td>is less than or equal to</td>
  </tr>
</table>

<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/guides/selector-reference.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
