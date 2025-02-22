const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategoriesSchema = new Schema({
    image: String,
    title: String,
    url: String,
});

module.exports = mongoose.model('Categories', CategoriesSchema);
