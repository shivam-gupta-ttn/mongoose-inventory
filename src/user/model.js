const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
      first_name:  String,
      last_name: String,
      age: Number,
      date: {
        type: Date,
        default: Date.now
      }
});

const Model = mongoose.model('User', userSchema);

module.exports = Model;