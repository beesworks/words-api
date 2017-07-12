module.exports = function (app) {
    var express = require('express');
    var router = express.Router();

    app.use(function (req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

        if ('OPTIONS' == req.method) {
            res.send(200);
        } else {
            next();
        }
    });

    app.use('/api', router);
    router.get('/', function (req, res) {
        res.send("you are inside the api server, welcome !!!");
    });

    require('./words')(app);

    // Error Handling
    app.use(function (err, req, res, next) {
        //logger.log("error", "Something wrong with an XHR request", err.stack);
        res.status(err.status || 500).send({
            message: err.message,
            error: err
        });
    });
};