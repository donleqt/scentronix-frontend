import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';

import { mockRecipes } from './recipies';

type Data = {
  recipes: typeof mockRecipes;
};

const adapter = new JSONFile<Data>('db.json');

const db = new Low<Data>(adapter, { recipes: mockRecipes });

await db.write();

export { db };
