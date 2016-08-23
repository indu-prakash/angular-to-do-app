var app = angular.module('atdApp', ['ngRoute', 'dndLists']);

app.config(function($routeProvider){
    $routeProvider
    .when('/home',{
        templateUrl : 'views/home.html',
        controller  : 'homeCtrl'
    }) 
    .otherwise({
        redirectTo: '/home'
    });
});
