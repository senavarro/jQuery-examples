"use strict";

$(document).ready(function() {
  console.log("event loaded");

  // MouseOver and MouseOut
  /* var box = $("#box");

  box.mouseover(function() {
    $(this).css("background", "red");
  });
  box.mouseout(function() {
    $(this).css("background", "yellow");
  });
*/

  //Hover, same but easier with less code

  var box = $("#box");

  function changeRed() {
    $(this).css("background", "red");
  }

  function changeYellow() {
    $(this).css("background", "yellow");
  }

  box.hover(changeRed, changeYellow);

  // Click and doubleclick

  box.click(function() {
    $(this)
      .css("background", "blue")
      .css("color", "white");
  });

  box.dblclick(function() {
    //double click
    $(this)
      .css("background", "pink")
      .css("color", "yellow");
  });

  // Mousedown and Mouseup

  var data = $("#box2");

  data.mousedown(function() {
    $(this).css("border-color", "gray");
  });

  data.mouseup(function() {
    $(this).css("border-color", "black");
  });

  //Mouse move    Follows the mouse, captures the movement of the move

  $(document).mousemove(function() {
    $("body").css("cursor", "none"); //makes the cursor dissapear and now "follow_me becomes the cursor"
    $("#follow_me")
      .css("left", event.clientX)
      .css("top", event.clientY);
  });
});
