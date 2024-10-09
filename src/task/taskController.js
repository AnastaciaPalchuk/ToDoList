const { TaskService } = require("./taskService");
const DataBase = require("../infra/Database");
const { AlreadyExists } = require("./errors/AlreadyExists");
const { UserNotFound } = require("../user/errors/UserNotFound");
const { NotFound } = require("./errors/NotFound");
const { TaskRepository } = require("./taskRepository");

class TaskController {
  constructor(service) {
    this.service = service;
  }

  addTaskToUser = async (ctx) => {
    const task = ctx.request.body;
    try {
      const addTask = await this.service.addTask(
        ctx.userId,
        task.taskName,
        task.isDone
      );

      ctx.body = { message: true };
    } catch (err) {
      if (err instanceof AlreadyExists) {
        ctx.status = 400;
        ctx.body = err.message;
        return;
      }
      throw err;
    }
  };

  isCompleted = async (ctx) => {
    const task = ctx.request.body;

    try {
      await this.service.makeCompleted(ctx.userId, task.taskId);
      ctx.body = { success: true };
    } catch (err) {
      // console.log(err);
      if (err instanceof UserNotFound || err instanceof NotFound) {
        ctx.status = 404;
        ctx.body = err.message;
        return;
      }
    }
  };

  getList = async (ctx) => {
    ctx.body = await this.service.getList(ctx.userId);
  };
}
const repository = new TaskRepository(DataBase);
const service = new TaskService(repository);
module.exports = new TaskController(service);
