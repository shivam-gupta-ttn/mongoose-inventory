const {
  UserModel,
  StoryModel
} = require('./model');

module.exports.create = async ({
  firstName,
  lastName,
  title,
  age
}) => {
  const user = await UserModel.create({
    first_name: firstName,
    last_name: lastName,
    age
  });
  const story = await StoryModel.create({
    author: user._id,
    title
  })
  return {
    user,
    story
  };
};

module.exports.getAll = async () => {
  const users = await UserModel.find();
  return users;

  // const stories = await StoryModel.find()
  //   .populate('author', 'first_name')
  //   .exec();
  // return stories;
};

module.exports.getByName = async ({ firstName }) => {
  const users = await UserModel.find({
    first_name: firstName
  });
  return users;
};

module.exports.update = async ({ lastName }, { age }) => {
  const users = await UserModel.update({
    last_name: lastName
  }, {
    age
  }, {
    multi: true
  });
  return users;
};

module.exports.delete = async ({ id }) => {
  const response = await UserModel.deleteMany({
    _id: id
  });
  return response;
};