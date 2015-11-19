angular.module('app')
.controller('postController', function ($scope, $location, Auth) {
  $scope.post = {};

  if (!$scope.currentUser && localStorage.getItem('name')) {
    $scope.$emit('login', localStorage.getItem('name'));
  }

  $scope.submit = function () {
    var user = {
      username: localStorage.getItem('name'),
      postBody: $scope.post.message
    };
    Auth.sendPost(user)
      .then(function (result) {
        console.log('submitted', result);
        Auth.getPosts()
          .then(function (posts) {
            $scope.post.message = '';
            posts.forEach(function (post) {
              post.created = new Date(post.created).toLocaleString();
            });
            $scope.post.totalPosts = posts;
          });
      });
  };

  $scope.getPosts = function () {
    Auth.getPosts()
      .then(function (result) {
        console.log('we here:', result);
      });
  };

});