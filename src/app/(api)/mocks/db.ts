import { existsSync } from 'fs';

import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';

import { generateMockRecipes } from './recipies';
import { Recipe } from '../types/recipes';

type Data = {
  recipes: Recipe[];
};

const adapter = new JSONFile<Data>('src/app/(api)/mocks/db.json');

export const db = new Low<Data>(adapter, {
  recipes: [],
});

async function initializeDB() {
  await db.read();

  if (!existsSync('src/app/(api)/mocks/db.json') || !db.data) {
    db.data = { recipes: generateMockRecipes(10) };

    await db.write();
  }
}

initializeDB();
