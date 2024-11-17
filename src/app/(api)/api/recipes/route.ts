import { NextResponse } from 'next/server';

import { recipesController } from './controller';

export async function GET() {
  const recipes = await recipesController.getRecipes();

  return NextResponse.json(recipes);
}
