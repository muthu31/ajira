/*
 * Constants
 */
'use strict';
var constantsModule = angular.module('myApp.constants', []);

constantsModule.constant('ajiraConstants', {
    textBoxDirectiveUrl: 'partials/textBox.html',
    loginErrorUsernamePassword: 'You must enter username and password to log in',
    loginErrorInvalidCredentials: 'Invalid credentials,Try Again!'
});