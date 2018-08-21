let express = require('express'),
	path = require('path'),
	bodyParser = require('body-parser'),
	cors = require('cors'),
	mongoose = require('mongoose'),
	config = require('./server/config/database');

const app = express();

global.APP_PATH = path.resolve(__dirname);

mongoose.Promise = global.Promise;
mongoose.connect(config.DB).then(
	() => {console.log('db is connected')},
	err => {console.log('can not connect to the database '+ err)}
);

// view engine setup
app.set('views', path.join(__dirname, 'server/views'));
app.set('view engine', 'jade');

/** Setting Default Headers */
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Requiring Routes into the application
var index = require('./server/routes/index');
var departments = require('./server/routes/departments');
app.use('/', index);
app.use('/departments', departments);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.use(bodyParser.json());
app.use(cors());
let port = process.env.PORT | 4000;

let server = app.listen(() => {
	console.log('Listening on port'+ port);
})	