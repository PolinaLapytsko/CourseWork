var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/nodetest1');

var index = require('./routes/index');
var dijkstra = require('./routes/dijkstra');
var users = require('./routes/users');
var about = require('./routes/about');
var contact = require('./routes/contact');
var registration = require('./routes/registration');
var userlist = require('./routes/userlist');
var autorisation = require('./routes/autorization');
var work = require('./routes/work');
var newContact = require('./routes/newContact');
var newAbout = require('./routes/newAbout');
var table = require('./routes/table');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Make our db accessible to our router
app.use(function(req,res,next){
    req.db = db;
    next();
});

app.use('/', index);
app.use('/users', users);
app.use('/about',about);
app.use('/contact',contact);
app.use('/registration',registration);
app.use('/userlist',userlist);
app.use('/autorisation',autorisation);
app.use('/work',work);
app.use('/newContact',newContact);
app.use('/newAbout',newAbout);
app.use('/table',table);
app.use('/dijkstra', dijkstra);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
