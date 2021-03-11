import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { publicKey } from "./index";

const verifyJWT = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const token = request.headers.authorization.split(" ")[1];
  try {
    jwt.verify(token, publicKey, { algorithms: ["RS256"] });
  } catch (err) {
    return response.status(500).send(err);
  } finally {
    next();
  }
};

export { verifyJWT };
