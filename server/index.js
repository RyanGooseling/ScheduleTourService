const express = require('express');
const app = express();
const port = 3004;

// what about requiring "path"

app.use(express.static(__dirname + '/../client/dist'));

app.get('/', (req, res) => {
  debugger;
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Bluefin listening at http://localhost:${port}`);
});