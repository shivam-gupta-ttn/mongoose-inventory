const user = require('./service');

module.exports.create = async (req, res) => {
  const response = await user.create(req.body);
  res.send(response);
};

module.exports.getAll = async (req, res) => {
  const response = await user.getAll();
  res.send(response);
};

module.exports.getByName = async (req, res) => {
  const response = await user.getByName(req.query);
  res.send(response);
};

module.exports.update = async (req, res) => {
  const response = await user.update(req.query, req.body);
  res.send(response);
};

module.exports.delete = async (req, res) => {
  const response = await user.delete(req.params);
  res.send(response);
};