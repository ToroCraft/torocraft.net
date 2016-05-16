var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));

console.log('started server on 8001');
app.listen('8001');
