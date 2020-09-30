const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/bluefin-scheduletour';

mongoose.connect(mongoUri);
const db = mongoose.connection;

module.exports = db;
