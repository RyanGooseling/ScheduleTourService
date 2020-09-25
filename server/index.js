const express = require('express');
const app = express();
const port = 3004;

// initialize express static file path

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Bluefin listening at http://localhost:${port}`);
});