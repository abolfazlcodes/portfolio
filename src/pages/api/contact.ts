import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';
import { ResponseData } from '@/interface';
export const runtime = 'edge';
export const dynamic = 'force-dynamic';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

const resend = new Resend(
  process.env.NEXT_PUBLIC_RESEND_API_KEY
);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const method = req.method as HttpMethod;
  const response: ResponseData = await req.body.json();

  if (method === 'POST') {
    try {
      const data = await resend.emails.send({
        from: `Acme ${response.email}`,
        to: ['abolfazljamshididev@gmail.com'],
        subject: `${response.name}`,
        html: `
        <div>
          <h1>${response.name} - ${response.date}</h1>
          <p>Welcome, ${response.message}!</p>
        </div>
        `,
      });

      res.status(200).json({
        data,
        message: 'Message received',
      });
    } catch (error: any) {
      console.log(error);
    }
  }
}
