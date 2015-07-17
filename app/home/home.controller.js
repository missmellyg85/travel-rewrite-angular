(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('homeController', Controller);

    Controller.inject = ['$scope'];

    function Controller ($scope) {

        $scope.promos = [
          'Visit the Bahamas for your honeymoon!',
            'Ever thought of taking a photography class? Click here to sign up.',
            "Hogwarts may not be real, or at least you don't know it is since you're not a wizard, but at least you can go to Harry Potter world."
        ];

    }
})();