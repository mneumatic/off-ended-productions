const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategoriesSchema = new Schema({
    imagePath: String,
    title: String,
    urlPath: String,
});

module.exports = mongoose.model('Categories', CategoriesSchema);