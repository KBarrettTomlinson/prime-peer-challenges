var myApp = angular.module('myApp', []);

myApp.controller('InputController', ['$scope', 'MovieService', function($scope, MovieService){
  $scope.movieObject = MovieService.movieObject;
  $scope.addObject = MovieService.addObject;
}]);

myApp.controller('DisplayController', ['$scope', 'MovieService', function($scope, MovieService){
  $scope.arrayObject = MovieService.arrayObject;
  console.log($scope.arrayObject.movieArray, "I'm inside DisplayController");

}]);

myApp.factory('MovieService', [function(){
  //Private
  var movieArray = [{title: "Lost Highway",director: "Lynch",length: "125min",description: "Bill Pullman wears weird t-shirts, pretends to play the sax, murders his wife."}];
  var arrayObject = {movieArray: movieArray};
  var movieObject = {
    title: "",
    director: "",
    length: "",
    description: ""
  };

  function addObject(object){
    //pushes object to array
    var newObject = {
      title: object.title,
      director: object.director,
      length: object.length,
      description: object.description
    };
    console.log(object);
    arrayObject.movieArray.push(newObject);
    console.log(movieArray);

  }


  //Public
  return {
    arrayObject: arrayObject,
    movieObject: movieObject,
    addObject: addObject
  };
}]);
