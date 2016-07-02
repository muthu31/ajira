(function(){
'use strict';
var myApp = angular.module('myApp', ['ngRoute', // Route service
    'myApp.utilityService', 'myApp.constants', // MISC
    'myApp.directives', 'myApp.filters', // MISC
    'myApp.services', // Services
    'myApp.controller' // controller
]);
myApp.config(['$routeProvider', function($routeProvider) {
        // Login
        $routeProvider.when('/createticket', {
            templateUrl: 'partials/dynForm.html',
            controller: 'ajiraCtrl'
        });
        
        // Default
        $routeProvider.otherwise({
            redirectTo: '/createticket'
        });
    }]);
}());