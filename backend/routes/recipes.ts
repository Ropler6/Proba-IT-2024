import express from "express";
import type { Request, Response } from "express"
import Recipe from "../models/recipe.ts"
import User from "../models/user";

const router = express.Router();
router.route("/recipes").get( async(_: Request, res: Response) => {
  const recipes = await Recipe.find();

  if (recipes.length > 0) res.status(200).json(recipes);
  else res.status(404).json("Database is empty.");
});

router.route("/recipes").post( async(req: Request, res: Response) => {
  const user = await User.find({ email: req.body.email });
  if (!user) res.status(404).json("Could not find user");

  const newRecipe = new Recipe({
    name: req.body.name,
    author: user.name,
    rating: 1,
    description: req.body.description,
  });

  newRecipe.save();
  res.status(200).json("The recipe was created successfully!");
});

// mostly for testing purposes
router.route("/recipes").delete( async(req: Request, res: Response) => {
  const id = req.body.id;
  const result = await Recipe.findOneAndDelete({ _id: id });

  if (result)
    res.status(200).json(`Successfully removed the recipe with id ${id} from the database!`);
  else
    res.status(404).json(`Could not find recipe with id ${id}`);
});

router.route("/recipes/:id").get( async(req: Request, res: Response) => {
  const recipe = await Recipe.findById(req.params.id);

  if (recipe) res.status(200).json(recipe);
  else res.status(404).json(`The recipe with id ${req.params.id} does not exist!`);
});

export default router;
