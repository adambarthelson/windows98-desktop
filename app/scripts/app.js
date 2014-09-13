'use strict';


  angular.module('personalApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'MainCtrl'
])
  .config(function ($stateProvider, $urlRouterProvider) {
    //delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('index', {
        url: '/',
        templateUrl: 'views/main.html',
        controller:'MainController'
      })
  })




