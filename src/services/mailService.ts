import nodemailer from 'nodemailer';
import { ResponseData } from '@/interface';

export async function emailCreator({
  date,
  email,
  message,
  name,
}: ResponseData) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NEXT_PUBLIC_NODEMAILER_EMAIL,
      pass: process.env.NEXT_PUBLIC_NODEMAILER_PASS,
    },
  });

  const mailData = {
    from: email,
    to: process.env.NEXT_PUBLIC_NODEMAILER_EMAIL,
    subject: `Message from ${name}`,
    text: message,
    data: date,
    html: `
    <p>The email is received from ${email}.
    The message:
    ${message}</p>
    `,
  };

  return { transporter, mailData };
}
