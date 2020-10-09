require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.mongoUri);
const db = mongoose.connection;

module.exports = db;