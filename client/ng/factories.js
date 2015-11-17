angular.module('app')

.factory('Auth', function ($http, $window, $location) {
  var signin = function (data) {
    return $http({
      method: 'POST',
      url: '/api/users/signin',
      data: data
    })
    .then(function (res) {
      console.log(res);
    });
  };

  var signup = function (data) {
    return $http({
      method: 'POST',
      url: '/api/users/signup',
      data: data
    })
    .then(function (result) {
      return result;
    });
  };

  var isAuth = function (token) {
    return !!$window.localStorage.getItem('id');
  };

  var signout = function () {
    $window.localStorage.removeItem('id');
    $location.path('/signin');
  };

  return {
    signin: signin,
    signup: signup,
    isAuth: isAuth,
    signout: signout
  };
})

.factory('AddTokens', function ($window) {

})
.run(function ($rootScope, $location) {

});