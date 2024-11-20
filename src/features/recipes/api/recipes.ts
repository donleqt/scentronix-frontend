import { fetchClient } from '@/libs/api/fetch-client';

export async function getAllRecipes() {
  return fetchClient.GET('/recipes');
}

export async function getRecipeById(id: string) {
  const { data: recipe } = await fetchClient.GET('/recipes/{id}', {
    params: { path: { id } },
  });

  return recipe;
}
