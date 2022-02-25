const express = require('express')
const router = express.Router()

const taskController = require("../controller/task")

router.get("/tasks", taskController.getTasks);

router.delete("/delete-task", taskController.deleteTaskById);

router.post("/tasks", taskController.addTask);

router.post("/find-task", taskController.getTaskById);

router.patch("/edit-task", taskController.editTaskById);

module.exports = router;