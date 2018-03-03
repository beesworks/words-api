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
                res.json({ success: false, data: ex });
            });
    });

    router.get('/:id', function (req, res, next) {
        let id = req.params.id;
        wordManager.getWordById(id)
            .then(function (data, error) {
                if (error) console.log(error);
                res.json({ success: true, data: data });
            })
            .catch(function (ex) {
                res.json({ success: false, data: ex });
            });
    });

    router.get('/', function (req, res, next) {
        wordManager.getAllWords()
            .then(function (data, error) {
                if (error) console.log(error);
                res.json({ success: true, data: data });
            })
            .catch(function (ex) {
                res.json({ success: false, data: ex });
            });
    });

    router.put('/', function (req, res, next) {
        wordManager.updateWord(req.body)
            .then(function (data, error) {
                if (error) console.log(error);
                res.json({ success: true, data: data });
            })
            .catch(function (ex) {
                res.json({ success: false, data: ex });
            });
    });

    router.delete('/', function (req, res, next) {
        wordManager.deleteWord(req.body.id)
            .then(function (data, error) {
                if (error) console.log(error);
                res.json({ success: true, data: data });
            })
            .catch(function (ex) {
                res.json({ success: false, data: ex });
            });
    });

};
