angular.module('app')

.factory('Auth', function ($http, $window, $location) {
  var signin = function (data) {
    return $http({
      method: 'POST',
      url: '/api/users/signin',
      data: data
    })
    .then(function (res) {
      return res;
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

  var getPosts = function () {
    return $http({
      method: 'GET',
      url: '/api/posts/all'
    })
    .then(function (resp) {
      return resp.data;
    });
  };

  var sendPost = function (data) {
    return $http({
      method: 'POST',
      url: '/api/posts/new',
      data: data
    });
  };

  var getUserPosts = function (user) {
    return $http({
      method: 'GET',
      url: '/api/posts/' + user
    })
    .then(function (resp) {
      return resp.data;
    });
  }; 

  return {
    getUserPosts: getUserPosts,
    signin: signin,
    signup: signup,
    isAuth: isAuth,
    signout: signout,
    getPosts: getPosts,
    sendPost: sendPost
  };
});