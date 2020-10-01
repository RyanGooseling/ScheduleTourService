/**
 * @jest-environment node
 */

import axios from 'axios';

describe('testing server endpoints', () => {
  test('endpoint returns Status 200', (done) => {
    axios.get('http://localhost:3004/houseId/1')
      .then((res) => {
        expect(res.status).toBe(200);
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test('endpoint returns generic Hello World! without db connection', (done) => {
    axios.get('http://localhost:3004/houseId/1')
      .then((res) => {
        expect(res.data).toBe('Hello World!');
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
});
