# Slugs

In Kumu, a **slug** is a piece of text that has had all letters converted to lowercase, all special characters removed, and all spaces replaced with hyphens. Kumu uses slugs in many different places:

- In the URL bar
- Inside of [selectors](/guides/selectors.html)
- In [Markdown](/guides/markdown.html)
- In the [Advanced Editor](/overview/view-editors.html#advanced-editor)

Knowing how to recognize, read, and write slugs is a skill that will come in handy, especially if you work in the Advanced Editor! Here are some sample slugs:

<table class="table border-bottom">
  <tr>
    <th>Original text</th>
    <th>Slug</th>
  </tr>
  <tr>
    <td>My First Kumu Project</td>
    <td><code>my-first-kumu-project</code></td>
  </tr>
  <tr>
    <td>Honolulu, HI</td>
    <td><code>honolulu-hi</code></td>
  </tr>
  <tr>
    <td>Friends don't let friends map alone!</td>
    <td><code>friends-dont-let-friends-map-alone</code></td>
  </tr>
  <tr>
    <td>Method and System for Dynamically Creating and Exploring Graph Structures</td>
    <td><code>method-and-system-for-dynamically-creating-and-exploring-graph-structures</code></td>
  </tr>
  <tr>
    <td>От Kumu с любовью</td>
    <td><code>от-kumu-с-любовью</code></td>
  </tr>
</table>


## Create your own slug

Need a slug for your project? Use this tool to create your own:

<style>
#result {
  position: relative;
}

#copy-icon {
  position: absolute;
  top: 2px;
  right: 0;
  background-color: #f7f7f7;
  padding: 5px;
}

#copy-success {
  opacity: 0;
  transition: all 0.2s ease;
}
</style>

<div id="#simply-slugify">
  <input id="simple-slugify-input" type="text" class="search-box" onkeyup="simpleSlugify()" placeholder="Type a word or phrase...">

  <div id="result">
    <input id="simple-slugify-result" type="text" class="search-box input-code" value="" placeholder="Slug will appear here...">

    <i class="fa fa-copy" id="copy-icon" onclick="copySlug()">  </i>
  </div>

  <p class="alert alert-success alert-sm" id="copy-success">Copied to clipboard</p>

<script>
  function simpleSlugify() {
    var string = document.querySelector("#simple-slugify-input").value;

    var success = document.querySelector("#copy-success");
    success.style.opacity = "0";

    string = string
      .normalize("NFD").replace(/[\u0300-\u036f]/g, '') // remove diacritics
      .replace(/'/g, '')
      .replace(/[^a-z0-9]/gi, '-')
      .replace(/-{2,}/g, '-')
      .replace(/^-/, '').replace(/-$/, '')
      .toLowerCase();

    var result = document.querySelector("#simple-slugify-result");
    result.value = string;
  }

  function copySlug() {
    var slug = document.querySelector('#simple-slugify-result');

    slug.select();
    document.execCommand("copy");

    var success = document.querySelector("#copy-success");
    success.style.opacity = "1";
  }
</script>

<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/guides/slugs.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
