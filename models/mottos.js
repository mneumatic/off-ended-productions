const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MottosSchema = new Schema({
    motto: Array,
});

module.exports = mongoose.model('Mottos', MottosSchema);