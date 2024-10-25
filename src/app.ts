// src/app.ts
import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";

// dotenv কনফিগারেশন
dotenv.config();

const app: Application = express();
app.use(express.json());

// সাধারণ API রেসপন্স
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to University LMS API!");
});

export default app;
