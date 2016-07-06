/*
 * Ajira controller
 */
(function () {
    'use strict';
    var controllerModule = angular.module('myApp.controller', []);

    controllerModule.controller('ajiraCtrl', ['$scope', 'ajiraFactory', function ($scope, ajiraFactory) {
        $scope.fields = [];
        $scope.userData = {};
        $scope.evalRules = function (fieldInfo) {
            var rule, result = true;
            var rules = fieldInfo.rules;
            if (rules) {
                rule = replaceAll(rules, "this", "userData");
                result = $scope.$eval(rule);
            }
            return result;
        };
        function replaceAll(str, find, replace) {
            return str.replace(new RegExp(find, 'g'), replace);
        }
        $scope.createTicket = function () {
            console.log("Submitted Data");
            console.log($scope.userData);
            alert("Submitted data: \n " + JSON.stringify($scope.userData));
        };
        ajiraFactory.getApplicationObject().then(function (response) {
            $scope.fields = response.data;
        });
    }]);
}());
