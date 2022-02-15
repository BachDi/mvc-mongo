const url = require("url");
const { handleError, handleNotFound } = require("./helpers");
const { parseRequestBody } = require("./middlewares/parse-request-body");
const { taskController, userController } = require("./controller");

const routes = {
  GET: {
    "/tasks": {
      controller: taskController.getTasks,
      middlewares: [parseRequestBody],
    },
    "/users": {
      controller: userController.getUsers,
      middlewares: [parseRequestBody],
    },
  },
  DELETE: {
    "/delete-task": {
      controller: taskController.deleteTaskById,
      middlewares: [parseRequestBody],
    },
    "/delete-user": {
      controller: userController.deleteUserById,
      middlewares: [parseRequestBody],
    },
  },
  POST: {
    "/tasks": {
      controller: taskController.addTask,
      middlewares: [parseRequestBody],
    },
    "/find-task": {
      controller: taskController.getTaskById,
      middlewares: [parseRequestBody],
    },
    "/sign-up": {
      controller: userController.signUp,
      middlewares: [parseRequestBody],
    },
    "/find-user": {
      controller: userController.getUserById,
      middlewares: [parseRequestBody],
    },
  },
  PATCH: {
    "/edit-task": {
      controller: taskController.editTaskById,
      middlewares: [parseRequestBody],
    },
    "/edit-user": {
      controller: userController.editUserById,
      middlewares: [parseRequestBody],
    },
  },
};

function getRouter(req) {
  const parsedUrl = url.parse(req.url, true);
  console.log(req.method, parsedUrl.pathname);
  if (routes[req.method] && routes[req.method][parsedUrl.pathname]) {
    const currentRouteData = routes[req.method][parsedUrl.pathname];
    if (
      currentRouteData.middlewares &&
      currentRouteData.middlewares.length > 0
    ) {
      return function controller(req, res) {
        try {
          let promise = currentRouteData.middlewares[0](req, res);
          currentRouteData.middlewares.forEach((middleware, index) => {
            if (index > 0) {
              promise.then(() => middleware(req, res));
            }
          });
          // Call controller after all interceptor (middlewares)
          promise.then(() => currentRouteData.controller(req, res));
          return promise;
        } catch (error) {
          handleError(error, "router.js", "route() -> controller()");
          res.statusCode = 500;
          res.end();
        }
      };
    }
    return routes[req.method][parsedUrl.pathname].controller;
  }

  return handleNotFound;
}

module.exports = { routes, getRouter };
