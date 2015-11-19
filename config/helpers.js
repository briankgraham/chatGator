var jwt = require('jwt-simple');

module.exports = {
  errorLogger: function (error, req, res, next) {
    console.error(error.stack);
    next(error);
  },

  errorHandler: function (error, req, res, next) {
    res.sendStatus(500).send({error: error.message});
  }
};