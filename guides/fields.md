# Fields

Fields allow you to save additional data about the elements, connections and loops in your map. Create whatever fields you need and modify the settings to enable things like checklists, prompts, currencies, and much more.

## Add a field
To add a field, select an element or connection and then click the "+ New Field" button in the sidebar. You'll be prompted to name the field and then provide a value for the given selection.

By default, new fields are set to accept only one value and not prompt users with suggested values. While this is an easy way to get started adding values, you may have times where you want people to pick from a list of defined values (level of influence: high, medium or low) or multiple values from a list (skills: project management, web development, leadership, public speaking).

## Customize a field
To customize the settings for a given field, click the label of the field and you'll see a dropdown appear with the following options:

- **Name** - change the name of your field
- **Type** - string, text, URL, email, number, currency
- **Limit** - one value **OR** none (one or more values)
- **Category** - for grouping fields in sections on the profile
- **Visibility** - public **OR** private (whether or not viewers can see a given field)
- **Clustering** - whether to allow clustering by this field
- **More** - access settings, relevance, or delete the field

Let's look at a few of these options in more depth:

### Field type
Below are the choices for the field format and guidance on when to use each:

- **String** - This is the default value and used when entering simple short pieces of text
- **Text** - Used for longer text fields like notes, addresses, and anywhere you want to use markdown formatting
- **URL** - Used for website addresses
- **Email** - Used for email addresses
- **Number** - Used for numerical values that don't fit into the below categories
- **Currency** - Used for financial values to be displayed with standard currentcy format ($)

### Field prompt
Field prompt is managed by clicking "more" and then "settings" in the dropdown. Below are the choices for the field prompt and guidance on when to use each:

- **None** - Use when you'd like to turn off any prompts for field values
- **Autocomplete** - Use when you'd like a tag-like interface for prompting values that match the current input
- **List** - Use when you want to pick from a list of defined values

### Field category
By default, all fields are ordered alphabetically based on the name of the field. You can also group fields by assigning them a category. For example, you may want to have all financial information (FY 2012 Investment, FY 2013 Investment and Cumulative Investment) under the category "Financials". You can create multiple categories and each will be ordered alphabetically.

We reserve a few category names that we give special treatment to:

- **General** - This is the default. Fields in this category will live at the top of the field section and won't have an explicit category label.
- **Footnotes** - This category is meant for things like attribution and citing your sources. Fields in this category will always be listed at the bottom of the profile.

## Field relevance
You can also manage field relevance through the project's settings to prevent irrelevant fields getting in the way of your work. Click the menu in the top left of your map and then click "fields". Scroll down and you'll see a "relevance" section. You can edit which fields should be included for each of the element and connection types in your project by clicking edit and unchecking the relevant fields.

![field relevance](/images/field-relevance.png)

By default, all fields are shown for all types. If you'd like to limit the fields that are shown, simply click edit and then uncheck the field you'd like to hide in the profile for a given type. Label, type, description, and tags are always shown for all types regardless of what you enter. Above is an example of customizing the profile of elements with type of "Company" to only show Image, Website, URL and Attribution.

## Field ordering
You can also use the field relevance menu to change the order fields are listed in the profile. By default all fields are listed alphabetically (and optionally broken into sections if you've assigned categories). The order of fields is unique to each element or connection type.

To change the order, click edit and then simply drag the fields to reorder them. When you are finished, click "Done" and you'll see the new order reflected in the profile.

## Deleting a field or field values
If you've created a field and want to delete it and all corresponding values, click on the label of the field in any profile and then go to more -> delete. Alternatively, use can use the menu in the upper left corner to go to the field settings page (choose fields). This will delete the field and any values assigned for any content in your project.

Occasionally you may want to delete the prompted choices for a given field. This often happens with element and connection types where you are no longer using certain values. To remove a choice, use the menu in the upper left of your map and choose "fields". Click on the field you want to edit and then just blank the input for the choice you'd like to remove by deleting all text. Scroll down and click "save" when you are done.


<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/guides/fields.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
