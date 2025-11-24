import axios = require('axios');
import express, {Request, Response} from "express";

const app = express();
const port = 3000;

app.get("/", (request: Request, response: Response) => {
    response.send("Hello, TypeScript with Express!")
});

app.listen(port, ()=>console.log(`server running at ${port}`));