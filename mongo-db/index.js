const mongoose = require('mongoose');
const IP = '54.193.202.190';
const mongoUri = `mongodb://${IP}/bluefin-scheduletour`;

mongoose.connect(mongoUri);
const db = mongoose.connection;

module.exports = db;