var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const mongoose = require('mongoose');
const PDF = require('./models/pdf');
const cors = require('cors');

const PDFdoc = require('pdfkit');
const fs = require('fs');

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
app.post('/api/pdf', async function(req, res, next) {
  const savePDF = await new PDF({
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
  })

  await PDF.findOne({ name: req.body.postBody.name }).exec(function(err, PDF) {
    if (err) { return next(err); }

    const doc = new PDFdoc({font: 'Helvetica'});

    doc.pipe(fs.createWriteStream(__dirname + '/working.pdf'));
      
    doc.font('Helvetica-BoldOblique').fontSize(24).text('Name:');
    doc.fontSize(14).text(PDF.name);
    doc.moveDown();
    doc.font('Helvetica-BoldOblique').fontSize(24).text('Contact:');
    doc.fontSize(14).text(PDF.address).text(PDF.phone).text(PDF.email);
    doc.moveDown();
    doc.font('Helvetica-BoldOblique').fontSize(24).text('About:');
    doc.fontSize(14).text(PDF.summary);
    doc.fontSize(14).text(
      PDF.allSkills.map((skill) => { return skill.text })
    );
    doc.moveDown();
    doc.font('Helvetica-BoldOblique').fontSize(24).text('Employment History:');
    doc.fontSize(14).text(
      PDF.workHist.map((work) => { return work.company })
    ).text(
      PDF.workHist.map((work) => { return work.title })
    ).text(
      PDF.workHist.map((work) => { return work.duty })
    );
    doc.moveDown();
    doc.font('Helvetica-BoldOblique').fontSize(24).text('Education:');
    doc.fontSize(14).text(
      PDF.edu.map((edu) => { return edu.school })
    ).text(
      PDF.edu.map((edu) => { return edu.degree })
    ).text(
      PDF.edu.map((edu) => { return edu.years })
    ).text(
      PDF.edu.map((edu) => { return edu.gpa })
    );

    doc.end();
  })

  res.end();
});

// GET request for pdfkit
app.get('/api/getpdf', function(req, res, next) {
  res.download(__dirname + '/working.pdf', function(err) { 
    if (err) { console.log(err) } 
    else { console.log('success?') }
  });
})

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
