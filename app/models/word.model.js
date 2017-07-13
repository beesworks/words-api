var mongoose = require('./../../mongo.config');

var WordSchema = mongoose.Schema({
    lang: String,
    word: String,
    type: String,
    adjective: String,
    description: String,
    soundUrl: String,
    images: Array,
    examples: Array,
    videos: Array
}, { timestamps: { createdAt: 'addedAt', updatedAt: 'updatedAt' } });

var wordsModel = mongoose.model('Words', WordSchema);
module.exports = wordsModel;