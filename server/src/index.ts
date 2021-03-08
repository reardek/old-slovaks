import express, { Response, Request, Errback, NextFunction, request, response } from "express";


const app = express()

app.get("/test", (request: Request, response: Response, next: NextFunction) => {
    return response.send({"ok": "fine"})
})

app.listen(3000)