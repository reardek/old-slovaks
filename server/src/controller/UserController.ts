import { request, response, Router } from "express";

const userRouter = Router();

userRouter.get("/", (request, response, next) => {
    response.send({"Ok": "lol"})
});

export default userRouter