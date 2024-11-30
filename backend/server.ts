import express from "express";
import type { Express, Request, Response } from "express"
import authRouter from "./routes/auth.ts"
import recipesRouter from "./routes/recipes.ts"
import cors from "cors"

const PORT = 3000;
const app: Express = express();

app.use(cors());
app.get("/", (_: Request, res: Response) => {
  res.send("Hello from ExpressTS!");
});

app.use("/auth", authRouter);
app.use("/recipes", recipesRouter);

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
