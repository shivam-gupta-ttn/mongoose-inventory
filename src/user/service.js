const User = require('./model');

module.exports.create = async ({
  firstName,
  lastName,
  age
}) => {
  const user = await User.create({
    first_name: firstName,
    last_name: lastName,
    age
  });
  return user;
};

module.exports.getAll = async () => {
  const users = await User.find();
  return users;
};

module.exports.getByName = async ({ firstName }) => {
  const users = await User.find({
    first_name: firstName
  });
  return users;
};

module.exports.update = async ({ lastName }, { age }) => {
  const users = await User.update({
    last_name: lastName
  }, {
    age
  }, {
    multi: true
  });
  return users;
};

module.exports.delete = async ({ id }) => {
  const response = await User.deleteMany({
    _id: id
  });
  return response;
};