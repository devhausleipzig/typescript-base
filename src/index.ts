import {h1, h2, list} from "./markdown"
import {readFileSync} from "fs"

interface Recipe {
  title: string,
  ingredients: string[]
}

const recipeToMarkdown = function(recipe: Recipe): string {
  return h1(recipe.title) + h2("Ingredients") + list(recipe.ingredients);
}

const recipeFromJson = function(json: any): Recipe {
  if (json.title == undefined) {
    throw new Error("Recipe title is missing");
  }
  
  return json as Recipe;
}

try {
  // Reading the json file
  const jsonFile = readFileSync(process.argv[2], {encoding: 'utf-8'});

  // Parsing the json
  const parsedJson = JSON.parse(jsonFile);

  // Validating that the json we got has the right keys
  const recipe: Recipe = recipeFromJson(parsedJson);

  const myRecipeAsMarkdown = recipeToMarkdown(recipe);
  console.log(myRecipeAsMarkdown)
} catch(error) {
  console.log(`An error occured during execution\n\n${error.message}\n`)
}
