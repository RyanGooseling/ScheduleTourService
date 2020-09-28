const express = require('express');
const app = express();
const verifyServer = require('..server/index.js');

test('sanity check true === true', () => {
  expect(true).toBe(true);
});