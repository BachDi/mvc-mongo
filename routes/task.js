const express = require('express')
const router = express.Router()
const { parseRequestBody } = require("../middlewares");

const taskController = require("../controller/task")

router.use((request, response, next) => {
  parseRequestBody(request, response);
  next();
})

router.get("/tasks", taskController.getTasks);

router.delete("/delete-task", taskController.deleteTaskById);

router.post("/tasks", taskController.addTask);

router.post("/find-task", taskController.getTaskById);

router.patch("/edit-task", taskController.editTaskById);

module.exports = router;