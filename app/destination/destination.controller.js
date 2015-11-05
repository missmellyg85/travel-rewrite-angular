(function(angular) {
    'use strict';

    var app = angular
        .module('myApp')

    app.controller('destinationController', Controller);

    Controller.inject = ['$scope', '$firebaseArray'];

    function Controller ($scope, $firebaseArray) {

        var ref = new Firebase("https://sweltering-fire-4732.firebaseio.com/destination");
        var islandRef = new Firebase("https://sweltering-fire-4732.firebaseio.com/island");
        var islands = $firebaseArray(islandRef);

        // create a synchronized array
        $scope.destinations = $firebaseArray(ref);
        // add new items to the array
        // the message is automatically added to our Firebase database!
        $scope.addDestination = function() {
            $scope.destinations.$add({
                name: $scope.newDestinationName,
                description: $scope.newDestinationDescription
            });
        };




        $scope.getIslandByDestination = function(dest){
          var destIslands = [];
          for(var i = 0; i >= islands.length; i++){
            var island = islands[i];
            
          }
        };

    }

    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/destinations', {templateUrl: 'destination/destination.html', controller: 'destinationController'})
            .whenAuthenticated('/admin/destinations', { templateUrl: 'destination/destination.admin.html', controller: 'destinationController'});
    }]);

})(angular);
