const express = require('express')
const router = express.Router()

const userController = require("../controller/user")

router.get("/users", userController.getUsers);

router.delete("/delete-user", userController.deleteUserById);

router.post("/sign-up", userController.signUp);

router.post("/sign-in", userController.signIn);

router.post("/find-user", userController.getUserById);

router.patch("/edit-user", userController.editUserById);

module.exports = router;