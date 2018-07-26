//Routes
var app = angular.module('myApp', ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl : 'pages/loading/loading.html',
        controller: 'loadingCtrl'
    })
    .when('/login', {
        templateUrl : 'pages/main/main.html',
        controller: 'loginCtrl'
    })
    .otherwise({
        templateUrl : 'pages/main/main.html'
    });
});