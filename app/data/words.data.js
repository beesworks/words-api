var Word = require("./../models/word.model");

module.exports = {
  insertWord: word => {
    let newWord = new Word(word);
    return newWord.save();
  },

  getAllWords: () => {
    return Word.find({});
  },

  getWordById: id => {
    return Word.findById(id);
  },

  updateWord: (id, word) => {
    return Word.findByIdAndUpdate(id, word);
  },

  deleteWord: id => {
    return Word.deleteOne({ _id: id });
  }
};
