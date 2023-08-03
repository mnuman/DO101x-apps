var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello peoples!\n');
});
app.get('/mars', function (req, res) {
  res.send('Hello Martians!\n');
});
app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

