import { faker } from '@faker-js/faker';

import { Recipe } from '../api/types/recipes';

const generateMockRecipes = (count: number): Recipe[] => {
  return new Array(count).fill(null).map(() => ({
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
  }));
};

export const mockRecipes = generateMockRecipes(10);
