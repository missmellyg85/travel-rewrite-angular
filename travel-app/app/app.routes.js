angular
	.module('app')
	.config(['$routeProvider',
  function($routeProvider) {

    $routeProvider
      .when('/home', { templateUrl: 'app/home/home.html', controller: 'homeController'})
      .when('/authTest', { templateUrl: 'app/auth/auth.test.html', controller: 'authController'})
      .when('/auth/login', { templateUrl: 'app/auth/auth.login.html', controller: 'authController'})
      .when('/destinationAdmin', { templateUrl: 'app/destination/destination.admin.html', controller: 'destinationController'})
      .otherwise({ redirectTo: '/home' });
    
}]);