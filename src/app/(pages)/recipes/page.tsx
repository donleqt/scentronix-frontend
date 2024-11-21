import { Container, Link } from '@mui/material';
import NextLink from 'next/link';

import { Breadcrumbs } from '@/core/components/breadcrumbs/breadcrumbs';
import { getAllRecipes } from '@/features/recipes/api/recipes';

export const dynamic = 'force-dynamic';

export default async function RecipiesPage() {
  const { data: recipes } = await getAllRecipes();

  if (!recipes) {
    return <div>Error</div>;
  }

  return (
    <Container>
      <Breadcrumbs />
      <h1>Recipes</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <Link component={NextLink} href={`/recipes/${recipe.id}`}>
              {recipe.title}
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}
