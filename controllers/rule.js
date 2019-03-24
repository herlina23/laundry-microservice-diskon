const Rule = require("../models/Rule");

module.exports = {
  index: (req, res) => {
    if (req.user.role == "admin") {
      Rule.find()
        .then(rule => res.json(rule))
        .catch(err => console.log(err));
    } else {
      res.sendStatus(403);
    }
  },
  show: (req, res) => {
    if (req.user.role == "admin") {
      Rule.findById(req.params.id)
        .then(rule => res.json(rule))
        .catch(err => console.log(err));
    } else {
      res.sendStatus(403);
    }
  },
  update: (req, res) => {
    if (req.user.role == "admin") {
      Rule.findOneAndUpdate(
        { _id: req.params.id },
        { $set: req.body },
        { new: true }
      )
        .then(rule => res.json(rule))
        .catch(err => console.log(err));
    } else {
      res.sendStatus(403);
    }
  },
  store: (req, res) => {
    if (req.user.role == "admin") {
      Rule.create({ ...req.body })
        .then(rule => res.json(rule))
        .catch(err => console.log(err));
    } else {
      res.sendStatus(403);
    }
  },
  destroy: (req, res) => {
    if (req.user.role == "admin") {
      Rule.findOneAndDelete({ _id: req.params.id })
        .then(rule => res.json(rule))
        .catch(err => console.log(err));
    } else {
      res.sendStatus(403);
    }
  }
};
