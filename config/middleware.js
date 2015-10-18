var morgan = require('morgan');

module.exports = function (app, express) {
  var userRouter = express.Router();
  app.use(morgan('dev'));
  app.use(express.static(__dirname + '/../client'));

};