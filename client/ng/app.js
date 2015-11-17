angular.module('app', ['ngRoute'])

.config(function ($routeProvider, $httpProvider) {
  $routeProvider
  .when('/home', {
    templateUrl: '../views/home.html',
    controller: 'postController',
    authenticate: true
  })
  .when('/signup', {
    templateUrl: '../views/signup.html',
    controller: 'userController',
    authenticate: false
  })
  .when('/login', {
    templateUrl: '../views/login.html',
    controller: 'userController'
  })
  .otherwise({
    redirectTo: '/signup'
  });

  $httpProvider.interceptors.push('AddTokens');
})
.factory('AddTokens', function ($window) {
  return {
    request: function (config) {
      var jwt = $window.localStorage.getItem('id');
      if (jwt) {
        config.headers['x-access-token'] = jwt;
      }
      config.headers['Allow-Control-Allow-Origin'] = '*';
      return config;
    }
  };
})
.run(function ($rootScope, $location) {

});