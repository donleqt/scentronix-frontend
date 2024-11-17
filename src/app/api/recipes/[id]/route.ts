import { NextApiRequest, NextApiResponse } from 'next';

import { db } from '@/backend/mocks/db';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { id } = req.query;

  if (req.method === 'GET') {
    try {
      const recipe = await db.data.recipes.find((recipe) => recipe.id === id);

      if (!recipe) {
        return res.status(404).json({ message: 'Recipe not found' });
      }

      return res.status(200).json(recipe);
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error', error });
    }
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}
