import { type NextRequest, NextResponse } from 'next/server';

import { recipesController } from '../controller';

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  const { id } = await params;

  console.log('id:', id);

  if (!id) {
    return NextResponse.json({ status: 404 });
  }

  const recipe = await recipesController.getRecipeById(id);

  if (!recipe) {
    return NextResponse.json({ status: 404 });
  }

  return NextResponse.json(recipe);
}
