import { Request, Response, NextFunction, Router, request } from "express";
import { getRepository } from "typeorm";
import { User } from "../entity/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { privateKey, publicKey } from "../index";
import { IUser } from "src/entity/User.dto";
import { verifyJWT } from "../middleware";

const userRouter = Router();

userRouter.post(
  "/signup",
  async (request: Request, response: Response, next: NextFunction) => {
    const { password } = request.body;
    const hashPassword = await bcrypt.hash(password, 10);

    const _user = new User();
    const user: IUser = { ...request.body, password: hashPassword };

    for (let key in user) _user[key] = user[key];
    _user.password = hashPassword;
    const userRepository = getRepository(User);
    try {
      await userRepository.save(_user);
    } catch (error) {
      return response.send(error);
    }

    const userJWT = jwt.sign(
      { user: user.email, nickname: user.nickname },
      privateKey,
      { expiresIn: "1h", algorithm: "RS256" }
    );
    return response.send(userJWT);
  }
);

userRouter.get(
  "/login",
  async (request: Request, response: Response, next: NextFunction) => {
    const userRepository = getRepository(User);

    const { email, password } = request.body;
    const findUser = await userRepository.findOne({ email });
    if (await bcrypt.compare(password, findUser.password)) {
      try {
        const token = jwt.sign(
          { user: email, nickname: findUser.nickname },
          privateKey,
          { expiresIn: "1h", algorithm: "RS256" }
        );
        return response.send(token);
      } catch (err) {
        return response.send(err);
      }
    }
    else return response.status(401).send()
  }
);

userRouter.get(
  "/protected",
  verifyJWT,
  async (request: Request, response: Response, next: NextFunction) => {
    return response.send({ ok: "fine" });
  }
);

export default userRouter;
