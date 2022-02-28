const express = require('express')
const router = express.Router()
const { parseRequestBody } = require("../middlewares");

const userController = require("../controller/user")

router.use((request, response, next) => {
  parseRequestBody(request, response);
  next();
})

router.get("/users", userController.getUsers);

router.delete("/delete-user", userController.deleteUserById);

router.post("/users/sign-up", userController.signUp);

router.post("/users/sign-in", userController.signIn);

router.post("/find-user", userController.getUserById);

router.patch("/edit-user", userController.editUserById);

module.exports = router;