/*
 * Constants
 */
(function() {
    'use strict';
    var constantsModule = angular.module('myApp.constants', []);

    constantsModule.constant('ajiraConstants', {
        textBoxDirectiveUrl: 'partials/textBox.html',
        selectBoxDirectiveUrl: 'partials/selectBox.html'
    });
}());
