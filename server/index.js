/**
 * @jest-environment node
 */
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Tour = require('../mongo-db/Tour.js');

const app = express();
const port = 3004;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// what about requiring "path"

app.use(express.static(__dirname + '/../client'));

app.get('/house', (req, res) => {
  debugger;
  res.send('Hello World!');
  res.end();
});




app.listen(port, () => {
  console.log(`Bluefin listening at http://localhost:${port}`);
});