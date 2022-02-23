const { handleError, handleAuthResponse } = require("../helpers");
const {
  findProjects,
  insertProject,
  updateProject,
  findProjectById,
} = require("./helpers");

function addTaskToProject(request, response) {
  const project = request.body;
  const projectId = project._id;
  const taskId = project.taskId;
  const tasks = project.tasks || [];
  tasks.push(taskId);
  const newProject = {
    ...project,
    tasks: tasks,
  };
  updateProject(projectId, newProject)
    .then(() => {
      handleAuthResponse(response, true);
    })
    .catch((error) => {
      handleError(error, "controllers/project-tasks.js", "addTaskToProject");
      handleAuthResponse(response, false);
    });
}
module.exports = {
  addTaskToProject,
};
