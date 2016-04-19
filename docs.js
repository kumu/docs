require(["gitbook"], function(gitbook) {
  gitbook.events.bind("start", function(e, config) {
    init();
  });

  gitbook.events.bind("page.change", function() {
    init();
  });
});

// The start event never fires so we just call init ourselves on dom ready.
$(init);

function init() {
  $("[title]").tooltip();
}

// Adding code to get the anchor links working

var target = window.location.hash;

window.location.hash = "";

$(document).ready(function() {
    setTimeout(function() {
        document.location.hash = target;
    }, 50);
});
