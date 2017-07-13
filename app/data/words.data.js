var Word = require('./../models/word.model');

module.exports = {
    insertWord: (word, next) => {
        let newWord = new Word(word);
        newWord.save()
            .then((data) => {
                console.log(data);
                if (data) {
                    callback(data);
                } else {
                    callback(null);
                }
            }, (error) => {
                console.log(error);
            }).catch((ex) => {
                console.log(ex);
            });
    }
}