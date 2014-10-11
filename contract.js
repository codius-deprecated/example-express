var express = require('express');
var app = express();

app.get('/', function(req, res) {
  console.log('got something!');  
});

app.listen(process.env.PORT || 5000);
