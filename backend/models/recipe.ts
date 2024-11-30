import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: Image,
});

const Recipe = mongoose.model("Recipe", recipeSchema);

export default Recipe;
