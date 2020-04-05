import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [
  { name: 'Karen', email: 'karen@mail.com' },
  { name: 'Keyla', email: 'keyla@mail.com' },
  { name: 'Mateus', email: 'mateus@mail.com' },
  { name: 'Roosevelt', email: 'roosevelt@mail.com' },
  { name: 'Roosevelt Filho', email: 'rooseveltF@mail.com' },
  { name: 'Sheila', email: 'sheila@mail.com' },
];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },
  async create(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendMail({
      to: { name: 'Roosevelt Souza', email: 'roosevelt@mail.com' },
      message: {
        subject: 'Bem-vindo ao TypeScript',
        body:
          'Seja bem-vindo ao typescript, espero que goste e permaneça nele. :)',
      },
    });

    return res.send();
  },
};
