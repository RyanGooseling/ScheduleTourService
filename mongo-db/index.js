const mongoUri = require('../client/dist/funFile.js');
const mongoose = require('mongoose');
const IP = '54.193.202.190';

mongoose.connect(mongoUri);
const db = mongoose.connection;

module.exports = db;