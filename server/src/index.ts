import express, { Response, Request, NextFunction } from "express";
import { createConnection, getRepository } from "typeorm";
import config from "./ormconfig";
import cors from "cors";
import fs from "fs";
import userController from "./controller/UserController";
import "reflect-metadata";

const privateKey = fs.readFileSync(__dirname + "/../privateKey.pem");
const publicKey = fs.readFileSync(__dirname + "/../publicKey.pem");
export { privateKey, publicKey };
const app = express();
app.use(express.json());
app.use(cors());
app.use("/users", userController);
createConnection(config).then((connection) => {
  app.listen(process.env.NODE_ENV !== "prod" ? 3001 : 80);
});
