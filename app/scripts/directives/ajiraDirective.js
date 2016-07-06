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
                userModel: "=",
                field: "="
            },
            replace: true,
            link: function(scope, element, attrs){
                scope.$on("$destroy", function(){
                    delete scope.userModel[scope.field.identifier];
                });
            }
        };
    }]);
    directiveModule.directive('enumField', ['ajiraConstants', function(ajiraConstants) {
        return {
            restrict: 'A',
            templateUrl: ajiraConstants.selectBoxDirectiveUrl,
            scope: {
                userModel: "=",
                field: "="
            },
            replace: true,
            link: function(scope, element, attrs){
                scope.$on("$destroy", function(){
                     delete scope.userModel[scope.field.identifier];
                });
            }
        };
    }]);
}());
