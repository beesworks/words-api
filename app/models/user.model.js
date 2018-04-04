var mongoose = require('./mongo.config');

var UserSchema = mongoose.Schema({
    username: String,
    password: String,
    email: String,
    facebook: String,
}, { timestamps: { createdAt: 'addedAt', updatedAt: 'updatedAt' } });

var usersModel = mongoose.model('Users', UserSchema);
module.exports = usersModel;