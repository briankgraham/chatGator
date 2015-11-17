angular.module('app')
.controller('appController', function ($scope, $location) {
  $scope.$on('login', function (whatsThis, user) {
    $scope.currentUser = {username: user};
  });
});