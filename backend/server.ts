import express from "express";
import type { Express, Request, Response } from "express"
import auth from "./routes/auth"
import recipes from "./routes/recipes"

const PORT = 3000;
const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from ExpressTS!");
});

app.get("/login", auth.login);
app.post("/register", auth.register);
app.get("/recipes", recipes.all);
app.get("/recipes/:id", recipes.one);

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
