import { type NextRequest, NextResponse } from 'next/server';

import { recipesController } from '../controller';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const id = (await params).id;

  if (id) {
    const recipe = await recipesController.getRecipeById(id as string);
    if (recipe) {
      return NextResponse.json(recipe);
    } else {
      return NextResponse.json(
        { error: 'Recipe not found' },
        {
          status: 404,
        },
      );
    }
  } else {
    return NextResponse.json(
      { error: 'Recipe not found' },
      {
        status: 404,
      },
    );
  }
}
