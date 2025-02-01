const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MusicEventsSchema = new Schema({
    title: String,
    description: String,
    imagePath: String,
    date: String,
    location: String,
    hours: String,
});

module.exports = mongoose.model('MusicEvents', MusicEventsSchema);