$(document).ready(function() {
  //ID selector
  var red = $("#red")
    .css("color", "red")
    .css("background", "blue");

  var yellow = $("#yellow")
    .css("color", "yellow")
    .css("background", "green");
  var green = $("#green")
    .css("color", "green")
    .css("background", "pink");

  // Class Selectors
  var my_class = $(".zebra").css("padding", "5px");
  //console.log(my_class.eq(1)); SELECT WITH ADJUNCT JQ METHODS

  $(".no_border").click(function() {
    $(this).addClass("zebra"); // Adds the class zebra to the object when its clicked
  });

  //Selectors by tag
  var paragraph = $("p").css("cursor", "pointer");

  paragraph.click(function() {
    var that = $(this);
    if (!that.hasClass("big")) {
      that.addClass("big");
    } else {
      that.removeClass("big");
    }
  });

  // Atribute selector
  $("[title='Google']").css("color", "#ccc");
  $("[title='Facebook]").css("color", "blue");

  // Find and parent
  //$("p, a").addClass("top_margin"); // put the two elements together to not overload the access to the DOM

  var search = $("#box").find(".highlighted"); // find method important to find those elements that belong to a class or tags or anything
  console.log(search);

  var search = $("box.highlighted")
    .eq(0)
    .parent() //every parent goes out of the tag to the one that contains it
    .parent()
    .parent()
    .find("[title='Google']");
});
