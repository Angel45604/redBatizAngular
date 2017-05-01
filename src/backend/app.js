var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors=require('cors');
var routes = require('./routes/index');
var users = require('./routes/users');
var Tasks=require('./routes/Tasks');
var Students=require('./routes/Students');
var app = express();

app.set('view', path.join(__dirname, 'view'));
app.set('view engine', 'jade');
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: false }));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.static('/uploads/'));

app.use('/', routes);
app.use('/users', users);
app.use('/Tasks',Tasks);
app.use('/Students',Students);
// catch 404
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
