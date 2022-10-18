const db = require("../models");
const User = db.User;

exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a User
  const user = new User({
    fullname: req.body.fullname,
    email: req.body.email,
    password: req.body.password,
    telephoneNumber: req.body.telephoneNumber,
    companyUnit: req.body.companyUnit,
    pathImage: req.body.pathImage,
  });

  // Save Tutorial in the database
  user
    .save(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User.",
      });
    });
};
