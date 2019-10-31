# How do I edit virtual elements?

[Kumu's clustering feature](/guides/clustering.html) creates new elements and connections in your map and marks them as "Virtual".

This is a useful way to explicitly indicate which items are part of yoour permanent dataset and which ones are simply created on the fly by clustering, but one downside is that you can't edit a virtual element or connection directly. In other words, you can't save descriptions, tags, or any other custom profile data for virtual elements and connections.

To work around this, you can convert all virtual items to permanent ones by following these steps:
1. Turn on your clustering settings to create all of your desired virtual elements and connections
2. Export all data from the map to Excel
3. Turn off your clustering settings
4. Import the Excel document that you downloaded in step 2

The imported data will include the elements and connections created by clustering, and will create permanent versions of them. You can now click on those items and edit their profiles normally.


## Showing and hiding the virtual elements after converting to permanent

Unless you [fine-tuned your cluster settings](/guides/clustering.html#fine-tune-cluster-settings), each now-permanent element and connection will have the name of the original field stored as its Type. For example, if you cluster by a "Sector" field to connect organizations by their sector, each Sector element and connection will have the type "Sector".

Given that information, you can create a [filter control](/guides/controls/filter-control.html) to show and hide the elements and connections. Here is some sample code to get you started:

```
@controls {
  top {
    filter {
      target: element["element type" = "My Field"], connection["connection type" = "My Field"];
      as: buttons;

      option {
        selector: *;
        label: "Connect by My Field";
        default: true;
      }
    }
  }
}
```

In the code above, replace `My Field` with the name of the field you originally connected by (e.g. `Sector`, using the example from before). If you fine-tuned cluster settings, replace `My Field` with the custom Type you assigned instead.

To learn what other settings you can customize in the control, check out [our full guide on controls](/guides/controls.html).

<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/faq/how-do-i-edit-virtual-elements.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
