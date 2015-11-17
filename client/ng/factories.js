angular.module('app')
.factory('Auth', function ($http) {

  var signin = function (data) {
    return $http({
      method: 'POST',
      url: '/api/users/signin',
      data: data
    });
  };

  var signup = function (data) {
    return $http({
      method: 'POST',
      url: '/api/users/signup',
      data: data
    });
  };

  return {
    signin: signin,
    signup: signup
  };
});