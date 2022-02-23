const { handleError, handleAuthResponse } = require("../helpers");
const {
  findProjects,
  insertProject,
  updateProject,
  findProjectById,
} = require("./helpers");

function addUserToProject(request, response) {
  const project = request.body;
  const projectId = project._id;
  const userId = project.userId;
  const users = project.users || [];
  users.push(userId);
  const newProject = {
    ...project,
    users: users,
  };
  updateProject(projectId, newProject)
    .then(() => {
      handleAuthResponse(response, true);
    })
    .catch((error) => {
      handleError(error, "controllers/project-users.js", "addUserToProject");
      handleAuthResponse(response, false);
    });
}
module.exports = {
  addUserToProject,
};
