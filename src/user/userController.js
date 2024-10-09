const { UserService } = require("./userService");
const DataBase = require("../infra/Database");
const { UserNotFound } = require("./errors/UserNotFound");
const { UserRepository } = require("./userRepository");

class UserController {
  constructor(service) {
    this.service = service;
  }

  find = async (ctx) => {
    try {
      const result = await this.service.findUser(ctx.userId);
      ctx.body = result;
    } catch (err) {
      if (err instanceof UserNotFound) {
        ctx.status = 404;
        ctx.body = err.message;
        return;
      }
    }
  };
}
const repository = new UserRepository(DataBase);
const service = new UserService(repository);
module.exports = new UserController(service);
