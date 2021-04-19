const {
  itemModel
} = require('./model');


const checkCategory = (category) => {
  let allowed = false
  let value = ['Grocery', 'Medical', 'Fruits&Veg', 'Beverages', 'Babycare', 'Cleaning']
  value.map(e => {
    if (category === e) {
      allowed = true;
    }
  })
  console.log(allowed)
  return allowed;
}
const checkLocation = (location) => {
  let allowed = false
  let loc = ['Store', 'Kitchen']
  loc.map(e => {
    if (location === e) {
      allowed = true;
    }
  })
  console.log(allowed)
  return allowed;
}
const checkItemName = async (itemName) => {
  const exe = await itemModel.exists({ item_name: itemName })
  console.log(exe)
  return exe;
}
module.exports.create = async ({
  itemName,
  quantity,
  isSanitized,
  unit,
  expiryDate,
  category,
  location

}) => {
  if (checkItemName(itemName) === false) {
    if (checkCategory(category) && checkLocation(location)) {
      const item = await itemModel.create({
        item_name: itemName,
        quantity,
        isSanitized,
        unit,
        expiryDate,
        category,
        location

      });
      return {
        item
      };
    } else {
      console.log("Category or Location not valid");
      return null;
    }
  } else {
    console.log("ItemName found so updated that item")
    const items = await itemModel.update({ item_name: itemName }, {
      item_name: itemName,
      quantity,
      isSanitized,
      unit,
      expiryDate,
      category,
      location,
    }, {
      multi: true
    });
    return items;
  }
};

module.exports.getAll = async () => {
  const items = await itemModel.find();
  return items;
};

module.exports.update = async (
  { id }, { itemName, quantity, isSanitized, unit, expiryDate, category, location }
) => {
  console.log(id)
  const items = await itemModel.update({ _id: id }, {
    item_name: itemName,
    quantity,
    isSanitized,
    unit,
    expiryDate,
    category,
    location,
  }, {
    multi: true
  });
  return items;
};

module.exports.delete = async ({ id }) => {
  const response = await itemModel.deleteOne({
    _id: id
  });
  return response;
};