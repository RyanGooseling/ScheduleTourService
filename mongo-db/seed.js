const db = require('./index.js');
const Tour = require('./Tour.js');

const dates = [ '2020-10-13', '2020-10-14', '2020-10-15', '2020-10-16', '2020-10-17', '2020-10-18', '2020-10-19', '2020-10-20', '2020-10-21', '2020-10-22', '2020-10-23', '2020-10-24', '2020-10-25', '2020-10-26', '2020-10-27', '2020-10-28', '2020-10-29', '2020-10-30', '2020-10-31', '2020-11-01', '2020-11-02', '2020-11-03', '2020-11-04', '2020-11-05', '2020-11-06', '2020-11-07', '2020-11-08', '2020-11-09', '2020-11-10', '2020-11-11', '2020-11-12'];

const timeWindows = ['09:00 - 09:30', '09:30 - 10:00', '10:00 - 10:30', '10:30 - 11:00', '11:00 - 11:30', '12:30 - 13:00', '13:00 - 13:30', '13:30 - 14:00', '14:00 - 14:30', '14:30 - 15:00', '15:00 - 15:30', '15:30 - 16:00', '16:00 - 16:30', '16:30 - 17:00', '17:00 - 17:30', '17:30 - 18:00'];

const walkthroughs = ['In-person', 'Video'];

const sampleTourRand = function() {
  const dateRand = Math.floor(Math.random() * dates.length);
  const timeRand = Math.floor(Math.random() * timeWindows.length);
  const walkRand = Math.floor(Math.random() * walkthroughs.length);

  const singleSchedule = {
    date: dates[dateRand],
    timeWindow: timeWindows[timeRand],
    walkthrough: walkthroughs[walkRand],
    booking: true
  };
  return singleSchedule;
};

let sampleTours = [];

const populate = function() {
  for (var i = 1; i < 101; i++) {
    const sampleHouseTours = [];
    while (sampleHouseTours.length < 100) {
      let houseSchedule = {
        houseId: i,
        schedule: sampleTourRand()
      };
      sampleHouseTours.push(houseSchedule);
    }
    sampleTours = sampleTours.concat(sampleHouseTours);
  }
};

const insertTours = function() {
  Tour.create(sampleTours)
    .then(() => db.close())
    .catch((err) => {
      console.log('Error: ', err);
    });
};

populate();
insertTours();