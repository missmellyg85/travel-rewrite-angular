(function() {
    'use strict';

    angular
        .module('app')
        .controller('authController', Controller);

    Controller.inject = ['$scope', '$firebaseAuth'];

    function Controller ($scope, $firebaseAuth) {
        var ref = new Firebase("https://sweltering-fire-4732.firebaseio.com");
        
        // create an instance of the authentication service
        var auth = $firebaseAuth(ref);

        $scope.logMeIn = function () {
            var username = $scope.login.username;
            var password = $scope.login.password;

            ref.authWithPassword({
                email    : username,
                password : password
            }, function(error, authData) {
                if (error) {
                    console.log("Login Failed!", error);
                } else {
                    console.log("Authenticated successfully with payload:", authData);
                }
            });
        }
    }

})();