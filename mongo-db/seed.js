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
  },
  {
    house_id: 'Pearl Street',
    date: '10/3/2020',
    timeWindow: '15:30 - 16:00',
    walkthrough: "Video",
    booking: true
  },
  {
    house_id: 'Pearl Street',
    date: '10/4/2020',
    timeWindow: '11:00 - 11:30',
    walkthrough: "In-person",
    booking: true
  },
  {
    house_id: 'Pearl Street',
    date: '10/4/2020',
    timeWindow: '13:00 - 13:30',
    walkthrough: "In-person",
    booking: true
  },
  {
    house_id: 'Pearl Street',
    date: '10/4/2020',
    timeWindow: '15:00 - 15:30',
    walkthrough: "Video",
    booking: true
  },
  {
    house_id: 'Pearl Street',
    date: '10/6/2020',
    timeWindow: '16:00 - 16:30',
    walkthrough: "In-person",
    booking: true
  },
  {
    house_id: 'Pearl Street',
    date: '10/7/2020',
    timeWindow: '17:00 - 17:30',
    walkthrough: "Video",
    booking: true
  },
  {
    house_id: 'Pearl Street',
    date: '10/9/2020',
    timeWindow: '16:30 - 17:00',
    walkthrough: "Video",
    booking: true
  },
  {
    house_id: 'Pearl Street',
    date: '10/10/2020',
    timeWindow: '10:00 - 10:30',
    walkthrough: "In-person",
    booking: true
  },
  {
    house_id: 'Pearl Street',
    date: '10/10/2020',
    timeWindow: '10:30 - 11:00',
    walkthrough: "In-person",
    booking: true
  },
  {
    house_id: 'Pearl Street',
    date: '10/10/2020',
    timeWindow: '12:30 - 13:00',
    walkthrough: "In-person",
    booking: true
  },
  {
    house_id: 'Pearl Street',
    date: '10/10/2020',
    timeWindow: '16:30 - 17:00',
    walkthrough: "In-person",
    booking: true
  },
  {
    house_id: 'Pearl Street',
    date: '10/11/2020',
    timeWindow: '10:00 - 10:30',
    walkthrough: "In-person",
    booking: true
  },
  {
    house_id: 'Pearl Street',
    date: '10/11/2020',
    timeWindow: '11:00 - 11:30',
    walkthrough: "In-person",
    booking: true
  },
  {
    house_id: 'Pearl Street',
    date: '10/11/2020',
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