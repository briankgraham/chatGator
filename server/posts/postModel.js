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

  room: {
    type: String,
    default: "Lobby"
  },

  created: {
    type: Date
  }

});

postSchema.pre('save', function (next) {
  var post = this;
  post.created = new Date();
  next();
});

module.exports = mongoose.model('posts', postSchema);