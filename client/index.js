var express = require('express');
var index = express();index.get('/', function (req, res) {
  res.send('Hello World!    owo');
});index.listen(3000, function () {
  console.log('hola owo 3000!');
});