import express from "express";
import type { Request, Response } from "express"
import Recipe from "../models/recipe.ts"

const router = express.Router();
router.route("/recipes").get( async(_: Request, res: Response) => {
  const recipes = await Recipe.find();

  if (recipes.length > 0) res.status(200).json(recipes);
  else res.status(404).json("Database is empty.");
});

router.route("/recipes/:id").get( async(req: Request, res: Response) => {
  const recipe = await Recipe.findById(req.params.id);

  if (recipe) res.status(200).json(recipe);
  else res.status(404).json(`The recipe with id ${req.params.id} does not exist!`);
});

export default router;
