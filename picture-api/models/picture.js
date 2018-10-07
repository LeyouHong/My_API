const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PictureSchema = new Schema({
  url : String
});

module.exports = mongoose.model('Urls', PictureSchema);
