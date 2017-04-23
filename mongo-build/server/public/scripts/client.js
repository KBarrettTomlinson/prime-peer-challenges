//globals
var updating = false;
var updateId = 0;

//document ready
$(document).ready(function(){
  console.log("I'm here for you");
  init();
});

//init
function init(){
  getEmployees();
  eventListener(true);
}


function eventListener(value){
  console.log(updateId);
  if(value){
    $( '#inputForm' ) .on( 'submit', function(event){ event.preventDefault(); clickSubmit();});
    $( '#displayDiv' ).on( 'click', '#delete', clickDelete);
    $( '#displayDiv' ).on( 'click', '#update', clickUpdate);
  }//end if
  else{
    $( '#inputForm' ) .off( 'submit', function(event){ event.preventDefault(); clickSubmit();});
    $( '#displayDiv' ).off( 'click', '#delete', clickDelete);
    $( '#displayDiv' ).off( 'click', '#update', clickUpdate);

  }//end else
}//end eventListener


function clickSubmit(){
  console.log("you've clicked submit!", updateId);
  var employee = {
    name: $('#name').val(),
    position: $('#position').val(),
    salary: $('#salary').val()
  };
  if (updating === true){
    updating = false;
    console.log("updateId", updateId);
    employee.id = updateId;
    console.log("inside input", employee);
    updateEmployee(employee);
    $( '#submitEmployee' ).val("Update");
  }
  else{
    postEmployee(employee);
  }
  $('#name').val('');
  $('#position').val('');
  $('#salary').val('');
  $('#name').focus();
}//ends clickSubmit


function clickDelete(){
  var employee_id = $(this).parent().data('id');
  var id_object = {id: employee_id};
  deleteEmployee(id_object);
}//ends clickDelete

function clickUpdate(){
  var employee_id = $(this).parent().data('id');
  var employee_name = $(this).parent().data('name');
  var employee_position = $(this).parent().data('position');
  var employee_salary = $(this).parent().data('salary');

  $('#name').val(employee_name);
  $('#position').val(employee_position);
  $('#salary').val(employee_salary);
  updating = true;
  console.log(updating, "updating" );
  updateID = employee_id;
  console.log("updateID", updateID);
  $( '#submitEmployee' ).val("Update");
  $('#name').focus();
}//ends clickUpdate

function appendDom(dataArray){
  var $displayDiv = $( '#displayDiv' );
  $displayDiv.empty();
  for ( var i = 0; i < dataArray.length; i++){
    var id = dataArray[i]._id;
    var name = dataArray[i].name;
    var position = dataArray[i].position;
    var salary = dataArray[i].salary;
    $displayDiv.append( '<div class = "personDiv"></div>');
    var $el = $displayDiv.children().last();
    $el.data("id",id);
    $el.data("name",name);
    $el.data("position",position);
    $el.data("salary",salary);
    $el.append( '<p>'+name+'</p>');
    $el.append( '<p>'+position+'</p>');
    $el.append( '<p>'+salary+'</p>');
    $el.append( '<button id="delete">Delete</button>');
    $el.append( '<button id="update">Update</button>');
  }//ends for loop
}//ends appendDom

// AJAX GET request to get all employees ANNA
function getEmployees() {
  $.ajax({
    type: 'GET',
    url: '/employees',
    success: function(response) {
      console.log("Got from server:", response);
      appendDom(response);
    }
  });
}


// AJAX POST request to /employee to store entered data to DB

function postEmployee(employee) {
  $.ajax({
    type: 'POST',
    url: '/employees',
    data: employee,
    success: function(response) {
      getEmployees();
    }
  });
}

function updateEmployee(employee){
  console.log("inside updateEmployee",employee);
  $.ajax({
    type: 'PUT',
    url: '/employees',
    data: employee,
    success: function(response) {
      getEmployees();
    }
  });

}//ends updateEmployee

// AJAX DELETE request to delete data for a given id, passed via the key "id" in an object
function deleteEmployee(deleteEmployeeObject){
  $.ajax({
    type: 'DELETE',
    url: '/employees',
    data: deleteEmployeeObject,
    success: function(response){
      getEmployees();
    }
  });
}
