const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GitBadgesSchema = new Schema({
  urlPath: Array,
});

module.exports = mongoose.model('GitBadges', GitBadgesSchema);
