const axios = require('axios');
const server = require('./index.js');

const api = axios.create({ baseURL: 'http://localhost:3004'});


beforeAll(() => {
  server.start();
});

afterAll(() => {
  server.close();
});

test('endpoint returns Hello World!', () => {
  const {data, status} = api.get('/');
  axios

  expect(status).toBe(200);
  expect(data).toEqual('Hello World!');
});