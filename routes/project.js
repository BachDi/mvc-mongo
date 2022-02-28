const express = require('express')
const router = express.Router()
const { parseRequestBody } = require("../middlewares");

const projectController = require("../controller/project")

router.use((request, response, next) => {
  parseRequestBody(request, response);
  next();
})

router.get("/", projectController.getProjects);

router.delete("/delete-project", projectController.deleteProjectById);

router.post("/add-project", projectController.addProject);

router.post("/find-project", projectController.getProjectById);

router.patch("/edit-project", projectController.editProjectById);

module.exports = router;