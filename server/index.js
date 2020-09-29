/**
 * @jest-environment node
 */
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Tour = require('../mongo-db/Tour.js');
const db = require('../mongo-db/index.js');

const app = express();
const port = 3004;


app.get('/', (req, res) => {
  debugger;
  Tour.find({})
    .then((tours) => {
      console.log('Successful GET');
      res.send(tours);
      res.end();
    })
    .catch((err) => {
      console.log('Error: ', err);
    });
});

app.post('/', (req, res) => {
  debugger;
  // define request body as new booking to be added
  const booking = req.body;
  // insert new booking into db
  Tour.insertOne(booking)
    .then(() => {
      console.log('Successful POST insert');
      // after inserting the new booking, return the db now including new booking
      Tour.find({});
    })
    // return the updated db info to the client side via the res.send function
    .then((tours) => {
      console.log('Successful return of new db from POST');
      res.send(tours);
      res.end();
    })
    .catch((err) => {
      console.log('Error: ', err);
    });
});


app.listen(port, () => {
  console.log(`Bluefin listening at http://localhost:${port}`);
});