import { Container } from '@mui/material';
import { notFound } from 'next/navigation';

import { RecipeDetail } from '@/features/recipes/components/recipe-detail';
import { Breadcrumbs } from '@/core/components/breadcrumbs/breadcrumbs';
import { getRecipeById } from '@/features/recipes/api/recipes';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const recipe = await getRecipeById(id);

  return {
    title: recipe?.title,
  };
}

export const revalidate = 60;

export default async function RecipeDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const recipe = await getRecipeById(id);

  if (!recipe) notFound();

  return (
    <Container>
      <Breadcrumbs />
      <RecipeDetail recipe={recipe} />
    </Container>
  );
}
