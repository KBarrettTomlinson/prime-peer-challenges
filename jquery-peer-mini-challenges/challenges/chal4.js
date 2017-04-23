/*
  Here is a list of employees! And they are being appended to the DOM.
  Then they are being hidden. But Mark does not like to be hidden.
  So make sure Mark is not hidden.
*/

function Employee(name, number, salary){
  this.name = name;
  this.number = number;
  this.salary = salary;
}

var scott = new Employee("Scott", "13857", 15000);
var chris = new Employee("Chris", "98654", 15000);
var mark = new Employee("Mark", "19084", 100000);
var christy = new Employee("Christy", "40293", 15000);
var fred = new Employee("Fred", "98372", 20000);

var peopleArray = [scott, chris, mark, christy, fred];

$(document).ready(function(){
  console.log("I'm Here For You");
  appendDom();
});

function appendDom(){
  for(var i = 0; i < peopleArray.length; i++){
    $(".container").append("<div></div>");
    var $el = $(".container").children().last();
    $el.append("<p>" + peopleArray[i].name + "</p>");
    $el.append("<p>" + peopleArray[i].number + "</p>");
    $el.append("<p>" + peopleArray[i].salary + "</p>");
    console.log(peopleArray[i].name);
    if(peopleArray[i].name != "Mark" /* Rewrite this  */){
      $el.hide();
    } else {
      /* Code here too */
      $el.show();
    }
  }
}
