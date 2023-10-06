import { snippets } from '@/data/snippets';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
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
