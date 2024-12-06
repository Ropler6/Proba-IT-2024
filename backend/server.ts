import express from "express";
import type { Express, Request, Response } from "express"
import cors from "cors"
import authRouter from "./routes/auth.ts"
import recipesRouter from "./routes/recipes.ts"
import mongoose from "mongoose"

const PORT = 3000;
const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.get("/", (_: Request, res: Response) => {
  res.send("Hello from ExpressTS!");
});

app.use("/", authRouter);
app.use("/", recipesRouter);


mongoose.connect("mongodb://127.0.0.1:27017/test").then(() => {
  app.listen(PORT, () => {
    console.log(`[server]: Server is running at http://localhost:${PORT}`);
  });

  console.log(`[server]: MongoDB connection started!`);
});

