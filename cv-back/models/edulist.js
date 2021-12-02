const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EduSchema = new Schema(
  {
    school: { type: String },
    degree: { type: String },
    years: { type: String },
    gpa: { type: Number }
  }
);

module.exports = mongoose.model('EduList', EduSchema);