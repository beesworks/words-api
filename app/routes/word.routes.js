module.exports = function (app) {
    var express = require('express');
    var router = express.Router();
    var wordManager = require("./../data/words.data");

    app.use('/api', router);

    router.post('/word', function (req, res, next) {
        wordManager.insertWord(req.body)
            .then(function (data, error) {
                if (error) console.log(error);
                res.json({ success: true, data: data });
            })
            .catch(function (ex) {
                res.json({ success: false, data: ex });
            });
    });

    router.get('/word/:id', function (req, res, next) {
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

    router.get('/word', function (req, res, next) {
        wordManager.getAllWords()
            .then(function (data, error) {
                if (error) console.log(error);
                res.json({ success: true, data: data });
            })
            .catch(function (ex) {
                res.json({ success: false, data: ex });
            });
    });

    router.put('/word', function (req, res, next) {
        wordManager.updateWord(req.body)
            .then(function (data, error) {
                if (error) console.log(error);
                res.json({ success: true, data: data });
            })
            .catch(function (ex) {
                res.json({ success: false, data: ex });
            });
    });

    router.delete('/word', function (req, res, next) {
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
