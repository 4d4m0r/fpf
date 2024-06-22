import { Estudante } from "@prisma/client";

export type CreateEstudanteDto = Pick<Estudante, 'nome' | 'email' | 'senha' | 'idade' | 'curso'>;
export type UpdateEstudanteDto = Pick<Estudante, 'nome' | 'email' | 'senha' | 'idade' | 'curso'>;
export type EstudanteDto = Pick<Estudante, 'nome' | 'email' >;