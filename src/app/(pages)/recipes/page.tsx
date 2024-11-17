import { Container } from '@mui/material';

import { fetchClient } from '@/libs/api/fetch-client';

async function fetchRecipes() {
  return fetchClient.GET('/recipes');
}

export default async function RecipiesPage() {
  const { data: recipes } = await fetchRecipes();

  if (!recipes) {
    return <div>Error</div>;
  }

  return (
    <section>
      <Container>
        <h1>Recipes</h1>
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe.id}>
              <a href={`/recipes/${recipe.id}`}>{recipe.title}</a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
