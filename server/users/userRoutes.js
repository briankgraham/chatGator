var userControls = require('./userControls.js');

module.exports = function (app) {
  app.post('/signin', userControls.signin);
  app.post('/signup', userControls.signup);
};