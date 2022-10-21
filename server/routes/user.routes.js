module.exports = app => {
  const userController = require("../controller/user.controller");

  var router = require("express").Router();

  // Retrieve all Users
  router.get("/", userController.getAllUser);

  //Sign in
  router.get("/signin", userController.signIn);
  
  // Retrieve a single User with id
  router.get("/:id", userController.findUserByID);

  // Update a User with id
  router.put("/changeInfomation/:id", userController.changeInfomation);

  // Update a Password with UserId
  router.put("/changePassword:id", userController.changePassword);

  app.use("/api/users", router);
};
