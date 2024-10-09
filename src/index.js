const Koa = require("koa");
const Router = require("@koa/router");
const bodyParser = require("koa-bodyparser");
const cors = require("@koa/cors");

const DataBase = require("./infra/Database");

const UserRouter = require("./user/userRouter");
const AuthRouter = require("./auth/authRouter");
const TaskRouter = require("./task/taskRouter");

 async function main() {
  const app = new Koa();
  app.use(cors());
  app.use(bodyParser());

  const router = new Router()

  await DataBase.connect();

  router.use('/task', TaskRouter.routes(), TaskRouter.allowedMethods());
  router.use('/auth', AuthRouter.routes(), AuthRouter.allowedMethods());
  router.use('/user', UserRouter.routes(), UserRouter.allowedMethods());

  app.use(router.routes());
  app.listen(1616, () => console.log("Started on port 1616"));
}

main();