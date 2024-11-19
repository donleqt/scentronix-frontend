import { Get, Route, Tags } from 'tsoa';

import { Recipe } from '../../types/recipes';
import { db } from '../../mocks/db';

@Route('recipes')
@Tags('Recipes')
class RecipesController {
  /**
   * Retrieve all recipes
   */
  @Get('/')
  public async getRecipes(): Promise<Recipe[]> {
    await db.read();
    return db.data.recipes;
  }

  /**
   * Retrieve a recipe by its ID
   */
  @Get('{id}')
  public async getRecipeById(id: string): Promise<Recipe | undefined> {
    await db.read();
    return db.data.recipes.find((recipe) => recipe.id === id);
  }
}

export const recipesController = new RecipesController();
