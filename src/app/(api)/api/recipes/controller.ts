import { Get, Route, Tags } from 'tsoa';

import { db } from '@/backend/mocks/db';

import { Recipe } from '../../types/recipes';

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
