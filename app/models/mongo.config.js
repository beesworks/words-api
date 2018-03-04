var mongoose = require('mongoose');

mongoose.Promise = require('bluebird');

if (process.env.NODE_ENV === 'production') {
    mongoose.connect('mongodb://heroku_m57t1s62:cc4bcejjtvbrk0pe51dg42kmsd@ds035975.mlab.com:35975/heroku_m57t1s62');
} else {
    mongoose.connect('mongodb://heroku_m57t1s62:cc4bcejjtvbrk0pe51dg42kmsd@ds035975.mlab.com:35975/heroku_m57t1s62');
    // mongoose.connect('mongodb://localhost/words');
}

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log("Connected to Database Words");
});

module.exports = mongoose;