var mongoose = require('mongoose'),
    Promise = require('bluebird'),
    bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'));
    mongoose.Promise = Promise;

var userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true
  },

  salt: String
});

userSchema.methods.comparePass = function (possPass) {
  var savedPass = this.password;
  return bcrypt.compareAsync(possPass, savedPass).then(function (result) {
    if (!result) {
      console.log('not found', result);
    } else {
      console.log('found', result);
    }
  });
};

userSchema.pre('save', function ( next ) {
  var user = this;
  if (!user.isModified('password')) {
    return next();
  }

  return bcrypt.genSaltAsync(10).then(function (result) {
    return bcrypt.hashAsync(user.password, result, null).then(function (hash) {
      console.log('success encrypted it!');
      user.password = hash;
      user.salt = result;
      next();
    })
    .catch(function (err) {
      console.log('error:', err);
    });
  });
});

module.exports = mongoose.model('users', userSchema);