const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SampleSchema = new Schema({
  title: String,
  description: String,
  url: String,
});

module.exports = mongoose.model('Sample', SampleSchema);
