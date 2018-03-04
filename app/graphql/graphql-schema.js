const wordModel = require('../data/words.data');
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLID,
} = require('graphql');

const wordType = new GraphQLObjectType({
  name: 'Word',
  description: 'this is a single word',
  fields: {
    id: {
      type: GraphQLID,
      description: 'this is the word id'
    },
    lang: {
      type: GraphQLString,
      description: ''
    },
    word: {
      type: GraphQLString,
      description: ''
    },
    type: {
      type: GraphQLString,
      description: ''
    },
    synonym: {
      type: new GraphQLList(GraphQLString),
      description: ''
    },
    pronounce: {
      type: GraphQLString,
      description: ''
    },
    description: {
      type: GraphQLString,
      description: ''
    },
    soundUrl: {
      type: GraphQLString,
      description: ''
    },
    images: {
      type: new GraphQLList(GraphQLString),
      description: ''
    },
    examples: {
      type: new GraphQLList(GraphQLString),
      description: ''
    },
    videos: {
      type: new GraphQLList(GraphQLString),
      description: ''
    },
    tags: {
      type: new GraphQLList(GraphQLString),
      description: ''
    }
  }
})

const queryType = new GraphQLObjectType({
  name: 'Query',
  description: 'this is the query type',
  fields: {
    words: {
      type: new GraphQLList(wordType),
      description: 'this is the list of words returned',
      resolve: (_, args) => {
        return wordModel.getAllWords();
      }
    },
    word: {
      type: wordType,
      description: 'this is single word return',
      args: {
        id: {
          type: GraphQLID,
          description: 'this is the search id',
        }
      },
      resolve: (_, args) => {
        return wordModel.getWordById(args.id);
      }
    }
  }
})

const schema = new GraphQLSchema({
  query: queryType
});

exports.schema = schema;