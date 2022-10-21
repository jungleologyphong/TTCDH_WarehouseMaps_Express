const User = require("../models/User");

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
    const UserList = await User.find({});

    return res.json(UserList);
  } catch (error) {
    console.error('error', error.message);

    res.status(404).json({ Message_API_GetAllUser: "ERROR_INTERNAL_SERVER_ERROR" });
  }
};
//http://localhost:8080/api/user/:id
exports.findUserByID = async (req, res) => {
  try {
    const userID = req.params.id;
    if (!userID) {
      return res.status(404).json({ Message_API_FindOne: "ERROR_MISSING_PARAMS" })
    }
    User.findById(userID).then(data => {
      if (!data) {
        res.status(404).json({ Message_API_FindOne: "Not found User with ID: " + id })
      }
      res.send(data);
    }).catch(err => {
      res.status(500).send({ Message_API_FindOne: "Error retrieving User with ID: " + id });
    });
  } catch (error) {
    console.log('error', error.message);
    res.status(404).json({ Message_API_FindOne: "ERROR_INTERNAL_SERVER_ERROR" });
  }
};
//http://localhost:8080/api/user/login
exports.signIn = async (req, res) => {
  try {
    const { email, password } = req.body

    console.log("Email: " + email + " & " + "Password: " + password);

    if (!email || !password) {
      return res.status(404).json({ Message_API_SignIn: "ERROR_MISSING_PARAMS" });
    }
    User.findOne({ email: email, password: email }).exec((error, doc) => {
      if (error) return res.status(404).json({ message: error.message });

      if (!doc) return res.status(404).json({ Message_API_SignIn: "ERROR_NOT_FOUND" });

      return res.json(doc);
    });
  } catch (error) {
    console.error('error', error.message);
    res.status(404).json({ Message_API_SignIn: "ERROR_INTERNAL_SERVER_ERROR" });
  }
}
//http://localhost:8080/api/user/changePassword/id
exports.changePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword, rePassword } = req.body;

    const { id } = req.params.id;

    if (!oldPassword || !newPassword || !rePassword || !id) {
      return res.status(404).json({ Message_API_ChangePassword: "ERROR_MISSING_PARAMS" });
    }
    User.findById(id).then(data => {
      if (!data) {
        return res.status(404).json({ Message_API_ChangePassword: "NOT FOUND USER WITH ID: " + id })
      } else {
        if (oldPassword === res.send(data.password)) {
          if (newPassword === rePassword) {
            User.findByIdAndUpdate(id, { password: rePassword }).then(dataChangePassword => {
              if (!dataChangePassword) {
                return res.status(404).json({ Message_API_FindOne: "ERROR_MISSING_PARAMS" })
              }
              res.send(dataChangePassword);
            }).catch(error => {
              console.log(message.err);
              res.status(500).send({ Message_API_FindOne: "ERROR RETRIEVING USER WITH ID: " + id });
            });
          }
        }
      }
    }).catch(err => {
      res.status(500).send({ Message_API_ChangePassword: "ERROR RETRIEVING USER WITH ID: " + id });
    });
  } catch (error) {
    console.log('error', error.message);
    res.status(404).json({ Message_API_FindOne: "ERROR_INTERNAL_SERVER_ERROR" });
  }
}

exports.changeInfomation = async (req, res) => {
  try {
    const {id} = req.params.id

    const {newFullname, newTelephoneNumber, newCompanyUnit} = req.body;

    if(!id){
      return res.status(404).json({ Message_API_ChangeInfomation: "ERROR_MISSING_PARAMS" });
    }

    if(!newFullname || !newTelephoneNumber || !newCompanyUnit){
      return res.status(404).json({ Message_API_ChangeInfomation: "ERROR_MISSING_PARAMS" });
    }

    User.findByIdAndUpdate(id, {fullname: newFullname, telephoneNumber: newTelephoneNumber, companyUnit: newCompanyUnit}).then(data =>{
      if (!data) {
        res.status(404).json({ Message_API_FindOne: "Not found User with ID: " + id })
      }
      res.send(data);
    })
  } catch (error) {
    console.log('error', error.message);
    res.status(404).json({ Message_API_ChangeInfomation: "ERROR_INTERNAL_SERVER_ERROR"})
  }
}
