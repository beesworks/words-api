const {
  GraphQLList,
  GraphQLString,
  GraphQLInputObjectType,
  GraphQLNonNull,
} = require('graphql');

exports.wordInput = new GraphQLInputObjectType({
  name: 'WordInput',
  description: '',
  fields: {
    lang: {
      type: GraphQLString,
      description: '',
    },
    word: {
      type: new GraphQLNonNull(GraphQLString),
      description: '',
    },
    type: {
      type: GraphQLString,
      description: '',
    },
    synonym: {
      type: new GraphQLList(GraphQLString),
      description: '',
    },
    pronounce: {
      type: GraphQLString,
      description: '',
    },
    description: {
      type: GraphQLString,
      description: '',
    },
    soundUrl: {
      type: GraphQLString,
      description: '',
    },
    images: {
      type: new GraphQLList(GraphQLString),
      description: '',
    },
    examples: {
      type: new GraphQLList(GraphQLString),
      description: '',
    },
    videos: {
      type: new GraphQLList(GraphQLString),
      description: '',
    },
    tags: {
      type: new GraphQLList(GraphQLString),
      description: '',
    },
  }
});