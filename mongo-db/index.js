const mongoose = require('mongoose');
const IP = '54.193.202.190';
const mongoUri = 'mongodb+srv://akilduff:bluefin@bluefin.cgkmq.mongodb.net/bluefin-scheduletour?retryWrites=true&w=majority';

mongoose.connect(mongoUri);
const db = mongoose.connection;

module.exports = db;