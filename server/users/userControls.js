var User = require('./userModel.js'),
    jwt = require('jwt-simple');  

module.exports = {
  signup: function (req, res, next) {
    var username = req.body.username;
    var password = req.body.password;

    User.findOne({username: username}).exec()
    .then(function (user) {
      if (user) {
        console.log('User already exists!'); //next(new Error('userexists'));
      } else {
        return User.create({
          username: username,
          password: password
        }).then(function (newUser) {
          if (newUser) console.log('success userstored!', newUser);
        })
        .catch(function (err) {
          console.log('something wrong', err);
        });
      }
    });
  },

  signin: function (req, res, next) {
    
  }

};