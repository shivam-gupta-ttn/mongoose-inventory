const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema(
  {
    item_name: {
      type: String,
      required: true
    },
    quantity:{ type:Number, required: true},
    isSanitized: Boolean,
    unit: {type:String, required:true},
    expiryDate: String,
    createdDate: {
      type: Date,
      default: Date.now
    },
    updatedAt: {
      type: Date,
      default: null
    },
    category: {
      type: String
    },
    location: {
      type: String
    }
  });

itemSchema.pre('update', function () {
  this.set({ updatedAt: Date.now() });
});

const itemModel = mongoose.model('Item', itemSchema);

module.exports = {
  itemModel
};