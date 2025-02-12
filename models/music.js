const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MusicSchema = new Schema({
    title: String,
    description: String,
    imagePath: String,
    date: String,
    location: String,
    hours: String,
});

module.exports = mongoose.model('Music', MusicSchema);
