# Selector reference

Selectors provide a powerful, friendly way to slice through maps,
based on [Cascading Style Sheets (CSS)](https://developer.mozilla.org/en-US/docs/Web/CSS) selectors.

If you're familiar with CSS, you'll feel right at home. If you haven't seen or used CSS, don't worry! All the selector patterns you'll ever need are documented in this reference. To see examples of how selectors can be used, check out our [general guide on selectors](/guides/selectors.html).

There are two reference tables on this page. The first shows you all the different kinds of selectors you can use in Kumu, and the second table gives details about logical operators that can be used inside of certain selectors.

In the first table, you'll notice that the word "slug" appears a lot. A [slug](/guides/slugs.html) is a piece of text that has had all letters converted to lowercase, all special characters removed, and all spaces and replaced with hyphens. So, when you see something like `type-slug` in the table below, this will be replaced in your custom selector with something like `private-company` or `individual` or another "slug" version of an element type.

## Selectors

<table id="selectors-reference" class="table border-bottom"></table>


## Operators
<table class="table border-bottom">
  <tr>
    <th class="text-left">Operator</th>
    <th class="text-left">Description</th>
  </tr>
  <tr>
    <td><code>=</code></td>
    <td>is equal to</td>
  </tr>
  <tr>
    <td><code>!=</code></td>
    <td>is not equal to</td>
  </tr>
  <tr>
    <td><code>^=</code></td>
    <td>starts with</td>
  </tr>
  <tr>
    <td><code>$=</code></td>
    <td>ends with</td>
  </tr>
  <tr>
    <td><code>*=</code></td>
    <td>text contains</td>
  </tr>
  <tr>
    <td><code>~=</code></td>
    <td>list of values includes (this operator matches full values)</td>
  </tr>
  <tr>
    <td><code>></code></td>
    <td>is greater than</td>
  </tr>
  <tr>
    <td><code>>=</code></td>
    <td>is greater than or equal to</td>
  </tr>
  <tr>
    <td><code><</code></td>
    <td>is less than</td>
  </tr>
  <tr>
    <td><code>&lt;=</code></td>
    <td>is less than or equal to</td>
  </tr>
</table>

<script
  type="text/javascript"
  src="https://unpkg.com/@alexvipond/kumu-docs-extracted@0.1.1/lib/index.umd.js"
></script>
<script type="text/javascript">
const selectorReference = [
  {
    'Selector': `&#42;`,
    'What it selects': `All elements, connections, and loops`,
  },
  {
    'Selector': `element`,
    'What it selects': `All elements`,
  },
  {
    'Selector': `connection`,
    'What it selects': `All connections`,
  },
  {
    'Selector': `loop`,
    'What it selects': `All loops`,
  },
  {
    'Selector': `type-slug`,
    'What it selects': `All elements whose element type slug matches <code>type-slug</code>`,
  },
  {
    'Selector': `type-slug-connection`,
    'What it selects': `All connections whose connection type slug matches <code>type-slug</code>`,
  },
  {
    'Selector': `#label-slug`,
    'What it selects': `The item whose label slug matches <code>label-slug</code>. `,
  },
  {
    'Selector': `#assigned-id-slug`,
    'What it selects': `The item whose <a href="/faq/how-do-I-avoid-duplicating-data.html">assigned ID</a> slug matches <code>assigned-id-slug</code>. `,
  },
  {
    'Selector': `#system-id`,
    'What it selects': `The item whose system ID matches <code>system-id</code>. `,
  },
  {
    'Selector': `.tag`,
    'What it selects': `All items whose Tags field contains <code>tag</code>. Note that this selector starts with a dot <code>.</code>`,
  },
  {
    'Selector': `["field name" operator "field value"]`,
    'What it selects': `All items that have a <a href="/overview/kumus-architecture.html#fields">field name and field value</a> that meet the condition of the <code>operator</code> (valid operators are listed below this table)`,
  },
  {
    'Selector': `["field name"]`,
    'What it selects': `All items that have any value in the field whose name matches <code>field name</code>`,
  },
  {
    'Selector': `[!"field name"]`,
    'What it selects': `All items that have no value in the field whose name matches <code>field name</code>`,
  },
  {
    'Selector': `:from(selector)`,
    'What it selects': `All connections coming from an item that matches the <code>selector</code>`,
  },
  {
    'Selector': `:to(selector)`,
    'What it selects': `All connections going to an item that matches the <code>selector</code>`,
  },
  {
    'Selector': `:directed`,
    'What it selects': `All directed connections`,
  },
  {
    'Selector': `:undirected`,
    'What it selects': `All undirected connections`,
  },
  {
    'Selector': `:mutual`,
    'What it selects': `All mutual connections`,
  },
  {
    'Selector': `:focus`,
    'What it selects': `All items at the root of a <a href="/guides/focus.html">focus setting</a>`,
  },
  {
    'Selector': `:orphan`,
    'What it selects': `All elements that have zero connections (including connections that have been filtered out)`,
  },
  {
    'Selector': `:not(selector)`,
    'What it selects': `All items that do <b>not</b> match the <code>selector</code>`,
  },
  {
    'Selector': `:loop(selector)`,
    'What it selects': `All items that are part of a loop matching <code>selector</code>`,
  },
  {
    'Selector': `this-selector --&gt; that-selector`,
    'What it selects': `All items matching <code>this-selector</code> connected to items that match <code>that-selector</code>`,
  },
  {
    'Selector': `this-selector &lt;-- that-selector`,
    'What it selects': `All items matching <code>this-selector</code> connected from items that match <code>that-selector</code>`,
  },
  {
    'Selector': `this-selector &lt;--&gt; that-selector`,
    'What it selects': `All items matching <code>this-selector</code> connected to or from items that match <code>that-selector</code>`,
  },
  {
    'Selector': `this-selector &lt;-connection-selector-&gt; that-selector`,
    'What it selects': `All items matching <code>this-selector</code> connected to or from items that match <code>that-selector</code> via connections that match <code>connection-selector</code>`,
  }
]

KumuDocsExtracted.appendTable(
  { id: 'selectors-reference', reference: selectorReference },
  {
    transforms: {
      Selector: selector => `<code>${selector}</code>`,
    },
    effects: {
      th: {
        DEFAULT: th => th.classList.add('text-left'),
        Selector: th => {
          th.classList.add('text-left');
          th.style.width = '50%';
        },
      },
    },
  }
);
</script>

<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/guides/selector-reference.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
