/*
 * Directives
 */
(function() {
    'use strict';
    var directiveModule = angular.module('myApp.directives', []);

    directiveModule.directive('inputField', ['ajiraConstants', function(ajiraConstants) {
        return {
            restrict: 'A',
            templateUrl: ajiraConstants.textBoxDirectiveUrl,
            scope: {
                selectedValue: "=",
                field: "="
            },
            replace: true
        };
    }]);
    directiveModule.directive('enumField', ['ajiraConstants', function(ajiraConstants) {
        return {
            restrict: 'A',
            templateUrl: ajiraConstants.selectBoxDirectiveUrl,
            scope: {
                selectedValue: "=",
                field: "="
            },
            replace: true
        };
    }]);
}());
