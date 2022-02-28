const express = require('express')
const router = express.Router()
const { parseRequestBody } = require("../middlewares");

const userController = require("../controller/user")

router.use("/", (request, response, next) => {
  parseRequestBody(request, response);
  next();
})

router.get("/", userController.getUsers);

router.delete("/delete-user", userController.deleteUserById);

router.post("/sign-up", userController.signUp);

router.post("/sign-in", userController.signIn);

router.post("/find-user", userController.getUserById);

router.patch("/edit-user", userController.editUserById);

// router.route("/").get(parseRequestBody, userController.getUsers)

// router.route("/:id").get(parseRequestBody, userController.getUsers)

module.exports = router;