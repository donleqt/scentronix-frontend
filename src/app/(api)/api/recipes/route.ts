import { NextResponse } from 'next/server';

import { RecipesController } from './controller';

export async function GET() {
  const controller = new RecipesController();
  const recipes = await controller.getRecipes();

  return NextResponse.json(recipes);
}
