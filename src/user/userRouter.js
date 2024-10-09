const Router = require("@koa/router")
const UserController = require("./userController");
const verifyToken = require("../middleWare/verifyToken");
const log = require("../middleWare/log");

const UserRouter = new Router();

UserRouter.get('/find',log, verifyToken, UserController.find)


module.exports = UserRouter;