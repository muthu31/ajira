/*
 * Services
 */
(function() {
    'use strict';
    var serviceModule = angular.module('myApp.services', []);

    serviceModule.factory('ajiraFactory', ['$http', function(http) {
        return {
            getApplicationObject: function() {
                return http.get('scripts/data/applicationObject.json');
            }
        };
    }]);
}());
