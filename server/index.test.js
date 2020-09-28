/**
 * @jest-environment node
 */
const axios = require('axios');
const server = require('./index.js');

const api = axios.create({ baseURL: 'http://localhost:3004'});


beforeAll(() => {
  server.start();
});

afterAll(() => {
  server.close();
});

test('/ endpoint returns Hello World!', async () => {
  const {data, status} = await api.get('/');
  expect(status).toBe(200);
  expect(data).toEqual('Hello World!');
});