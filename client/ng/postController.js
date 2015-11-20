angular.module('app')
.controller('postController', function ($scope, $location, Auth) {
  $scope.post = {};

  if (!$scope.currentUser && localStorage.getItem('name')) {
    $scope.$emit('login', localStorage.getItem('name'));
  }

  // Helper function to change dates and create $scope array
  var createPostArray = function (posts) {
    posts.forEach(function (post) {
      post.created = new Date(post.created).toLocaleString();
    });
    $scope.post.totalPosts = posts;
  };

  $scope.submit = function () {
    var user = {
      username: localStorage.getItem('name'),
      postBody: $scope.post.message
    };
    Auth.sendPost(user)
      .then(function (result) {
        Auth.getPosts()
          .then(function (posts) {
            $scope.post.message = '';
            createPostArray(posts);
          });
      });
  };

  $scope.getPosts = function () {
    Auth.getPosts()
      .then(function (posts) {
        createPostArray(posts);
      });
  };

  $scope.getUserPosts = function () {
    Auth.getUserPosts(this.post.username)
      .then(function (posts) {
        createPostArray(posts);
      });
  };

  $scope.getPosts();
});

