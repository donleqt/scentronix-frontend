import { faker } from '@faker-js/faker';

import { Recipe } from '../types/recipes';

const generateMockRecipes = (count: number): Recipe[] => {
  const recipes: Recipe[] = [];

  for (let i = 0; i < count; i++) {
    const recipe: Recipe = {
      id: faker.string.uuid(),
      title: faker.lorem.words(3),
      description: faker.lorem.sentences(2),
      yield: `${faker.number.int({ min: 1, max: 10 })} servings`,
      imageUrl: faker.image.url(),
      steps: Array.from(
        { length: faker.number.int({ min: 3, max: 10 }) },
        () => ({
          duration: `${faker.number.int({ min: 5, max: 60 })} minutes`,
          description: faker.lorem.sentences(2),
        }),
      ),
    };

    recipes.push(recipe);
  }

  return recipes;
};

export const mockRecipes = generateMockRecipes(10);
