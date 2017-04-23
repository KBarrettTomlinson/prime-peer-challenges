/*
  Add a DIV to the Container Class.
  Inside the DIV, add a P tag that has your name
  Then add another P tag with the City you live in.
*/
var name = "Keith Barrett Tomlinson";
var city = "Minneapolis, MN";


$(document).ready(function(){
  console.log("I'm here for you");
  appendDom();
});

function appendDom(){
  //Write Append Dom Code Here
  console.log("appendDom");
  $(".container").append("<div class='box'></div>");
  $(".box").append("<p id='name'>"+name+"</p>");
  $(".box").append("<p id='city'>"+city+"</p>");
}
