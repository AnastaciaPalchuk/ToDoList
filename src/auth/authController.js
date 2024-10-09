const { AuthService } = require("./authService");
const DataBase = require("../infra/Database");
const { WrongCredentials } = require("./errors/WrongCredentials");
const { UserAlreadyExists } = require("./errors/UserAlreadyExists");
const { AuthRepository } = require("./authRepository");

// HTTP;
class AuthController {
  constructor(service) {
    this.service = service;
  }

  create = (ctx) => {
    const user = ctx.request.body;
    try {
      const userInfo = this.service.createUser(
        user.name,
        user.surname,
        user.email,
        user.password
      );
      ctx.body = { userInfo };
    } catch (err) {
      if (err instanceof UserAlreadyExists) {
        ctx.status = 403;
        ctx.body = err.message;
        return;
      }
    }
  };

  login = async (ctx) => {
    const user = ctx.request.body;
    try {
      const userSignIn = await this.service.loginUser(
        user.email,
        user.password
      );
      ctx.body = userSignIn;
    } catch (err) {
      if (err instanceof WrongCredentials) {
        ctx.status = 400;
        ctx.body = err.message;
        return;
      }
    }
  };
}

const repository = new AuthRepository(DataBase);
const service = new AuthService(repository);
module.exports = new AuthController(service);
