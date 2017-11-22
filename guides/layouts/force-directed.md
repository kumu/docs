# Force-directed layout

With the force-directed layout, Kumu positions everything automatically based on the connections between elements. While we've picked default settings that should work for most maps, you may need to tweak these settings, especially if you have an exceptionally interconnected or sparse map.

In the "General Settings" section of the Basic Editor, you have three options that will tweak the layout:

- auto
- dense
- hairball

If you'd like further control over the layout settings, you can use the Advanced Editor to customize the settings for:

- Gravity
- Particle (element) charge
- Connection length
- Connection strength

For example, to re-create the "hairball" setting, add the following to the `@settings` block :

```
@settings {
  layout-gravity: 0.0001;
  layout-particle-charge: 300;
  layout-connection-length: 500;
  layout-connection-strength: 0.1;
}
```

If you find your map has become a hairball, try the following:

- Decrease gravity
- Increase particle charge
- Lower connection strength

The force-directed layout also allows you to override any element's position by pinning it in place.

**Good to know:** The [stakeholder template](https://docs.kumu.io/guides/templates.html#stakeholder-template) and [SNA template](https://docs.kumu.io/guides/templates.html#sna-social-network-analysis-template) are set to a force-directed layout by default.

<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/guides/layouts/force-directed.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
