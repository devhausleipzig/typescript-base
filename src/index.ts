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


//const recipeToMarkdown = function(recipe: Recipe): string {}

const printRecipe = function(recipe: Recipe): void {
  console.log(h1(recipe.title));
  console.log(h2("Ingredients"));
  console.log(list(recipe.ingredients));
}

// printRecipe(recipes[0]);
// printRecipe(recipes[1]);
// recipes.forEach(printRecipe)
printRecipe(recipes[0]);
