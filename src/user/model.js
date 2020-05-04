const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
      first_name:  String,
      last_name: String,
      age: {
        value: Number
      },
      date: {
        type: Date,
        default: Date.now
      },
      updatedAt: {
        type: Date,
        default: null
      }
});

const storySchema = new Schema(
  {
    author:
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      },
    title: String
  }
);

userSchema.pre('update', function() {
  this.set({ updatedAt: Date.now() });
});

const UserModel = mongoose.model('User', userSchema);
const StoryModel = mongoose.model('Story', storySchema);

module.exports = {
  UserModel,
  StoryModel
};