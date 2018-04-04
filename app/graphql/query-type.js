const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLInt,
  GraphQLNonNull
} = require("graphql");
const wordModel = require("../data/words.data");
const { wordType } = require("./words/word-type");

exports.queryType = new GraphQLObjectType({
  name: "Query",
  description: "this is the query type",
  fields: {
    words: {
      type: new GraphQLList(wordType),
      description: "this is the list of words returned",
      args: {
        top: { type: GraphQLInt }
      },
      resolve: (_, args) => {
        return wordModel.getAllWords(args.top);
      }
    },
    word: {
      type: wordType,
      description: "this is single word return",
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
          description: "this is the search id"
        }
      },
      resolve: (_, args) => {
        return wordModel.getWordById(args.id);
      }
    }
  }
});
