var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var queue = require('./queue/queue')
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

function proccessing(){
  if(queue.length() > 0){
    let petition = queue.dequeue();
    petition.next();
  }
  app.disable('state');
}

app.use(cors());

app.set('processing', proccessing)
app.set('state', false);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
  let Peticion = class {
    constructor(req, res, next) {
      this.req = req;
      this.res = res;
      this.next = next;
    }
  };
  if(!app.get('state')){
    app.enable('state');
    next();
  }
  else{
    queue.enqueue(new Peticion(req,res,next));
  }
})

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  app.disable('state');
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
