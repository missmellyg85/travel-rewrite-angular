(function() {
    'use strict';

    angular
        .module('app')
        .directive('mainFooter', Footer);


    function Footer () {

        var footer = {
            templateUrl: 'app/components/footer.directive.html'
        };

        return footer;
    }
})();