const { GraphQLObjectType, GraphQLID } = require("graphql");
const { wordInput } = require("./word-input");
const { wordType } = require("./word-type");
const wordModel = require("../data/words.data");

exports.mutationType = new GraphQLObjectType({
  name: "Mutuation",
  description: "",
  fields: {
    addNewWord: {
      type: wordType,
      args: {
        word: {
          type: wordInput,
          description: "this is the input type"
        }
      },
      resolve: (_, args) => {
        return wordModel.insertWord(args.word);
      }
    },
    updateWord: {
      type: wordType,
      args: {
        id: {
          type: GraphQLID,
          description: ''
        },
        word: {
          type: wordInput,
          description: ''
        }
      },
      resolve: (_, args) => {
        return wordModel.updateWord(args.id, args.word);
      }
    },
    deleteWord: {
      type: wordType,
      args: {
        id: {
          type: GraphQLID,
          description: ''
        }
      },
      resolve: (_, args) => {
        return wordModel.deleteWord(args.id);
      }
    },
  }
});
