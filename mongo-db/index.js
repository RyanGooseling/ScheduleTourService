const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/bluefin';

const db = mongoose.connect(mongoUri);

module.exports = db;
