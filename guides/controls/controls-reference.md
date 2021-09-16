# Controls reference

While it's possible to [build controls using the Basic Editor](/guides/controls.md#add-controls-through-the-basic-editor), using the [Advanced Editor](/overview/view-editors.md#advanced-editor) is the only way to unlock the full flexibility of controls. This guide lists each `property` that can be used in the Advanced Editor, each possible `value` the properties can accept, and which `@controls` can recognize the properties and values.

There are two reference tables in this guide—the first lists properties for **static** controls (nothing happens when map readers click on these controls), and the second lists properties for **interactive** controls (map readers can interact with the map by clicking on these controls).

Hover over the information icon <i class="fa fa-info-circle" data-placement="left" data-html="true" title="I ❤︎ information!"></i> at the far right of the table rows to see additional details and valid values for each property (when there are multiple valid values, we've listed them as separate snippets of `inline code`). All values are unitless.

If you find a property or a value that's not documented here, [let us know](mailto:support@kumu.io)!

[Jump to the reference for interactive controls](#interactive-controls).


## Static controls

<table id="static-controls-reference" class="table borderless controls-reference"></table>


## Interactive controls

<table id="interactive-controls-reference" class="table borderless controls-reference"></table>

<script
  type="text/javascript"
  src="https://unpkg.com/@alexvipond/kumu-docs-extracted@0.1.1/lib/index.umd.js"
></script>

<script type="text/javascript">
const staticControlsReference = [
  {
    "Property": "background-color",
    "Color-legend": true,
    "Image": true,
    "Label": true,
    "Text": true,
    "Title": true,
    "SNA-dasboard": true,
    "INFO Description": "Defines background color of control",
    "INFO Valid values": "color"
  },
  {
    "Property": "color",
    "Color-legend": true,
    "Image": "",
    "Label": true,
    "Text": true,
    "Title": true,
    "SNA-dasboard": true,
    "INFO Description": "Defines color of control's text",
    "INFO Valid values": "color"
  },
  {
    "Property": "font-family",
    "Color-legend": true,
    "Image": "",
    "Label": true,
    "Text": true,
    "Title": "",
    "SNA-dasboard": true,
    "INFO Description": "Defines font family of control's text",
    "INFO Valid values": "family-name|generic-family"
  },
  {
    "Property": "font-size",
    "Color-legend": "",
    "Image": "",
    "Label": true,
    "Text": true,
    "Title": "",
    "SNA-dasboard": true,
    "INFO Description": "Defines size of control's text",
    "INFO Valid values": "number"
  },
  {
    "Property": "font-style",
    "Color-legend": true,
    "Image": "",
    "Label": true,
    "Text": true,
    "Title": true,
    "SNA-dasboard": true,
    "INFO Description": "Defines style of control's text",
    "INFO Valid values": "normal|italic"
  },
  {
    "Property": "font-weight",
    "Color-legend": true,
    "Image": "",
    "Label": true,
    "Text": true,
    "Title": "",
    "SNA-dasboard": true,
    "INFO Description": "Defines weight of control's text",
    "INFO Valid values": "number"
  },
  {
    "Property": "height",
    "Color-legend": true,
    "Image": true,
    "Label": true,
    "Text": true,
    "Title": true,
    "SNA-dasboard": true,
    "INFO Description": "Defines height of control",
    "INFO Valid values": "number"
  },
  {
    "Property": "margin",
    "Color-legend": true,
    "Image": true,
    "Label": true,
    "Text": true,
    "Title": true,
    "SNA-dasboard": true,
    "INFO Description": "Defines space between the control and other controls on the map",
    "INFO Valid values": "number"
  },
  {
    "Property": "metrics",
    "Color-legend": "",
    "Image": "",
    "Label": "",
    "Text": "",
    "Title": "",
    "SNA-dasboard": true,
    "INFO Description": "Defines which metrics will be included in the dashboard",
    "INFO Valid values": "element-count|connection-count|density|reciprocity|diameter|average-degree|average-path-length"
  },
  {
    "Property": "opacity",
    "Color-legend": true,
    "Image": true,
    "Label": true,
    "Text": true,
    "Title": true,
    "SNA-dasboard": true,
    "INFO Description": "Defines opacity of the control",
    "INFO Valid values": "0..1"
  },
  {
    "Property": "padding",
    "Color-legend": true,
    "Image": true,
    "Label": true,
    "Text": true,
    "Title": true,
    "SNA-dasboard": true,
    "INFO Description": "Defines space between the control's border and its contents",
    "INFO Valid values": "number"
  },
  {
    "Property": "src",
    "Color-legend": "",
    "Image": true,
    "Label": "",
    "Text": "",
    "Title": "",
    "SNA-dasboard": "",
    "INFO Description": "Defines the source of the image",
    "INFO Valid values": "url"
  },
  {
    "Property": "text-align",
    "Color-legend": "",
    "Image": "",
    "Label": true,
    "Text": true,
    "Title": true,
    "SNA-dasboard": true,
    "INFO Description": "Defines alignment of text within the control",
    "INFO Valid values": "center|left|right"
  },
  {
    "Property": "value",
    "Color-legend": "",
    "Image": "",
    "Label": true,
    "Text": true,
    "Title": true,
    "SNA-dasboard": "",
    "INFO Description": "Any plain text string. Markdown and some HTML allowed.",
    "INFO Valid values": "string"
  },
  {
    "Property": "width",
    "Color-legend": true,
    "Image": true,
    "Label": true,
    "Text": true,
    "Title": true,
    "SNA-dasboard": true,
    "INFO Description": "Defines width of control",
    "INFO Valid values": "number"
  }
]

KumuDocsExtracted.appendTable(
  { id: 'static-controls-reference', reference: staticControlsReference },
  {
    transforms: {
      DEFAULT: (value, { checkmark }) => value === true ? checkmark : `${value}`,
    },
    effects: {
      th: {
        DEFAULT: th => th.classList.add('text-center'),
        Property: th => th.classList.add('text-left'),
      }
    }
  }
)

KumuDocsExtracted.appendSearchBox({ id: 'static-controls-reference', hasInfo: true })
</script>

<script type="text/javascript">
const interactiveControlsReference = [
  {
    "Property": "as",
    "Filter": true,
    "Showcase": true,
    "Cluster": true,
    "Tagged-timeline": true,
    "View toggle": true,
    "INFO Description": "Defines how the control is presented",
    "INFO Valid values": "labels|buttons|dots|dropdown"
  },
  {
    "Property": "background-color",
    "Filter": true,
    "Showcase": true,
    "Cluster": true,
    "Tagged-timeline": true,
    "View toggle": "",
    "INFO Description": "Defines background color of control",
    "INFO Valid values": "color"
  },
  {
    "Property": "by",
    "Filter": true,
    "Showcase": true,
    "Cluster": true,
    "Tagged-timeline": "",
    "View toggle": "",
    "INFO Description": "Defines the field to filter, showcase, or cluster by",
    "INFO Valid values": "''Field Name'"
  },
  {
    "Property": "color",
    "Filter": true,
    "Showcase": true,
    "Cluster": true,
    "Tagged-timeline": true,
    "View toggle": true,
    "INFO Description": "Defines color of control's text (labels, placeholders, and summaries only)",
    "INFO Valid values": "color"
  },
  {
    "Property": "default",
    "Filter": true,
    "Showcase": true,
    "Cluster": "",
    "Tagged-timeline": true,
    "View toggle": true,
    "INFO Description": "Defines which options should be selected by default",
    "INFO Valid values": "none|show-all|select all|''field value 1', 'field value 2',..."
  },
  {
    "Property": "except",
    "Filter": true,
    "Showcase": true,
    "Cluster": "",
    "Tagged-timeline": "",
    "View toggle": "",
    "INFO Description": "Allows you to remove field values from the available choices",
    "INFO Valid values": "''field value 1', 'field value 2',..."
  },
  {
    "Property": "font-family",
    "Filter": true,
    "Showcase": true,
    "Cluster": true,
    "Tagged-timeline": true,
    "View toggle": true,
    "INFO Description": "Defines font family of control's text (labels, placeholders, and summaries only)",
    "INFO Valid values": "family-name|generic-family"
  },
  {
    "Property": "font-size",
    "Filter": true,
    "Showcase": true,
    "Cluster": true,
    "Tagged-timeline": true,
    "View toggle": true,
    "INFO Description": "Defines size of control's text (labels, placeholders, and summaries only)",
    "INFO Valid values": "number"
  },
  {
    "Property": "font-style",
    "Filter": true,
    "Showcase": true,
    "Cluster": true,
    "Tagged-timeline": true,
    "View toggle": true,
    "INFO Description": "Defines style of control's text (labels, placeholders, and summaries only)",
    "INFO Valid values": "normal|italic"
  },
  {
    "Property": "font-weight",
    "Filter": true,
    "Showcase": true,
    "Cluster": true,
    "Tagged-timeline": true,
    "View toggle": true,
    "INFO Description": "Defines weight of control's text (labels, placeholders, and summaries only)",
    "INFO Valid values": "number"
  },
  {
    "Property": "height",
    "Filter": true,
    "Showcase": true,
    "Cluster": true,
    "Tagged-timeline": true,
    "View toggle": true,
    "INFO Description": "Defines height of control",
    "INFO Valid values": "number"
  },
  {
    "Property": "label",
    "Filter": true,
    "Showcase": true,
    "Cluster": true,
    "Tagged-timeline": true,
    "View toggle": true,
    "INFO Description": "Adds a label above the control",
    "INFO Valid values": "\"My Label\""
  },
  {
    "Property": "margin",
    "Filter": true,
    "Showcase": true,
    "Cluster": true,
    "Tagged-timeline": true,
    "View toggle": true,
    "INFO Description": "Defines space between the control and other controls on the map",
    "INFO Valid values": "number"
  },
  {
    "Property": "mode",
    "Filter": "",
    "Showcase": true,
    "Cluster": "",
    "Tagged-timeline": "",
    "View toggle": "",
    "INFO Description": "Controls how the selection is showcased. <code>normal</code> is the default and showcases the selection plus any connections between the showcased elements. <code>loose</code> showcases the selection plus neighboring elements. <code>strict</code> only showcases the selection itself.",
    "INFO Valid values": "normal|loose|strict"
  },
  {
    "Property": "multiple",
    "Filter": true,
    "Showcase": true,
    "Cluster": true,
    "Tagged-timeline": true,
    "View toggle": true,
    "INFO Description": "Controls whether more than one option can be selected at a time",
    "INFO Valid values": "true|false|match-all"
  },
  {
    "Property": "only",
    "Filter": true,
    "Showcase": true,
    "Cluster": "",
    "Tagged-timeline": "",
    "View toggle": "",
    "INFO Description": "Allows you to explicitly define which field values should be included as available choices",
    "INFO Valid values": "''field value 1', 'field value 2',..."
  },
  {
    "Property": "opacity",
    "Filter": true,
    "Showcase": true,
    "Cluster": true,
    "Tagged-timeline": true,
    "View toggle": true,
    "INFO Description": "Defines opacity of the control",
    "INFO Valid values": "0..1"
  },
  {
    "Property": "options",
    "Filter": "",
    "Showcase": "",
    "Cluster": "",
    "Tagged-timeline": "",
    "View toggle": true,
    "INFO Description": "Allows you to explicitly define which options should be included as available choices",
    "INFO Valid values": "''partial-view-1', 'partial-view-2',..."
  },
  {
    "Property": "padding",
    "Filter": true,
    "Showcase": true,
    "Cluster": true,
    "Tagged-timeline": true,
    "View toggle": true,
    "INFO Description": "Defines space between the control's border and its contents",
    "INFO Valid values": "number"
  },
  {
    "Property": "placeholder",
    "Filter": true,
    "Showcase": true,
    "Cluster": true,
    "Tagged-timeline": true,
    "View toggle": true,
    "INFO Description": "The text to display when nothing is selected<br>(for <code>as: dropdown</code> only)",
    "INFO Valid values": "string"
  },
  {
    "Property": "range",
    "Filter": "",
    "Showcase": "",
    "Cluster": "",
    "Tagged-timeline": true,
    "View toggle": "",
    "INFO Description": "Defines the years that should be included",
    "INFO Valid values": "year..year"
  },
  {
    "Property": "summary",
    "Filter": true,
    "Showcase": true,
    "Cluster": true,
    "Tagged-timeline": true,
    "View toggle": true,
    "INFO Description": "Summarizes the options that have been selected<br>(for <code>as: dropdown</code> only)",
    "INFO Valid values": "string"
  },
  {
    "Property": "target",
    "Filter": true,
    "Showcase": true,
    "Cluster": "",
    "Tagged-timeline": true,
    "View toggle": "",
    "INFO Description": "Defines which items will be affected by the control",
    "INFO Valid values": "selector"
  },
  {
    "Property": "width",
    "Filter": true,
    "Showcase": true,
    "Cluster": true,
    "Tagged-timeline": true,
    "View toggle": true,
    "INFO Description": "Defines width of control",
    "INFO Valid values": "number"
  }
]

KumuDocsExtracted.appendTable(
  { id: 'interactive-controls-reference', reference: interactiveControlsReference },
  {
    transforms: {
      DEFAULT: (value, { checkmark }) => value === true ? checkmark : `${value}`,
    },
    effects: {
      th: {
        DEFAULT: th => th.classList.add('text-center'),
        Property: th => th.classList.add('text-left'),
      }
    }
  }
)

KumuDocsExtracted.appendSearchBox({ id: 'interactive-controls-reference', hasInfo: true })
</script>

<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/guides/controls/controls-reference.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
