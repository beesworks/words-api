var mongoose = require('mongoose');

mongoose.Promise = require('bluebird');

if (process.env.NODE_ENV === 'production') {
    // TODO: add here connection for online mongodb    
} else {
    mongoose.connect('mongodb://localhost/words');
}

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log("Connected to Database Words");
});

module.exports = mongoose;