'use strict';

var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var port        = process.env.PORT || 8080;
var path        = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('views', path.join(__dirname, './app/views'));
app.use(express.static(path.join(__dirname, './public')));
app.use('/scripts', express.static(path.join(__dirname, './node_modules')));

require('./app/routes/index')(app);

app.listen(process.env.PORT || port);
console.log('Express started on port ' + port);