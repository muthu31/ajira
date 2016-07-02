/*
 * Directives
 */
'use strict';
var directiveModule = angular.module('myApp.directives', []);

directiveModule.directive('textbox', ['ajiraConstants', function(ajiraConstants) {
        return {
            restrict: 'A',
            templateUrl: ajiraConstants.textBoxDirectiveUrl,
            scope: {
                selectedValue: "="
            },
            controller: function($scope) {
                $scope.field = {
                    "label": "Hello"
                }
            },
            link: function(scope, elm, attrs) {
                console.log("called link");
            },
            replace: true
        };
    }]);