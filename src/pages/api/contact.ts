import type { NextApiRequest, NextApiResponse } from 'next';
import { SentMessageInfo } from 'nodemailer';
import { ResponseData } from '@/interface';
import { emailCreator } from '@/services/mailService';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const method = req.method as HttpMethod;

  if (method === 'POST') {
    try {
      const data: ResponseData = req.body;
      const { transporter, mailData } = await emailCreator(data);

      transporter.sendMail(
        mailData,
        (error: any, info: SentMessageInfo) => {
          if (error) throw new Error(error);

          if (!error) {
            res.status(200).json({
              message: 'Email sent successfully!',
              data: info,
            });
          }
        }
      );
    } catch (error: any) {
      res.status(400).json({
        message: 'Error sending email! Please try again',
        error: error,
      });
    }
  }
}
