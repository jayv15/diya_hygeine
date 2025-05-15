import { generateEmailTemplate } from '@/utils/emailTemplate';
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, contactNumber, message } = req.body;

  if (!name || !email || !contactNumber || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'infodiyahygiene@gmail.com',
      pass: 'fucu nolv mnrr ouvr',
    },
  });

  const htmlContent = generateEmailTemplate(name, email, contactNumber, message);

  try {
    await transporter.sendMail({
        from: 'infodiyahygiene@gmail.com',
        to: 'diyahflm@gmail.com',
        subject: `New Contact Form Submission from ${name}`,
        html: htmlContent,
      });
    return res.status(200).json({ message: "We've received your message and will get back to you soon." });
  } catch (error) {
    return res.status(500).json({ message: "Your message couldn't be sent. Please try again", error });
  }
} 