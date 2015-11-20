var Post = require('./postModel');
var jwt = require('jwt-simple');
var User = require('../users/userModel.js');
var Users2 = require('../users/userControls');
var Promise = require('bluebird');

module.exports = {
  newPost: function (req, res, next) {
    var username = req.body.username;
    var postBody = req.body.postBody;
    var token = req.headers['x-access-token'];
    if (!token) {
      return false;
    } else {
      // Check to see if user is valid
      var user = jwt.decode(token, 'secret');
      User.findOne({username: user.username}).exec()
        .then(function (found) {
          if (found) {
            //If user is valid, create a new post
            return Post.create({
              username: username,
              body: postBody
            })
            .then(function (newPost) {
              if (newPost) { 
                res.sendStatus(200);
              }
            });
          } 
        })
        .catch(function (err) {
          next(err);
        });
    }      
  },

  getPosts: function (req, res, next) {
    Post.find({}).exec()
      .then(function (posts) {
        res.send(posts);
      });
  },

  getUserPosts: function (req, res, next) {
    var username = req.params.user;
    if (username) {
      Post.find({username: username})
        .then(function (posts) {
          res.send(posts);
        });
    } else {
      res.sendStatus(404);
    }
  }
};