const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommunityBusinessesSchema = new Schema({
    title: String,
    description: String,
    imagePath: String,
    date: String,
    location: String,
    hours: String,
    phone: String,
});

module.exports = mongoose.model('CommunityBusinesses', CommunityBusinessesSchema);