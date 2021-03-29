import {h1, h2, list} from "./markdown"
import {readFileSync} from "fs"

interface Recipe {
  title: string,
  ingredients: string[]
}

const recipeToMarkdown = function(recipe: Recipe): string {
  return h1(recipe.title) + h2("Ingredients") + list(recipe.ingredients);
}

const jsonFile = readFileSync("./recipe.json", {encoding: 'utf-8'});

const parsedJson = JSON.parse(jsonFile);

const myRecipeAsMarkdown = recipeToMarkdown(parsedJson);
console.log(myRecipeAsMarkdown)
