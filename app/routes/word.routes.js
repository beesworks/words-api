module.exports = function (app) {
    var express = require('express');
    var router = express.Router();
    var wordManager = require("./../data/words.data");

    app.use('/api/word', router);

    router.post('/', function (req, res, next) {
        wordManager.insertWord(req.body)
            .then(function (data, error) {
                if (error) console.log(error);
                res.json({ success: true, data: data });
            })
            .catch(function (ex) {
                console.log(222);
                res.json(ex);
            });
    });

    router.get('/', function (req, res, next) {

    });

    router.put('/', function (req, res, next) {

    });

    router.delete('/', function (req, res, next) {

    });

};
