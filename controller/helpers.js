const crypto = require("crypto");
const { taskModel, userModel, projectModel } = require("../models");

//----Task----//

function findProjects(project = {}) {
  return projectModel.find(project);
}

function insertProject(project) {
  const newProject = {
    projectName: task.projectName,
    isDone: false,
    createdBy: project.createdBy,
  };
  console.log(newProject);
  return taskModel.create(newProject);
}

function updateProject(projectId, project) {
  return projectModel.findByIdAndUpdate(projectId, project);
}

function findProjectById(projectId) {
  return projectModel.findById(projectId);
}

function handleAuthResponse(response, isSuccessful = false) {
  const data = {
    status: isSuccessful ? "success" : "fail",
  };
  response.setHeader("Content-Type", "application/json");
  response.end(JSON.stringify(data));
}


//----Task----//

function findTasks(task = {}) {
  return taskModel.find(task);
}

function insertTask(task) {
  const newTask = {
    taskName: task.taskName,
    isDone: false,
    isDeleted: false,
  };
  console.log(newTask);
  return taskModel.create(newTask);
}

function updateTask(taskId, task) {
  return taskModel.findByIdAndUpdate(taskId, task);
}

function findTaskById(taskId) {
  return taskModel.findById(taskId);
}

function handleAuthResponse(response, isSuccessful = false) {
  const data = {
    status: isSuccessful ? "success" : "fail",
  };
  response.setHeader("Content-Type", "application/json");
  response.end(JSON.stringify(data));
}

//----User----//

function insertUser(user) {
  const password = user.password ? hashPassword(user.password) : undefined;
  const newUser = {
    username: user.username,
    password: password,
    tasks: user.tasks,
    isAdmin: user.isAdmin,
  };
  console.log(newUser);
  return userModel.create(newUser);
}

function findUsers(user = {}) {
  return userModel.find(user);
}

function updateUser(userId, user) {
  return userModel.findByIdAndUpdate(userId, user);
}

function findUserById(userId) {
  return userModel.findById(userId);
}

function hashPassword(password) {
  // const hmac = crypto.createHmac('sha256', 'Sup3r_s3cr3t_k3yyyy');
  const hash = crypto.createHash("sha256");
  return hash.update(password).digest("hex");
}

function validateUser(user) {
  return userModel.find({
    username: user.username,
    password: hashPassword(user.password),
  });
}

function verifyUser(user) {
  const signingInUser = {
    ...user,
    password: hashPassword(user.password)
  }
  return userModel.findOne(user);
}

module.exports = {
  findProjects,
  insertProject,
  updateProject,
  findProjectById,
  findTasks,
  insertTask,
  updateTask,
  findTaskById,
  handleAuthResponse,
  findUsers,
  insertUser,
  updateUser,
  findUserById,
  validateUser,
  verifyUser,
};
