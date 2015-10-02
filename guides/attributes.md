# Attributes

Attributes add incredible power to Kumu. Use attributes to track whatever custom fields you need and modify the settings to enable things like checklists, prompts, currencies, and much more.

## What is an attribute?

## Add an attribute
To add an attribute, select an element or connection and then click the "Create Your First Attribute" or "+ New Attribute" button in the sidebar. You'll be prompted to add a name and a value for the attribute.

By default, new attributes are set to accept only one value and not prompt users with suggested values. While this is an easy way to get started adding values, you may have times where you want people to pick from a list of defined values (level of influence: high, medium or low) or multiple values from a list (skills: project management, web development, leadership, public speaking).

## Customize an attribute
To customize the settings for a given attribute, click the label of the attribute and you'll see a dropdown appear with the following options:

- **Name** - change the name of your attribute
- **Type** - string, text, URL, number
- **Limit** - one value **OR** none (one or more values)
- **Category** - for grouping attributes in sections
- **Visibility** - public **OR** private (whether or not viewers can see a given attribute)
- **Clustering** - whether to allow clustering by this attribute
- **More** - access the full attribute settings, relevance, and delete

Let's look at a few of these options in more depth:

### Attribute type
Below are the choices for the attribute format and guidance on when to use each:

- **String** - This is the default value and used when entering simple short pieces of text
- **Text** - Used for longer text fields like notes, addresses, and anywhere you want to use markdown formatting
- **URL** - Used for website addresses and emails
- **Number** - Used for numerical values that don't fit into the below categories

### Attribute prompt
Attribute prompt is managed by clicking "more" and then "settings" in the dropdown. Below are the choices for the attribute prompt and guidance on when to use each:

- **None** - Use when you'd like to turn off any prompts for attribute values
- **Autocomplete** - Use when you'd like a tag-like interface for prompting values that match the current input
- **List** - Use when you want to pick from a list of defined values

### Attribute category
By default, all attributes are ordered alphabetically based on the name of the attribute. You can also group attributes by assigning them a category. For example, you may want to have all financial information (FY 2012 Investment, FY 2013 Investment and Cumulative Investment) under the category "Financials". You can create multiple categories and each will be ordered alphabetically.

We reserve a few category names that we give special treatment to:

- **General** - This is the default. Attributes in this category will live at the top of the attribute section and won't have an explicit category label.
- **Footnotes** - This category is meant for things like attribution and citing your sources. Attributes in this category will always be listed at the bottom of the profile.

## Attribute relevance
You can also manage attribute relevance through the project's settings to prevent irrelevant attributes getting in the way of your work. Navigate to the main menu of your project and then click on the settings tab (<i class="fa fa-cog"></i>). You'll be presented with a list of all element and connection types within your project. If you click edit, you'll see a list of checkboxes for each of the attributes.

![attribute relevance](/images/attribute-relevance-revised.png)

By default, all attributes are shown for all types. If you'd like to limit the attributes that are shown, simply click edit and then uncheck the attribute you'd like to hide in the profile for a given type. Label, type, description, and tags are always shown for all types regardless of what you enter. Above is an example of customizing the profile of elements with type of "Company" to only show Attribution, Image, Website, and URL.

## Attribute ordering
You can also use the attribute relevance menu to change the order attributes are listed in the profile. By default all attributes are listed alphabetically, either all within the general category or within another category specified by you. The order of attributes is unique to each element type so you'll need an element type assigned to whatever elements you want to change the order for.

Click edit underneath the relevant type and then uncheck at least one attribute to hide it from the profile (otherwise the order won't save). Simply drag and drop the attributes and then click "Done" and you'll see the new order reflected in the profile.

Here's a quick video overview of how it all works:

{% video %}https://vimeo.com/102600374{% endvideo %}

<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/guides/attributes.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
