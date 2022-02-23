const taskController = require("./task");
const userController = require("./user");
const projectController = require("./project")
const projectUsersController = require("./project-users");
const projectTasksController = require("./project-tasks");

module.exports = {
  taskController,
  userController,
  projectController,
  projectUsersController,
  projectTasksController,
};
