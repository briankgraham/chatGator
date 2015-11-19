angular.module('app')
.controller('appController', function ($scope, $location) {
  $scope.$on('login', function (whatsThis, user) {
    $scope.currentUser = {username: user};
  });

  $scope.logOut = function () {
    localStorage.removeItem('id');
    localStorage.removeItem('name');
    $scope.currentUser = null;
    $location.path('/');
  };

});