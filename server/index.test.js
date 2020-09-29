/**
 * @jest-environment node
 */

import axios from 'axios';

describe('testing endpoints', () => {
  test('endpoint returns Status 200', (done) => {
    axios.get('http://localhost:3004')
      .then(res => {
        expect(res.status).toBe(200);
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test('endpoint returns Hello World!', (done) => {
    axios.get('http://localhost:3004')
      .then(res => {
        expect(res.data).toBe('Hello World!');
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
});

describe('testing db queries', () => {
  test('does my db exist', (done) => {

  });
});