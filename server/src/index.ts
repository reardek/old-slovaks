import express, { Response, Request, NextFunction } from "express";
import { createConnection, getRepository } from "typeorm";
import config from "./ormconfig";
import dotenv from "dotenv";
import fs from "fs";
import userController from "./controller/UserController";
import "reflect-metadata";

const privateKey = fs.readFileSync(__dirname + "/../privateKey.key");
export { privateKey };
const app = express();
app.use(express.json());
app.use("/users", userController);
createConnection(config).then((connection) => {
  app.listen(process.env.NODE_ENV !== "prod" ? 3000 : 80);
});
