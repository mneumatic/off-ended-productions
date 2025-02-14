const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TrackSchema = new Schema({
  title: String,
  description: String,
  url: String,
  format: String
});

module.exports = mongoose.model('Track', TrackSchema);
