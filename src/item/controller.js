const item = require('./service');

module.exports.create = async (req, res) => {
  console.log("inside controller")
  const response = await item.create(req.body);
  res.send(response);
};

module.exports.getAll = async (req, res) => {
  const response = await item.getAll();
  res.send(response);
};


module.exports.update = async (req, res) => {
  console.log(req.params)
  console.log(req.body)

  const response = await item.update(req.params, req.body);
  res.send(response);
};

module.exports.delete = async (req, res) => {
  const response = await item.delete(req.params);
  res.send(response);
};