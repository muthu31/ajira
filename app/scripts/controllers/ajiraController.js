/*
 * Ajira controller
 */
'use strict';
var controllerModule = angular.module('myApp.controller', []);

controllerModule.controller('ajiraCtrl', ['$scope', 'ajiraFactory', function ($scope, ajiraFactory) {
    $scope.fields = [];
    ajiraFactory.getApplicationObject().then(function (response) {
        $scope.fields = response.data;
    });
}]);
