var express = require('express');
var index = express();index.get('/', function (req, res) {
  res.send('Hello World!');
});index.listen(3000, function () {
  console.log('hola owo 3000!');
});