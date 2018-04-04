const {
  GraphQLString,
  GraphQLInputObjectType,
  GraphQLNonNull,
} = require('graphql');

exports.userInput = new GraphQLInputObjectType({
  name: 'UserInput',
  description: '',
  fields: {
    username: {
      type: GraphQLString,
      description: '',
    },
    email: {
      type: GraphQLString,
      description: '',
    },
    password: {
      type: GraphQLString,
      description: '',
    },
    facebook: {
      type: GraphQLString,
      description: '',
    },
  }
});