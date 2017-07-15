var Word = require('./../models/word.model');

module.exports = {
    insertWord: (word) => {
        let newWord = new Word(word);
        return newWord.save();
    }
}