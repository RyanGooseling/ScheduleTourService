/**
 * @jest-environment node
 */

import axios from 'axios';

describe('testing server endpoints', () => {
  test('endpoint returns Status 200', (done) => {
    axios.get('http://localhost:3004/house/1')
      .then((res) => {
        expect(res.status).toBe(200);
        done();
      })
      .catch((err) => {
        done(err);
      });
  });


  test('endpoint does not return generic Hello World!', (done) => {
    axios.get('http://localhost:3004/house/1')
      .then((res) => {
        expect(res.data).not.toBe('Hello World!');
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test('endpoint returns an array of data', (done) => {
    axios.get('http://localhost:3004/house/1')
      .then((res) => {
        expect(Array.isArray(res.data)).toBe(true);
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
});
