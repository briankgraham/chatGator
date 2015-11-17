angular.module('app')
.controller('userController', function ($scope, $location, Auth) {
  console.log("hey");
  $scope.user = {};
  $scope.signup = function () {
    Auth.signup($scope.user).then(function (result) {
      console.log('frontend:', result);
      localStorage.setItem('id', result.data.token);
    });
  };
  $scope.signin = function () {
    Auth.signin($scope.user).then(function (result) {
      console.log('frontend:');
    });
  };

});