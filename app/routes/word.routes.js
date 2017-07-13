module.exports = function (app) {
    var express = require('express');
    var router = express.Router();
    var wordManager = require("./../data/words.data");

    app.use('/api/word', router);

    router.post('/', function (req, res, next) {
        let word = {
            lang: req.body.lang,
            word: req.body.word,
            type: req.body.type,
            adjective: req.body.adjective,
            description: req.body.description,
            soundUrl: req.body.soundUrl,
            images: req.body.images,
            examples: req.body.examples,
            videos: req.body.videos
        };

        wordManager.insertWord(word, (data) => {
            console.log(data);
            res.json(201, data);
        })

    });

    router.get('/', function (req, res, next) {

    });

    router.put('/', function (req, res, next) {

    });

    router.delete('/', function (req, res, next) {

    });

};
