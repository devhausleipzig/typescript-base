import {h1, h2, list} from "./markdown"

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
  return h1(recipe.title) + h2("Ingredients") + list(recipe.ingredients);
}

const recipe0AsMarkdown = recipeToMarkdown(recipes[0])
console.log(recipe0AsMarkdown);