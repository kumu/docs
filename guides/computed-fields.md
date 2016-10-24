# Computed fields

*Note: Computed fields are in beta release so expect changes to this document and limitations in how computed fields can be used.*

Computed fields are a special type of field that allow you to calculate values automatically based on an expression that you specify.

## Creating a computed field

You can create a computed field in one of two ways:

1. Add a new field and then click on the field label to access the settings. You'll see an "expression" input under "Advanced Settings" where you can type the expression (no `=` required).
1. Type the expression into the value input the first time you create a field from the profile of the element. Make sure to include `=`before your expression.

## Supported syntax

We use [mathjs](http://mathjs.org/docs/expressions/syntax.html) to power computed fields and you have their complete expression syntax to use within Kumu. It's pretty similar to writing an equation in Excel or Google Sheets (with the caveat that we don't support all the functions you'd find in a spreadsheet like `concatenate` or `vlookup`).

If the field you are using in your expression is a single word, you can just write it as-is in the expression. If it is more than one word, you'll need to wrap the field name with two mustaches on either end {% raw %} `{{my longer than neccessary field name}}` {% endraw %}.

Here's some examples:

* Add two values `betweenness + eigenvector`
* Multiply two values {% raw %}`{{level of influence}} * degree`{% endraw %}
* Create a more complicated ratio `(indegree + outdegree)/betweenness`
* Check for a value and output a number `(archetype == "yes" ? 1 : 0)`
* Take the log of a value `log(networth)`

That's just the tip of the iceberg. Head over to [mathjs](http://mathjs.org/docs/expressions/syntax.html) if you're interested in what else is possible.

## Things to watch out for

When you are building expressions, you need to be careful not to build an expression that may lead to an undefined value or an error. Here's a few common stumbling blocks:

### Dividing by 0
For those of you whose last math class was decades go - remember you can't divide by 0 (or you can, but we'll display the answer as "infinity").

One way you may run into this is when creating an equation for leverage. Leverage is usually defined as "outdegree/indegree". If you have an element with no incoming connections, you're going to get "infinity" as the answer which will throw off your decorations.

Instead, try tweaking the expression so that it is:

```
(outdegree + 1)/(indegree + 1)
```

### Order of operations matters
Order of operations applies to expressions so make sure to wrap the portions of your expression that you want to be calculated first in parentheses. For example...

```
indegree + outdegree / betweenness
```

will get a different result from

```
(indegree + outdegree) / betweenness
```

### Avoid null values

If you have a field without a value defined, it can cause errors when running the expression. Make sure each element has at least some value and if you are using yes/no types of fields, make sure to include "no" instead of just leaving it blank.

## Advanced usage

Some of you are interested in creating an uber analysis metric based on whether there are qualitative and or quantitative values in other fields. You can create conditional statements that provide different values based on whether the criteria is met.

The below example involves two fields, "archetype" and "trend" that each store "yes" or "no" values. We're essentially looking to give a point anytime the answer is "yes" and then add up those points. Here's the expression:

```
(archetype == "yes" ? 1 : 0)+(trend == "yes" ? 1 : 0)
```

Make sure that you're including "no" for the fields that aren't "yes" instead of just leaving them blank as it will throw an error that will prevent the expression from running.

## Limitations

Currently you can only create a computed field that pulls values from other standard fields in Kumu. You cannot create a computed field which pulls values from other computed fields. This may be possible in future releases but is not currently supported.

For example, if you created a computed field "total contributions" which was based on the expression {% raw %}`{{amount for}} + {{amount against}}`{% endraw %}, you couldn't use "total contributions" in another computed field that was looking at the relative percentage of for vs. against.

This **wouldn't** work:

{% raw %}
```
{{amount for}} - {{amount against}} / {{total contributions}}
```
{% endraw %}

But just including the expression again for "total contributions" **would** work:

{% raw %}
```
{{amount for}} - {{amount against}} / ({{amount for}} + {{amount against}})
```
{% endraw %}

<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/guides/computed-fields.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
