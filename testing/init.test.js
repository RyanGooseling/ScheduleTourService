const server = require('../server/index');
const express = require('express');
const app = express();

test('sanity check true === true', () => {
  expect(true).toBe(true);
});

/*

test('app.get in server', done => {
  function callback(req, res) {
    try {
      expect(res.send('Hello World!').toBe('Hello World!'));
      done();
    } catch (error) {
      done(error);
    }
  }

  app.get('/', callback);
});

*/