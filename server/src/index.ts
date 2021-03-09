import express, { Response, Request, NextFunction } from "express";
import { createConnection, getRepository } from "typeorm";
import config from "./ormconfig";
import dotenv from "dotenv";
import { User } from "./entity/User";
import { validate, validateOrReject } from "class-validator";
import userController from "./controller/UserController"

dotenv.config();

const app = express();
const router = express.Router()
app.use(express.json());
app.use("/users", userController)
createConnection(config).then((connection) => {
  app.get(
    "/test",
    (request: Request, response: Response, next: NextFunction) => {
      return response.send({ ok: "fine" });
    }
  );
  router.post(
    "/user",
    async (request: Request, response: Response, next: NextFunction) => {
      const body = request.body;
      const userValidate = new User(body.email, body.password);

      try {
        await validateOrReject(userValidate);
      } catch (errors) {
        return response.send(errors);
      }
      const userRepository = getRepository(User);
      const user = (await userRepository.insert(body)).identifiers;
      return response.send(user);
    }
  );

  app.listen(3000);
});
