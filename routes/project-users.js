const express = require('express')
const router = express.Router()

const projectUsersController = require("../controller/project-users")

router.get("/projects-user", projectUsersController.getProjectUsers);

router.post("/projects-user", projectUsersController.addUserToProject);

router.post("/find-project-user", projectUsersController.getProjectUserById);

router.patch("/edit-project-user", projectUsersController.addUserToProject);

module.exports = router;