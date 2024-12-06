import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
  name: String,
  author: String,
  rating: Number,
  description: String,
});

const Recipe = mongoose.model("Recipe", recipeSchema);

export default Recipe;
