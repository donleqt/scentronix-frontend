import { type NextRequest, NextResponse } from 'next/server';

import { recipesController } from '../controller';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  if (!id) {
    return NextResponse.json(null, { status: 404 });
  }

  const recipe = await recipesController.getRecipeById(id);

  if (!recipe) {
    return NextResponse.json(null, { status: 404 });
  }

  return NextResponse.json(recipe);
}
