console.log(data);

var myApp = angular.module( "myApp", []);

myApp.controller("ListingDisplayController", ["$scope", function($scope){
  $scope.listingArray = data;

  $scope.title = function(object){
    if (!isNaN(parseInt(object.rent))){
      return "Rent:";
    }
    else{
      return "Sale Price:";
    }
  };//ends $scopt.title

  $scope.deleteDiv = function(index){
    $scope.listingArray.splice(index, 1);
  };
}]);
