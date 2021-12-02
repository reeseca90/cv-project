const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SkillsSchema = new Schema(
  {
    skill: { type: String }
  }
);

module.exports = mongoose.model('Skills', SkillsSchema);