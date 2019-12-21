# Profiles

Every element, connection and loop has a **profile** that you can use to add narrative and any data that is important for you to track.

<p><iframe width="560" height="315" src="https://www.youtube.com/embed/Nsu1vXD_v0s" frameborder="0" allowfullscreen></iframe></p>

By using [views](/guides/views.html) you can bring any of the information in the profile to life through [decorations](/guides/decorate.html), [filters](/guides/filter.html), [geo maps](/guides/templates/geo.html), and more. We'll look at each of the parts of the profile one by one:


## Default fields

Every profile shows a set of default fields at the top. Those fields are:
- Label
- Type
- Description
- Tags
- Image

To learn more about each of those fields and their purposes, check ouot [our full guide on fields](/guides/fields.html).


## Custom fields

The default fields are enough to get you started on most projects, but if you have other pieces of information like sector, net worth, or anything else, you can use the bottom section of the profile to create custom fields and fill them in with values.

Custom fields can also be grouped together using their "Category" setting. Assigning a category to a a field will make sure it is listed in that category in the profile. The most common example of this is [metrics](/guides/metrics.html) fields, which are assigned to the "Metrics" category by default:

![Screenshot of field category in the profile](/images/profile-field-category.png)


## Disabling the profile

You can choose to disable the profile entirely or only for specific elements and connections. To disable the profile for all elements and connections, use the `profile` property within `@settings`:

```
@settings {
  profile: false;
}

```

To enable the profile only for elements and connections that have a description field, you could use the following:

```
@settings {
  profile: false;
}

[description] {
  profile: true;
}
```

You can swap out `[description]` for any selector. Values for the `profile` property can be either `true` or `false`.

<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/guides/profiles.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
