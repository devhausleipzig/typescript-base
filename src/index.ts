import {h1, h2, list} from "./markdown"
import {readFileSync} from "fs";

interface Recipe {
  title: string,
  ingredients: string[]
}

const recipeToMarkdown = function(recipe: Recipe): string {
  return h1(recipe.title) + "\n" + h2("Ingredients") + "\n" + list(recipe.ingredients)
}

const jsonFile: string = readFileSync("./recipe.json", {encoding: "utf-8"})
const recipe: Recipe = JSON.parse(jsonFile);
console.log(recipeToMarkdown(recipe));
