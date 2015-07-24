(function() {
    'use strict';

    angular
        .module('app')
        .controller('destinationController', Controller);

    Controller.inject = ['$scope', '$firebaseArray'];

    function Controller ($scope, $firebaseArray) {

        var ref = new Firebase("https://sweltering-fire-4732.firebaseio.com/destination");
        
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

    }
})();