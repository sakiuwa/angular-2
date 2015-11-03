// Create application
var myApp = angular.module('myApp', [])

// Bind controller madCtrl
myApp.controller('madCtrl', function($scope){
    // Set initial values for name, age, location, and food
    $scope.name = "Bob";
    $scope.age = "13";
    $scope.location = "mall";
    $scope.food = "candy";

})

