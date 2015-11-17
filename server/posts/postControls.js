var Post = require('./postModel');

module.exports = {
  newPost: function (req, res, next) {
    var username = req.body.username;
    var postBody = req.body.postBody;

    return Post.create({
      username: username,
      body: postBody
    })
    .then(function (newPost) {
      if (newPost) {
        console.log('post stored: ', newPost);
        res.send(200);
      }
    });
  },

  getPosts: function (req, res, next) {

  }
};