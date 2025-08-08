const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');//this helps robot read tiny notes(cookies) that people send it to rmember stuff.
const logger = require('morgan');//makes robot keep a dairy- it writes down every time someone talks to it. so you can see what happened.

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev')); //write diary entries for every request.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));  //understand forms sent from websites
app.use(cookieParser());  //reads cookies dent from visitors
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;