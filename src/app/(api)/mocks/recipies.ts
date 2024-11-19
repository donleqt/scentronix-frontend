import { faker } from '@faker-js/faker';

import { Recipe } from '../types/recipes';

export const generateMockRecipes = (count: number): Recipe[] => {
  return new Array(count).fill(null).map(() => ({
    id: faker.string.uuid(),
    title: faker.lorem.words(3).replace(/\b\w/g, (char) => char.toUpperCase()),
    description: faker.lorem.paragraphs(2),
    yield: `${faker.number.int({ min: 1, max: 10 })} servings`,
    imageUrl: faker.image.url({ width: 640, height: 480 }),
    steps: Array.from({ length: faker.number.int({ min: 3, max: 3 }) }, () => ({
      duration: `${faker.number.int({ min: 5, max: 60 })} minutes`,
      name: faker.lorem.words(1),
    })),
  }));
};
