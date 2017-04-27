# Markdown

Markdown is an easy and powerful way to format your descriptions and long text fields using simple, natural syntax.

## The basics

*italic* and **bold**

```
*italic* and **bold**
```

An inline link: [Kumu](http://launch.kumupowered.com)

```
An inline link: [Kumu](http://launch.kumupowered.com)
```

An auto-generated link: <a href="http://launch.kumupowered.com">http://launch.kumupowered.com</a>

```
http://launch.kumupowered.com
```

## Lists

```
* Milk
* Cookies
* Marshmallows
```

```
1. California
2. Texas
3. New York
```

## Links within your account
We also support linking to elements, connections and loops (even other maps in your account) using the following format:

**Selectors**

    [link label](= selector)
    [Ryan](= #ryanmohr)

*Note: Make sure to remove any special characters and spaces from your element, connection or loop label and lowercase all letters ("Kumu is awesome!" would become "kumuisawesome").*

**Maps**

    [link label](#map-slug)

**views**

    [link label](#map-slug/view-slug)

*Note: The best way to find the "map-slug" and "view-slug" is to activate the given map and view and look at the URL in your browser. You should be able to spot it quite easily by using the above format as a guide. Then copy and paste the applicable portion.*

## Images

```
![Kumu Logo](http://blog.kumu.io/content/images/2015/08/kumu-logo-cutout-full-dark.png)
```


## Videos

Look at the embed code of the video you want to embed and grab the URL within ***src=" "***

    ![I Believe I Can Fly](//player.vimeo.com/video/31240369?color=ffffff)

## Headers

    # Header 1
    ## Header 2
    ### Header 3
    #### Header 4
    ##### Header 5
    ###### Header 6

## Code

Simply indent lines with four spaces or wrap the code with three backticks:

    ```
    <div class="footer">
        &copy; 2013 Kumu Systems LLC
    </div>
    ```


## Blockquotes

    > Add quote text here

## Tables

```
One | Two | Three
--- | --- | ---
Blue | White | Gray
Green | Yellow | Red
```

If you are using Markdown in the Description column of a [Kumu Import](https://docs.kumu.io/guides/import.html), you will have to use the [HTML table tag](https://www.w3schools.com/tags/tag_table.asp) rather than the usual Markdown syntax. Make sure to remove all line breaks from your HTML, or your table will render with a large white space above it.

```
<table><tr><th>One</th><th>Two</th><th>Three</th></tr><tr><td>Blue</td><td>White</td><td>Gray</td></tr><tr><td>Green</td><td>Yellow</td><td>Red</td></tr></table>
```

## Horizontal Rules

    Three or more dashes or asterisks --- ***

<br />
Now you know the basics of formatting with markdown. For more information, visit [Daring Fireball's markdown syntax documentation](http://daringfireball.net/projects/markdown/syntax#precode).

<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/guides/markdown.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
