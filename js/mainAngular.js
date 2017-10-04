var app = angular.module('weightyApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    var templateFolder = 'js/angular/template/tmpl';
    $routeProvider
    .when('/', {templateUrl: templateFolder + 'Submit.html'})
    .when('/login', {templateUrl: templateFolder + 'Login.html',controller: 'ctrlLogin'})
    .when('/register', {templateUrl: templateFolder + 'Register.html', controller: 'ctrlRegister'})
    .when('/test', {templateUrl: templateFolder + 'Test.html', controller: 'ctrlTest'})
    .otherwise({redirectTo: '/'});
});