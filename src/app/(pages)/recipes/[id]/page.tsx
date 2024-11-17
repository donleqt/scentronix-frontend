import { Container } from '@mui/material';
import { notFound } from 'next/navigation';

import { RecipeDetail } from '@/features/recipes/components/recipe-detail';
import { fetchClient } from '@/libs/api/fetch-client';

async function getRecipe(id: string) {
  const { data: recipe } = await fetchClient.GET('/recipes/{id}', {
    params: { path: { id } },
  });

  if (!recipe) notFound();

  return recipe;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const recipe = await getRecipe(id);

  return {
    title: recipe.title,
  };
}

export default async function RecipeDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const recipe = await getRecipe(id);

  return (
    <Container sx={{ mt: 4 }}>
      <RecipeDetail recipe={recipe} />
    </Container>
  );
}
