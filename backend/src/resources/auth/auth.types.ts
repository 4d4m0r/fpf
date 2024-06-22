import { Estudante } from "@prisma/client";

export type SignupDto = Pick<Estudante, 'nome' | 'email' | 'senha' | 'idade' | 'curso'>;
export type LoginDto  = Pick<Estudante, "email" | "senha">;