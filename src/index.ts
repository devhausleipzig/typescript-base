import {h1, h2, list} from "./markdown"
import {readFileSync} from "fs";

interface Recipe {
  title: string,
  ingredients: string[]
}

const recipes: Recipe[] = [{
  title : "Best Omlette Ever",
  ingredients: ["6 eggs", "1/4 tsp salt", "2 tbsp butter"]
}, {
  title : "Best Lasagne",
  ingredients: ["Tomatoes", "You know the rest"]
}]

const recipeToMarkdown = function(recipe: Recipe): string {
  return h1(recipe.title) + "\n" + h2("Ingredients") + "\n" + list(recipe.ingredients)
}

const jsonFile: string = readFileSync("./recipe.json", {encoding: "utf-8"})
console.log(jsonFile);
