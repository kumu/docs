# How do I change connection curvature?

When you add multiple connections between the same two elements, they will overlap by default, giving your readers the impression that there is only one connection between those two elements. To fix this problem, you can change the curvature of some of the connections.

If the elements on either end of the connections are pinned, you can simply click and drag a connection to change its curvature. But, if the elements are floating, or if you have a lot of connections to adjust, this solution won't work. In that case, follow this guide to set up decoration rules that automatically change your connections' curvatures, even as you continue adding more data to the map.

The first step is to add information to the connections' profiles—we'll use that information to apply different curvatures to groups of connections later on.


## Use the profile to add additional information

Each connection has a profile that can be used to store additional information in various [fields](/guides/fields.md).

<img src="/images/introduction-profile.png" class="plain">

Label, Type, Description, and Tags are all examples of fields. Use these fields to provide additional context for each connection, and click **+NEW FIELD** to add a custom field.

**Good to know:** You can add the same information to multiple connection profiles at the same time, instead of clicking through each individual profile. Hold the `Shift` key on your keyboard and click on connections to select more than one.

Then, in the left side panel, use the dropdown menu to select the field you want to edit. Enter a value for that field, and you're all set!

After you fill out data in the profiles, you can use the [Advanced Editor](/overview/view-editors.md#advanced-editor) to change connection curvature.


## Change connection curvature in the Advanced Editor

To change connection curvature in the Advanced Editor, you'll need to write a [selector](/guides/selectors.md) to tell Kumu which connections you are changing, then use the `curvature` property to set the curvature. Here's an example:

```
connection["connection type"="shared resources"] {
    curvature: 0.5;
}
```
To break this down:
- `connection["connection type"="shared resources"]` is the selector. It tells Kumu, "Apply the following settings to all **connections** whose **Type** is **Shared Resources**."
- The curly braces `{}` enclose the settings that Kumu will apply to the selected connections.
- `curvature: 0.5;` tells Kumu to set those connections' curvature to `0.5`. The value for `curvature` can be any real number—positive or negative—and the default is `0.25`.

Note that if you are selecting by the Type field, you should use `connection type` in your selector instead of just `type` to make sure Kumu reads the correct field. Also note that selectors are not case-sensitive: `Shared Resources` is the same as `shared resources`.

Here are a few more examples of selectors you might find useful (explained by the comments after the `//`):

```
connection
// selects all connections on the map

connection["connection type"="funding source"]
// selects all connections whose Type is Funding Source

connection["category"]
// selects all connections with any value in the Category field (a custom field)

connection[!"description"]
// selects all connections that have a completely blank Description

connection["tags"*="grant application"]
// selects all connections whose tags include Grant Application

connection["strength">2]
// selects all connections whose Strength is greater than 2
```

## Change the curvature of a single connection

To change the curvature of a single connection between two floating elements, you can use the connection's ID as your selector in the Advanced Editor. To find the connection ID, open the connection's profile, and look for the light gray text below all the other fields.

Copy the part on the left that starts with the `#` symbol. It should look something like this: `#your-map-name/conn-wxmcqzxu`.

Paste that into the Advanced Editor, and delete `your-map-name/`, so that you are left with something similar to `#conn-wxmcqzxu` (the letters after `conn-` are random and unique for each connection). This remaining piece is your selector, you can continue writing your curvature code the same way:

```
#conn-wxmcqzxu {
    curvature: -0.25;
}
```


<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/faq/how-do-i-change-connection-curvature.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
