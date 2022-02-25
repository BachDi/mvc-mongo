const express = require('express')
const router = express.Router()

const projectController = require("../controller/project")

router.get("/projects", projectController.getProjects);

router.delete("/delete-project", projectController.deleteProjectById);

router.post("/projects", projectController.addProject);

router.post("/find-project", projectController.getProjectById);

router.patch("/edit-project", projectController.editProjectById);

module.exports = router;