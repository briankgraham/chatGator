angular.module('app')
.controller('userController', function ($scope, Auth) {
  console.log("hey");
  $scope.user = {};
  $scope.signup = function () {
    Auth.signup($scope.user).then(function (result) {
      console.log('frontend:', result);
    });
  };
  $scope.signin = function () {
    Auth.signin($scope.user).then(function (result) {
      console.log('frontend:', result);
    });
  };

});