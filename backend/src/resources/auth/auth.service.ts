import { PrismaClient, Estudante } from '@prisma/client';
import { compare } from 'bcryptjs';

import { LoginDto } from './auth.types';

const prisma = new PrismaClient();

export async function checkCredentails({
  email,
  senha,
}: LoginDto): Promise<false | Estudante> {
  const estudante = await prisma.estudante.findUnique({ where: { email } });

  if (!estudante) return false;
  const ok = await compare(senha, estudante.senha);

  if (ok) return estudante;
  return false;
}
