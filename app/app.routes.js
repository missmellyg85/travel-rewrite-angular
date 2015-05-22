angular
	.module('app')
	.config(['$routeProvider',
  function($routeProvider) {
  	// console.log("here");
    $routeProvider
      .when('/home', { templateUrl: 'app/home/home.html'})
      .otherwise({ redirectTo: '/home' });
    
}]);