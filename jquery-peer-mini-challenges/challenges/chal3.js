/*
    Our peom is broken!
    Update these lines:
    Line 5: "They celebrate week-ends all the week."
    Line 10: "They go to the bathroom on roller skates."
*/

$(document).ready(function(){
  console.log("I'm Here For You.");
  //In the appendDom function, we will return the main DIV we create and
  //store it in a variable that we later pass into another function.
  //This is so we have access to that DIV in another Scope to make corrections
  //to it.
  var $el = appendDom();
  fixDom($el);
});

function appendDom(){
  $(".container").append("<div></div>");
  var $el = $(".container").children().last();
  $el.append("<p>The people upstairs all practise ballet</p>");
  $el.append("<p>Their living room is a bowling alley</p>");
  $el.append("<p>Their bedroom is full of conducted tours.</p>");
  $el.append("<p>Their radio is louder than yours,</p>");
  $el.append("<p>chiyak</p>");
  $el.append("<p>When they take a shower, your ceilings leak.</p>");
  $el.append("<p>They try to get their parties to mix</p>");
  $el.append("<p>By supplying their guests with Pogo sticks,</p>");
  $el.append("<p>And when their fun at last abates,</p>");
  $el.append("<p>chiyak</p>");
  $el.append("<p>I might love the people upstairs more</p>");
  $el.append("<p>If only they lived on another floor.</p>");
  //Here we Return the DIV container that holds all the P tags.
  return $el;
}

function fixDom($el){
  //Make your peom corrections here!
  console.log($el);
  console.log($el.children());
  console.log($el.children().next());
  $("p:nth-child(5)").text("They celebrate week-ends all the week.");
  $("p:nth-child(10)").text("They go to the bathroom on roller skates.");
}
