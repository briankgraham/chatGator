var mongoose = require('mongoose'),
    Promise = require('bluebird');
    mongoose.Promise = Promise;

var postSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },

  body: {
    type: String,
    required: true
  },

  created: {
    type: Date,
    default: Date.now(),
    required: true
  }

});

module.exports = mongoose.model('posts', postSchema);