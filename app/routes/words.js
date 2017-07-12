module.exports = function (app) {
    var express = require('express');
    var router  = express.Router();
    var Word = require('./../models/word');

    app.use('/api/word', router);

    router.post('/', function (req, res) {
        
    });

    router.get('/', function (req, res) {
        
    });

    router.put('/', function (req, res) {
        
    });

    router.delete('/', function (req, res) {

    });

};
