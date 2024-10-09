const Router = require("@koa/router");
const AuthController = require("./authController");
const log = require("../middleWare/log");
const validation = require("../middleWare/validation");
const authValidation = require("./authValidation")

const AuthRouter = new Router();

AuthRouter.post("/signUp", log, validation(authValidation.UserSignUp), AuthController.create);

AuthRouter.post("/signIn",log, validation(authValidation.UserSignIn), AuthController.login);

module.exports = AuthRouter;
