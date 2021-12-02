var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const mongoose = require('mongoose');
const cors = require('cors');
const pdf = require('./models/pdf');

const PDF = require('./models/pdf');
const Skills = require('./models/skills');
const Works = require('./models/works');
const EduList = require('./models/edulist');

require('dotenv').config();

var app = express();


app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const mongoDB = process.env.DB_URL;
mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// saves CV info on POST to /
app.post('/', function(req, res, next) {
  const newPDF = new PDF({
    name: req.body.postBody.name,
    address: req.body.postBody.address,
    phone: req.body.postBody.phone,
    email: req.body.postBody.email,
    summary: req.body.postBody.summary,
    allSkills: JSON.parse(req.body.postBody.allSkills),
    workHist: JSON.parse(req.body.postBody.workHist),
    edu: JSON.parse(req.body.postBody.edu)
  }).save(function(err) {
    if (err) { return next(err); } 
    res.end();
  })
});

// GET request for pdfkit

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('error');
});

module.exports = app;
