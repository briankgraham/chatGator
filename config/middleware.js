var morgan = require('morgan');
var bodyParser = require('body-parser');

module.exports = function (app, express) {
  var userRouter = express.Router();
  var postRouter = express.Router();

  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({extended : true}));
  app.use(bodyParser.json());
  app.use(express.static(__dirname + '/../client'));

  app.use('/api/users', userRouter);

  app.use('/api/posts', postRouter);

  // add requires for userRoutes and postRoutes, inject the routers into each

};