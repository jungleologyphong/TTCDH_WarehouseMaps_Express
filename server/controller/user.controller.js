const Users = require("../models/User");

exports.create = (req, res) => {
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
//http://localhost:8080/api/user
exports.getAllUser = async (req, res) => {
  try {
    const UserList = await Users.find({});

    return res.json(UserList);
  } catch (error) {
    console.error('error', error.message);

    res.status(404).json({ Message_API_GetAllUser: "ERROR_INTERNAL_SERVER_ERROR" });
  }
};

exports.signIn = async (req, res) => {
  try {
    const { email, password } = req.body

    console.log("Email: " + email + " & " + "Password: " + password);

    if (!email || !password) {
      return res.status(404).json({ Message_API_SignIn: "ERROR_MISSING_PARAMS" });
    }
    Users.findOne({ email: email, password: password }).exec((error, doc) => {
      if (error) return res.status(404).json({ message: error.message });

      if (!doc) return res.status(404).json({ Message_API_SignIn: "ERROR_NOT_FOUND" });

      res.redirect('/dashboard');
    });
  } catch (error) {
    console.error('error', error.message);
    res.status(404).json({ Message_API_SignIn: "ERROR_INTERNAL_SERVER_ERROR" });
  }
}


