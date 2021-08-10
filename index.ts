import serverless from "serverless-http";
import express, { Request, Response } from "express";
// const userController = require('./controllers/userController');

const app = express();
const router = express.Router();

router.get("/health", (req: Request, res: Response) => {
  res
    .status(200)
    .send({ status: "App Health is OK and ready to process requests...." });
});

// router.get('/user/list', userController.userlist);
// router.get('/user/detail/:id', userController.getUserById);

app.use("/api", router);

module.exports.handler = serverless(app);
