# Social Network Analysis Dashboard control

With the SNA Dashboard control, you can add a dashboard that shows key metrics for your network map.

![SNA Dashboard](/images/sna-dashboard.png)

Here's the syntax for adding the SNA Dashboard control in the Advanced Editor:

```
@controls {
  bottom {
    sna-dashboard {}
  }
}
```

You can also use the `metrics` property to specify exactly which metrics get included:

```
@controls {
  bottom {
    sna-dashboard {
      metrics: element-count, connection-count, density, average-degree;
    }
  }
}
```

![SNA Dashboard with custom metrics](/images/sna-dashboard-custom-metrics.png)

Here are all the possible values you can use in the `metrics` property:

- `element-count`
- `connection-count`
- `density`
- `reciprocity`
- `diameter`
- `average-degree`
- `average-path-length`

[Check out our controls reference](/guides/controls/controls-reference.md) to see the full list of properties and values recognized by the SNA-dashboard control.


## Available metrics

The metrics currently available in the dashboard are:

<style>
tr th:first-child {
    width: 25%;
}
</style>

<table class="table borderless"><tbody>
        <tr>
            <th class="text-left">Metric</th>
            <th class="text-left">Description</th>
        </tr>

        <tr>
              <td>Total elements</td>
              <td>A count of all the elements on your map</td>
        </tr>
        <tr>
              <td>Total connections</td>
              <td>A count of all the connections on your map</td>
        </tr>
        <tr>
            <td>Density</td>
            <td>Compares the number of actual connections to the number of potential connections in a network. `1` is the highest possible density number, and `0` is the lowest.</td>
        </tr>
        <tr>
            <td>Reciprocity</td>
            <td>In a directed network, reciprocity measures the likelihood that two elements will have an equal number of connections traveling in either direction between them.</td>
        </tr>
        <tr>
            <td>Diameter</td>
            <td>The shortest path between the two elements that are furthest apart in a network. If any part of your network is completely disconnected, the diameter will be infinity ∞.</td>
        </tr>
        <tr>
            <td>Average degree</td>
            <td>Calculates the average number of connections across all elements in the network.</td>
        </tr>
        <tr>
            <td>Average path length</td>
            <td>Calculates the average number of steps it takes to get from one element to another in the network. If any part of your network is completely disconnected, or if any element has only incoming or only outgoing connections, the average path length will be infinity ∞.</td>
        </tr>
</tbody></table>





<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/guides/controls/sna-dashboard-control.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
