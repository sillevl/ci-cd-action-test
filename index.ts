import express from 'express';

// Create a new express application instance
const app: express.Application = express();

app.get('/', function (req, res) {
  res.send('Hello World with GitHub Actions!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
