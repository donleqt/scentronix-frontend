import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';

import { Recipe } from '../types/recipes';
import jsonDb from './db.json';

type Data = {
  recipes: Recipe[];
};

const adapter = new JSONFile<Data>('src/app/(api)/mocks/db.json');

export const db = new Low<Data>(adapter, jsonDb);
