/*
 * Ajira controller
 */
(function() {
    'use strict';
    var controllerModule = angular.module('myApp.controller', []);

    controllerModule.controller('ajiraCtrl', ['$scope', 'ajiraFactory', function($scope, ajiraFactory) {
        $scope.fields = [];
        $scope.userData = {};
        $scope.evalRules = function(fieldInfo) {
            var para, result = true;
            var rules = fieldInfo.rules;
            if (rules) {
                para = rules.split("_");
                result = $scope.$eval("userData." + para[0] + para[1] + para[2]);
            }
            return result;
        };
        $scope.createTicket = function() {
            console.log("Submitted Data");
            console.log($scope.userData);
            alert("Submitted data: \n " + JSON.stringify($scope.userData));
        };
        ajiraFactory.getApplicationObject().then(function(response) {
            $scope.fields = response.data;
        });
    }]);
}());
