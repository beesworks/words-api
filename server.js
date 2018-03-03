'use strict';

var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var port        = process.env.PORT || 8080;
var path        = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./app/routes/index')(app);

app.listen(process.env.PORT || port);
console.log(`start listening to http://localhost:${port}`);