# Controls reference

While it's possible to [build controls using the Basic Editor](/guides/controls.md#add-controls-through-the-basic-editor), using the [Advanced Editor](/overview/view-editors.md#advanced-editor) is the only way to unlock the full flexibility of controls. This guide lists each `property` that can be used in the Advanced Editor, each possible `value` the properties can accept, and which `@controls` can recognize the properties and values.

There are two reference tables in this guide—the first lists properties for **static** controls (nothing happens when map readers click on these controls), and the second lists properties for **interactive** controls (map readers can interact with the map by clicking on these controls).

Hover over the information icon <i class="fa fa-info-circle" data-placement="left" data-html="true" title="I ❤︎ information!"></i> at the far right of the table rows to see additional details and valid values for each property (when there are multiple valid values, we've listed them as separate snippets of `inline code`). All values are unitless.

If you find a property or a value that's not documented here, [let us know](mailto:support@kumu.io)!

[Jump to the reference for interactive controls](#interactive-controls).


## Static controls

<table id="static-controls-reference-table" class="table borderless controls-reference"></table>


## Interactive controls

<table id="interactive-controls-reference-table" class="table borderless controls-reference"></table>

<script type="text/javascript">
(() => {
  const staticControlsReference = [
    {
      "Property": "background-color",
      "Color-legend": true,
      "Image": true,
      "Label": true,
      "Text": true,
      "Title": true,
      "SNA-dashboard": true,
      info: {
        description: "Defines background color of control",
        validValues: ["color"]
      }
    },
    {
      "Property": "color",
      "Color-legend": true,
      "Image": false,
      "Label": true,
      "Text": true,
      "Title": true,
      "SNA-dashboard": true,
      info: {
        description: "Defines color of control's text",
        validValues: ["color"]
      }
    },
    {
      "Property": "font-family",
      "Color-legend": true,
      "Image": false,
      "Label": true,
      "Text": true,
      "Title": false,
      "SNA-dashboard": true,
      info: {
        description: "Defines font family of control's text",
        validValues: ["family-name", "generic-family"]
      }
    },
    {
      "Property": "font-size",
      "Color-legend": false,
      "Image": false,
      "Label": true,
      "Text": true,
      "Title": false,
      "SNA-dashboard": true,
      info: {
        description: "Defines size of control's text",
        validValues: ["number"]
      }
    },
    {
      "Property": "font-style",
      "Color-legend": true,
      "Image": false,
      "Label": true,
      "Text": true,
      "Title": true,
      "SNA-dashboard": true,
      info: {
        description: "Defines style of control's text",
        validValues: ["normal", "italic"]
      }
    },
    {
      "Property": "font-weight",
      "Color-legend": true,
      "Image": false,
      "Label": true,
      "Text": true,
      "Title": false,
      "SNA-dashboard": true,
      info: {
        description: "Defines weight of control's text",
        validValues: ["number"]
      }
    },
    {
      "Property": "height",
      "Color-legend": true,
      "Image": true,
      "Label": true,
      "Text": true,
      "Title": true,
      "SNA-dashboard": true,
      info: {
        description: "Defines height of control",
        validValues: ["number"]
      }
    },
    {
      "Property": "margin",
      "Color-legend": true,
      "Image": true,
      "Label": true,
      "Text": true,
      "Title": true,
      "SNA-dashboard": true,
      info: {
        description: "Defines space between the control and other controls on the map",
        validValues: ["number"]
      }
    },
    {
      "Property": "metrics",
      "Color-legend": false,
      "Image": false,
      "Label": false,
      "Text": false,
      "Title": false,
      "SNA-dashboard": true,
      info: {
        description: "Defines which metrics will be included in the dashboard",
        validValues: ["element-count", "connection-count", "density", "reciprocity", "diameter", "average-degree", "average-path-length"]
      }
    },
    {
      "Property": "opacity",
      "Color-legend": true,
      "Image": true,
      "Label": true,
      "Text": true,
      "Title": true,
      "SNA-dashboard": true,
      info: {
        description: "Defines opacity of the control",
        validValues: ["0..1"]
      }
    },
    {
      "Property": "padding",
      "Color-legend": true,
      "Image": true,
      "Label": true,
      "Text": true,
      "Title": true,
      "SNA-dashboard": true,
      info: {
        description: "Defines space between the control's border and its contents",
        validValues: ["number"]
      }
    },
    {
      "Property": "src",
      "Color-legend": false,
      "Image": true,
      "Label": false,
      "Text": false,
      "Title": false,
      "SNA-dashboard": false,
      info: {
        description: "Defines the source of the image",
        validValues: ["url"]
      }
    },
    {
      "Property": "text-align",
      "Color-legend": false,
      "Image": false,
      "Label": true,
      "Text": true,
      "Title": true,
      "SNA-dashboard": true,
      info: {
        description: "Defines alignment of text within the control",
        validValues: ["center", "left", "right"]
      }
    },
    {
      "Property": "value",
      "Color-legend": false,
      "Image": false,
      "Label": true,
      "Text": true,
      "Title": true,
      "SNA-dashboard": false,
      info: {
        description: "Any plain text string. Markdown and some HTML allowed.",
        validValues: ["string"]
      }
    },
    {
      "Property": "width",
      "Color-legend": true,
      "Image": true,
      "Label": true,
      "Text": true,
      "Title": true,
      "SNA-dashboard": true,
      info: {
        description: "Defines width of control",
        validValues: ["number"]
      }
    }
  ]

  KumuDocsExtracted.appendTable(
    { id: 'static-controls-reference-table', reference: staticControlsReference },
    {
      transforms: {
        DEFAULT: (value, { checkmark }) => {
          switch (value) {
            case true:
              return checkmark
            case false:
              return ''
            default:
              return value
          }
        }
      },
      effects: {
        th: {
          DEFAULT: th => th.classList.add('text-center'),
          Property: th => th.classList.add('text-left'),
        }
      }
    }
  )

  KumuDocsExtracted.appendSearchBox({ id: 'static-controls-reference-table', hasInfo: true })
})()
</script>

<script type="text/javascript">
(() => {
  const interactiveControlsReference = [
    {
      "Property": "as",
      "Filter": true,
      "Showcase": true,
      "Cluster": true,
      "Tagged-timeline": true,
      "View toggle": true,
      info: {
        description: "Defines how the control is presented",
        validValues: ["labels", "buttons", "dots", "dropdown"]
      }
    },
    {
      "Property": "background-color",
      "Filter": true,
      "Showcase": true,
      "Cluster": true,
      "Tagged-timeline": true,
      "View toggle": false,
      info: {
        description: "Defines background color of control",
        validValues: ["color"]
      }
    },
    {
      "Property": "by",
      "Filter": true,
      "Showcase": true,
      "Cluster": true,
      "Tagged-timeline": false,
      "View toggle": false,
      info: {
        description: "Defines the field to filter, showcase, or cluster by",
        validValues: ["''Field Name'"]
      }
    },
    {
      "Property": "color",
      "Filter": true,
      "Showcase": true,
      "Cluster": true,
      "Tagged-timeline": true,
      "View toggle": true,
      info: {
        description: "Defines color of control's text (labels, placeholders, and summaries only)",
        validValues: ["color"]
      }
    },
    {
      "Property": "default",
      "Filter": true,
      "Showcase": true,
      "Cluster": false,
      "Tagged-timeline": true,
      "View toggle": true,
      info: {
        description: "Defines which options should be selected by default",
        validValues: ["none", "show-all", "select all", "''field value 1', 'field value 2',..."]
      }
    },
    {
      "Property": "except",
      "Filter": true,
      "Showcase": true,
      "Cluster": false,
      "Tagged-timeline": false,
      "View toggle": false,
      info: {
        description: "Allows you to remove field values from the available choices",
        validValues: ["''field value 1', 'field value 2',..."]
      }
    },
    {
      "Property": "font-family",
      "Filter": true,
      "Showcase": true,
      "Cluster": true,
      "Tagged-timeline": true,
      "View toggle": true,
      info: {
        description: "Defines font family of control's text (labels, placeholders, and summaries only)",
        validValues: ["family-name", "generic-family"]
      }
    },
    {
      "Property": "font-size",
      "Filter": true,
      "Showcase": true,
      "Cluster": true,
      "Tagged-timeline": true,
      "View toggle": true,
      info: {
        description: "Defines size of control's text (labels, placeholders, and summaries only)",
        validValues: ["number"]
      }
    },
    {
      "Property": "font-style",
      "Filter": true,
      "Showcase": true,
      "Cluster": true,
      "Tagged-timeline": true,
      "View toggle": true,
      info: {
        description: "Defines style of control's text (labels, placeholders, and summaries only)",
        validValues: ["normal", "italic"]
      }
    },
    {
      "Property": "font-weight",
      "Filter": true,
      "Showcase": true,
      "Cluster": true,
      "Tagged-timeline": true,
      "View toggle": true,
      info: {
        description: "Defines weight of control's text (labels, placeholders, and summaries only)",
        validValues: ["number"]
      }
    },
    {
      "Property": "height",
      "Filter": true,
      "Showcase": true,
      "Cluster": true,
      "Tagged-timeline": true,
      "View toggle": true,
      info: {
        description: "Defines height of control",
        validValues: ["number"]
      }
    },
    {
      "Property": "label",
      "Filter": true,
      "Showcase": true,
      "Cluster": true,
      "Tagged-timeline": true,
      "View toggle": true,
      info: {
        description: "Adds a label above the control",
        validValues: ["'My Label'"]
      }
    },
    {
      "Property": "margin",
      "Filter": true,
      "Showcase": true,
      "Cluster": true,
      "Tagged-timeline": true,
      "View toggle": true,
      info: {
        description: "Defines space between the control and other controls on the map",
        validValues: ["number"]
      }
    },
    {
      "Property": "mode",
      "Filter": false,
      "Showcase": true,
      "Cluster": false,
      "Tagged-timeline": false,
      "View toggle": false,
      info: {
        description: "Controls how the selection is showcased. <code>normal</code> is the default and showcases the selection plus any connections between the showcased elements. <code>loose</code> showcases the selection plus neighboring elements. <code>strict</code> only showcases the selection itself.",
        validValues: ["normal", "loose", "strict"]
      }
    },
    {
      "Property": "multiple",
      "Filter": true,
      "Showcase": true,
      "Cluster": true,
      "Tagged-timeline": true,
      "View toggle": true,
      info: {
        description: "Controls whether more than one option can be selected at a time",
        validValues: ["true", "false", "match-all"]
      }
    },
    {
      "Property": "only",
      "Filter": true,
      "Showcase": true,
      "Cluster": false,
      "Tagged-timeline": false,
      "View toggle": false,
      info: {
        description: "Allows you to explicitly define which field values should be included as available choices",
        validValues: ["''field value 1', 'field value 2',..."]
      }
    },
    {
      "Property": "opacity",
      "Filter": true,
      "Showcase": true,
      "Cluster": true,
      "Tagged-timeline": true,
      "View toggle": true,
      info: {
        description: "Defines opacity of the control",
        validValues: ["0..1"]
      }
    },
    {
      "Property": "options",
      "Filter": false,
      "Showcase": false,
      "Cluster": false,
      "Tagged-timeline": false,
      "View toggle": true,
      info: {
        description: "Allows you to explicitly define which options should be included as available choices",
        validValues: ["''partial-view-1', 'partial-view-2',..."]
      }
    },
    {
      "Property": "padding",
      "Filter": true,
      "Showcase": true,
      "Cluster": true,
      "Tagged-timeline": true,
      "View toggle": true,
      info: {
        description: "Defines space between the control's border and its contents",
        validValues: ["number"]
      }
    },
    {
      "Property": "placeholder",
      "Filter": true,
      "Showcase": true,
      "Cluster": true,
      "Tagged-timeline": true,
      "View toggle": true,
      info: {
        description: "The text to display when nothing is selected<br>(for <code>as: dropdown</code> only)",
        validValues: ["string"]
      }
    },
    {
      "Property": "range",
      "Filter": false,
      "Showcase": false,
      "Cluster": false,
      "Tagged-timeline": true,
      "View toggle": false,
      info: {
        description: "Defines the years that should be included",
        validValues: ["year..year"]
      }
    },
    {
      "Property": "summary",
      "Filter": true,
      "Showcase": true,
      "Cluster": true,
      "Tagged-timeline": true,
      "View toggle": true,
      info: {
        description: "Summarizes the options that have been selected<br>(for <code>as: dropdown</code> only)",
        validValues: ["string"]
      }
    },
    {
      "Property": "target",
      "Filter": true,
      "Showcase": false,
      "Cluster": false,
      "Tagged-timeline": true,
      "View toggle": false,
      info: {
        description: "Defines which items will be affected by the control",
        validValues: ["selector"]
      }
    },
    {
      "Property": "width",
      "Filter": true,
      "Showcase": true,
      "Cluster": true,
      "Tagged-timeline": true,
      "View toggle": true,
      info: {
        description: "Defines width of control",
        validValues: ["number"]
      }
    }
  ]


  KumuDocsExtracted.appendTable(
    { id: 'interactive-controls-reference-table', reference: interactiveControlsReference },
    {
      transforms: {
        DEFAULT: (value, { checkmark }) => {
          switch (value) {
            case true:
              return checkmark
            case false:
              return ''
            default:
              return value
          }
        }
      },
      effects: {
        th: {
          DEFAULT: th => th.classList.add('text-center'),
          Property: th => th.classList.add('text-left'),
        }
      }
    }
  )

  KumuDocsExtracted.appendSearchBox({ id: 'interactive-controls-reference-table', hasInfo: true })
})()
</script>

<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/guides/controls/controls-reference.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
