# Cluster control

**Use**

Add simple button-driven clustering.

**Example**

```
cluster {
  cluster-option {
    value: person by "Projects" as "Project";
    label: "Project";
  }

  cluster-option {
    value: person by "Geographic region" as "Location";
    label: "Location";
  }
}
```

**Supported properties**

* `cluster-option` is included for each button and nests the corresponding settings.
  * `value` supplies the [advanced clustering setting](/clustering.html#advanced-clustering).
  * `label` is the label for the button.
