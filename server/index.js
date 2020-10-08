const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Tour = require('../mongo-db/Tour.js');
const db = require('../mongo-db/index.js');

const app = express();
const port = 3004;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/homes/:houseId', express.static(__dirname + '/../client/dist'));

app.get('/homes/:houseId/schedule', (req, res) => {
  Tour.find({houseId: req.params.houseId})
    .then((tours) => {
      let bookedTours = [];
      tours.forEach(tour => {
        if (tour.schedule.booking === true) {
          bookedTours.push(tour);
        }
      });
      bookedTours.sort((a, b) => {
        return a.schedule.date - a.schedule.date;
      });
      res.send(bookedTours);
      res.end();
    })
    .catch((err) => {
      console.log('Error: ', err);
    });
});

app.post('/homes/:houseId/schedule', (req, res) => {
  const booking = req.body;
  Tour.create(booking)
    .then(() => {
      Tour.find({houseId: req.params.houseId})
        .then((tours) => {
          tours.sort((a, b) => {
            return a.schedule.date - a.schedule.date;
          });
          res.send(tours);
          res.end();
        })
        .catch((err) => {
          console.log('Error: ', err);
        });
    })
    .catch((err) => {
      console.log('Error: ', err);
    });
});


app.listen(port, () => {
  console.log(`Bluefin listening at http://localhost:${port}`);
});