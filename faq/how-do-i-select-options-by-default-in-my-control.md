# How do I select options by default in my control?

[Controls](/guides/controls.html) offer a lot of flexibility to your readers, enabling them to transform your data and gain new insights in just a few clicks.

Sometimes, though, you might want to give your controls default settings that guide readers toward a particular insight you found.

Using the `default` property in your control, that's possible!

For example, imagine we want to let our reader filter by Element Type and Continent. We could set up two separate filter controls to accomplish this. If we build these controls using the Controls Builder interface in the Basic Editor, the code below is what Kumu would write for us in the Advanced Editor:

```
@controls {
  top {
    filter {
      target: element;
      by: "Element Type";
      as: buttons;
      default: show-all;
    }
    filter {
      target: element;
      by: "Continent";
      as: buttons;
      default: show-all;
    }
  }
}
```

Note that both controls already have a `default` property set to `show-all`. This tells Kumu, "When none of the options are selected, show all my data".

We can change the value of that same `default` property to change the default settings. To select certain options by default, we can remove `show-all` and replace it with a comma-separated list of options. Each option should be wrapped in double quotes.

For example, if we want our filter controls to show elements whose type is "Person" and whose continent is "Africa" or "Asia", we can change our Advanced Editor code to this:

```
@controls {
  top {
    filter {
      target: element;
      by: "Element Type";
      as: buttons;
      default: "Person";
    }
    filter {
      target: element;
      by: "Continent";
      as: buttons;
      default: "Africa", "Asia";
    }
  }
}
```

With those `default` settings in place, our readers will land on a visualization that shows a specific subset of our data by default. From there, they can select additional options in our filter controls, or even de-select our default options to bring other data back into play.

<div class="alert alert-info">
  <p>
    Setting default options on controls is particularly useful in <a href="/guides/presentations.html" class="alert-link">presentations</a> when you want a sequence of slides to show different default control settings.
  </p>
  <p>
    A lower-tech, no-code solution that works equally well is to use the side panel of the presentation to give readers instructions, for example, "On this slide, select "Person" from the buttons at the top and "Africa" and "Asia" from the buttons at the bottom.
  </p>
</div>

<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/faq/how-do-i-select-options-by-default-in-my-control.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>

