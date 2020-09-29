const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/bluefin-schedule';

const db = mongoose.connect(mongoUri);

module.exports = db;
