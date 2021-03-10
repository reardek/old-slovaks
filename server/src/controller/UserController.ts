import { validateOrReject } from "class-validator";
import { Request, Response, NextFunction, Router } from "express";
import { getRepository } from "typeorm";
import { User } from "../entity/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { privateKey } from "../index";
import { IUser } from "src/entity/User.dto";

const userRouter = Router();

userRouter.post(
  "/register",
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

export default userRouter;
