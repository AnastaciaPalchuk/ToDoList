const Router = require("@koa/router")
const TaskController = require("./taskController");
const verifyToken = require("../middleWare/verifyToken");
const log = require("../middleWare/log");

const TaskRouter = new Router();

TaskRouter.post('/',log, verifyToken, TaskController.addTaskToUser)
TaskRouter.patch('/ChangeIsDone',log, verifyToken, TaskController.isCompleted)
TaskRouter.get('/',log, verifyToken, TaskController.getList)

module.exports = TaskRouter;