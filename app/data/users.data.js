var User = require("./../models/user.model");

module.exports = {
  createUser: user => {
    let newUser = new User(user);
    return newUser.save();
  },

  getAllUsers: (top) => {
    return User.find({}).sort({ addedAt: '-1'}).limit(top);
  },

  getUserById: id => {
    return User.findById(id);
  },

  getUserByUsername: name => {
    return User.findOne({username: name});
  },

  updateUser: (id, user) => {
    return User.findByIdAndUpdate(id, user);
  },

  deleteUser: id => {
    return User.deleteOne({ _id: id });
  }
};
