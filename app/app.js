var app = angular.module('app', ['ui.router', 'ngAnimate']);

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider){

  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/home.html',
      controller: 'homeController'
    })
    .state('main', {
      url: '/main',
      templateUrl: 'views/main.html',
      controller: 'mainController'
    })
    .state('article', {
      url: '/article',
      templateUrl: 'views/article.html',
      params: {article: null},
      controller: 'articleController'
    });


}]);
