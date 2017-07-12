var mongoose = require('mongoose');

if (process.env.NODE_ENV === 'production') {
    // TODO: add here connection for online mongodb    
} else {
    mongoose.createConnection('mongodb://localhost/words');
}

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(callback) {
    console.log("Connected to Database Words");
});

module.exports = mongoose;