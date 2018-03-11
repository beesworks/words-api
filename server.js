'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 8080;
var path = require('path');
var cors = require('cors');

const { schema } = require('./app/graphql/graphql-schema');
const graphqlHTTP = require('express-graphql');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/graphql', cors(), graphqlHTTP({
  schema,
  graphiql: true,
}))

app.listen(process.env.PORT || port);
console.log(`start listening to http://localhost:${port}`);