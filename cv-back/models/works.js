const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WorksSchema = new Schema(
  {
    company: { type: String },
    title: { type: String },
    duty: { type: String }
  }
);

module.exports = mongoose.model('Works', WorksSchema);