import { Container } from '@mui/material';

import { fetchClient } from '@/libs/api/fetch-client';
import { Breadcrumbs } from '@/core/components/breadcrumbs/breadcrumbs';

export const dynamic = 'force-dynamic';

async function fetchRecipes() {
  return fetchClient.GET('/recipes');
}

export default async function RecipiesPage() {
  const { data: recipes } = await fetchRecipes();

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
            <a href={`/recipes/${recipe.id}`}>{recipe.title}</a>
          </li>
        ))}
      </ul>
    </Container>
  );
}
