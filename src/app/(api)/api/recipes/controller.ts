import { Get, Route, Tags } from 'tsoa';

import { Recipe } from '../../types/recipes';
import { db } from '../../mocks/db';

@Route('recipes')
@Tags('Recipes')
export class RecipesController {
  /**
   * Retrieve all recipes
   * @returns {Recipe[]} A list of recipes
   */
  @Get('/')
  public async getRecipes(): Promise<Recipe[]> {
    return db.data.recipes;
  }
}
