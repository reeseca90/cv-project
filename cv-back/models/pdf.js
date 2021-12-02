const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const PdfSchema = new Schema(
  {
    name: { type: String },
    address: { type: String },
    phone: { type: String },
    email: { type: String },
    summary: { type: String },
    allSkills: { type: Array },
    workHist: { type: Array },
    edu: { type: Array }
  }
);

module.exports = mongoose.model('PDF', PdfSchema);