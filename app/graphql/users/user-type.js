const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLID
} = require('graphql');

exports.userType = new GraphQLObjectType({
  name: 'User',
  description: 'this is a single word',
  fields: {
    id: {
      type: GraphQLID,
      description: 'this is the word id'
    },
    username: {
      type: GraphQLString,
      description: ''
    },
    email: {
      type: GraphQLString,
      description: ''
    },
    password: {
      type: GraphQLString,
      description: ''
    },
    facebook: {
      type: GraphQLString,
      description: ''
    },
    addedAt: {
      type: GraphQLString,
      description: ''
    },
    updatedAt: {
      type: GraphQLString,
      description: ''
    }
  }
});
