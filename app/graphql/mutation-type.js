const { GraphQLObjectType, GraphQLID } = require("graphql");
const { wordInput } = require("./words/word-input");
const { wordType } = require("./words/word-type");
const { userInput } = require("./users/user-input");
const { userType } = require("./users/user-type");
const wordModel = require("../data/words.data");
const userModel = require("../data/users.data");

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
    createUser: {
      type: userType,
      args: {
        user: {
          type: userInput,
          description: "this is the input type"
        }
      },
      resolve: (_, args) => {
        return userModel.createUser(args.user);
      }
    },
  }
});
