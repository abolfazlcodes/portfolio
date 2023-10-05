import { snippets } from '@/data/snippets';
import type { NextApiRequest, NextApiResponse } from 'next';

type RequestMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE' | 'PUT';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const method = req.method as RequestMethod;

  if (method === 'GET') {
    try {
      res.status(200).json({
        message: 'Snippets retrieved successfully!',
        data: snippets,
      });
    } catch (err) {
      res.status(400).json({
        message: 'Something went wrong. Please try again later.',
        error: err,
      });
    }
  }
}
