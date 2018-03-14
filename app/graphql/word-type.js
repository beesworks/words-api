const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLID
} = require("graphql");

exports.wordType = new GraphQLObjectType({
  name: "Word",
  description: "this is a single word",
  fields: {
    id: {
      type: GraphQLID,
      description: "this is the word id"
    },
    lang: {
      type: GraphQLString,
      description: ""
    },
    word: {
      type: GraphQLString,
      description: ""
    },
    type: {
      type: GraphQLString,
      description: ""
    },
    synonym: {
      type: new GraphQLList(GraphQLString),
      description: ""
    },
    pronounce: {
      type: GraphQLString,
      description: ""
    },
    description: {
      type: GraphQLString,
      description: ""
    },
    soundUrl: {
      type: GraphQLString,
      description: ""
    },
    images: {
      type: new GraphQLList(GraphQLString),
      description: ""
    },
    examples: {
      type: new GraphQLList(GraphQLString),
      description: ""
    },
    videos: {
      type: new GraphQLList(GraphQLString),
      description: ""
    },
    tags: {
      type: new GraphQLList(GraphQLString),
      description: ""
    },
    addedAt: {
      type: GraphQLString,
      description: ""
    },
    updatedAt: {
      type: GraphQLString,
      description: ""
    }
  }
});
