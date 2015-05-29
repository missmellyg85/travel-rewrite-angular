angular
	.module('app')
	.config(['$routeProvider',
  function($routeProvider) {
  	// console.log("here");
    $routeProvider
      .when('/home', { templateUrl: 'app/home/home.html', controller: 'homeController'})
      .otherwise({ redirectTo: '/home' });
    
}]);