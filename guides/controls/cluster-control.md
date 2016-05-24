# Cluster control

**Use**

Add simple button-driven clustering.

**Example**

```
@controls {
  bottom {
    cluster {
      option {
        value: person by "Projects" as "Project";
        label: "Project";
      }

      option {
        value: person by "Geographic region" as "Location";
        label: "Location";
      }
    }
  }
}

```

**Supported properties**

Use nested `option` blocks to define how the map can be clustered. Each `option` accepts the following properties:

  * `value` the [advanced cluster rule](../clustering.md#advanced-clustering) to cluster by
  * `label` the label to include for the button
