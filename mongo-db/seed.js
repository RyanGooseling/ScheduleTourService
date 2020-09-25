const db = require('./index.js');
const Tour = require('./Tour.js');

const houses = ['Pearl Street'];

const dates = ['10/3/2020', '10/4/2020', '10/5/2020', '10/6/2020', '10/7/2020', '10/8/2020', '10/9/2020', '10/10/2020', '10/11/2020', '10/12/2020', '10/13/2020', '10/14/2020', '10/15/2020', '10/16/2020', '10/17/2020', '10/18/2020', '10/19/2020', '10/20/2020', '10/21/2020', '10/22/2020', '10/23/2020', '10/24/2020', '10/25/2020', '10/26/2020', '10/27/2020', '10/28/2020', '10/29/2020', '10/30/2020', '10/31/2020', '11/1/2020', '11/2/2020'];

const timeWindows = ['09:00 - 09:30', '09:30 - 10:00', '10:00 - 10:30', '10:30 - 11:00', '11:00 - 11:30', '12:30 - 13:00', '13:00 - 13:30', '13:30 - 14:00', '14:00 - 14:30', '14:30 - 15:00', '15:00 - 15:30', '15:30 - 16:00', '16:00 - 16:30', '16:30 - 17:00', '17:00 - 17:30', '17:30 - 18:00'];

const walkthroughs = ['In-person', 'Video'];

const sampleTourRand = function() {
  const houseRand = Math.floor(Math.random() * houses.length);
  const dateRand = Math.floor(Math.random() * dates.length);
  const timeRand = Math.floor(Math.random() * timeWindows.length);
  const walkRand = Math.floor(Math.random() * walkthroughs.length);

  const singleSample = {
    houseId: houses[houseRand],
    date: dates[dateRand],
    timeWindow: timeWindows[timeRand],
    walthrough: walkthroughs[walkRand],
    booking: true
  };
  return singleSample;
};

const sampleTours = [];

const populate = function() {
  while (sampleTours.length < 100) {
    sampleTours.push(sampleTourRand());
  }
};

const insertSampleTours = function() {
  Tour.create(sampleTours)
    .then(() => db.disconnect());
};

populate();
insertSampleTours();