/**
 * @jest-environment node
 */
const express = require('express');
const app = express();
const port = 3004;


app.get('/', (req, res) => {

});




app.listen(port, () => {
  console.log(`Bluefin listening at http://localhost:${port}`);
});