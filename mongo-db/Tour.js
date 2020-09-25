const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const tourSchema = new mongoose.Schema({
  houseId: String,
  date: String,
  timeWindow: String,
  walkthrough: String,
  booking: Boolean
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
