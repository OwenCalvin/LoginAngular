var app = angular.module('weightyApp', ['ngRoute', 'ngAnimate']);

app.config(function($routeProvider, $locationProvider) {
    var templateFolder = 'js/angular/template/tmpl';
    $routeProvider
    .when('/', {templateUrl: templateFolder + 'Submit.html'})
    .when('/login', {templateUrl: templateFolder + 'Login.html', controller: 'ctrlLogin'})
    .when('/register', {templateUrl: templateFolder + 'Register.html', controller: 'ctrlRegister'})
    .when('/disconnect', {templateUrl: templateFolder + 'Submit.html', controller: 'ctrlDisconnect'})
    .otherwise({redirectTo: '/'});
});