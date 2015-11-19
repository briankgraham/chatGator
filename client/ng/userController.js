angular.module('app')
.controller('userController', function ($scope, $location, Auth) {
  $scope.user = {};
  $scope.signup = function () {
    Auth.signup($scope.user).then(function (result) {
      console.log('frontend:', result);
      localStorage.setItem('id', result.data.token);
      localStorage.setItem('name', result.data.username);
      $scope.$emit('login', result.data.username);
      $location.path('/home');
    });
  };
  $scope.signin = function () {
    Auth.signin($scope.user).then(function (result) {
      localStorage.setItem('id', result.data.token);
      localStorage.setItem('name', result.data.username);
      $scope.$emit('login', result.data.username);
      $location.path('/home');
    });
  };

});