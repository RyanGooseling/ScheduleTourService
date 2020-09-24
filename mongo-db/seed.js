const db  = require('./index.js');
const Tour = require('./Tour.js');

const sampleTours = [
  {
    house_id: 'Pearl Street',
    date: '9/31/2020',
    timeWindow: '09:30 - 10:00',
    walkthrough: "In-person",
    booking: true
  },
  {
    house_id: 'Pearl Street',
    date: '9/31/2020',
    timeWindow: '13:30 - 14:00',
    walkthrough: "Video",
    booking: true
  },
  {
    house_id: 'Pearl Street',
    date: '10/3/2020',
    timeWindow: '10:00 - 10:30',
    walkthrough: "In-person",
    booking: true
  },
  {
    house_id: 'Pearl Street',
    date: '10/3/2020',
    timeWindow: '11:00 - 11:30',
    walkthrough: "In-person",
    booking: true
  },
  {
    house_id: 'Pearl Street',
    date: '10/3/2020',
    timeWindow: '13:30 - 14:00',
    walkthrough: "In-person",
    booking: true
  }
];

const insertSampleTours = function() {
  Tour.create(sampleTours)
    .then(() => db.disconnect());
};

insertSampleTours();