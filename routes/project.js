const express = require('express')
const router = express.Router()
const { parseRequestBody } = require("../middlewares");

const projectController = require("../controller/project")

router.use((request, response, next) => {
  parseRequestBody(request, response);
  next();
})

router.get("/projects", projectController.getProjects);

router.delete("/projects/delete-project", projectController.deleteProjectById);

router.post("/projects/delete-project", projectController.addProject);

router.post("/projects/find-project", projectController.getProjectById);

router.patch("/projects/edit-project", projectController.editProjectById);

module.exports = router;