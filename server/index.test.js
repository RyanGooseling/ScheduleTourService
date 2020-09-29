/**
 * @jest-environment node
 */

import axios from 'axios';
const Tour = require('../mongo-db/Tour.js');
const db = require('../mongo-db/index.js');

describe('testing server endpoints', () => {
  test('endpoint returns Status 200', (done) => {
    axios.get('http://localhost:3004')
      .then((res) => {
        expect(res.status).toBe(200);
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test('endpoint returns Hello World!', (done) => {
    axios.get('http://localhost:3004')
      .then((res) => {
        expect(res.data).toBe('Hello World!');
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
});

// === The db queries will FAIL at the moment because the seeding was not approved at the time this branch was created. This is the first of many testing branches ====

describe('testing db queries', () => {
  test('check my db query returns an array', (done) => {
    Tour.find({})
      .then((tours) => {
        expect(Array.isArray(tours)).toBe(true);
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test('check my db has 10000 entries', (done) => {
    Tour.find({})
      .then((tours) => {
        expect(tours.length).toBe(10000);
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test('check a db entry is an object', (done) => {
    Tour.find({})
      .then((tours) => {
        let index = Math.floor(Math.random() * tours.length);
        expect(typeof tours[index]).toBe('object');
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
});