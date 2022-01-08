import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";

import { ShoppingListService } from "../shopping-list/shopping-list.service";
@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      "Burger",
      "A tasty burger recipe",
      "https://upload.wikimedia.org/wikipedia/commons/1/11/Cheeseburger.png",
      [new Ingredient("Meat Paddy", 1), new Ingredient("French Fries", 10)]
    ),
    new Recipe(
      "Schintzel",
      "A tasty schintzel recipe",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG/220px-Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG",
      [new Ingredient("Meat", 1), new Ingredient("French Fries", 10)]
    ),
  ];
  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(id: number) {
    return this.recipes[id];
  }

  addIngredientToShoppingList(ingredient: Ingredient[]) {
    this.slService.addIngredients(ingredient);
  }
}
