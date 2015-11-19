var postControls = require('./postControls');

module.exports = function (app) {
  app.post('/new', postControls.newPost);
  app.get('/all', postControls.getPosts);
};