(function() {
    'use strict';

    angular
        .module('app')
        .directive('mainHeader', Header);


    function Header () {

        var header = {
            templateUrl: 'app/components/header.directive.html'
        };

        return header;
    }
})();