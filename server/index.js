const express = require('express');
const app = express();
const port = 3004;

// Static files to be passed to front end
// Remember this is FRONT END capstone

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Bluefin listening at http://localhost:${port}`)
})