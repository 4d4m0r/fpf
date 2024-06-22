import { PrismaClient, Estudante } from "@prisma/client";
import { genSalt, hash } from "bcryptjs";

import { CreateEstudanteDto, UpdateEstudanteDto, EstudanteDto } from "./estudante.types";

const prisma = new PrismaClient();

export async function getAllEstudantes(): Promise<Estudante[]> {
    return await prisma.estudante.findMany();
}

export async function createEstudante(estudante: CreateEstudanteDto): Promise<Estudante> {
    const salt = await genSalt(parseInt(process.env.SALT_ROUNDS!));
    const senha = await hash(estudante.senha, salt);
    return await prisma.estudante.create({ data: { ...estudante, senha: senha } });
}

export async function jaExiste(nome: string,email: string): Promise<boolean> {
    const existe = await prisma.estudante.findUnique({
        where: {
            nome,
            email
        }
    });

    return !!existe;
}

export async function buscaEstudantePorId(id: string): Promise<Estudante | null> {
    return await prisma.estudante.findUnique({
        where: {
            id
        }
    });
}

export async function updateEstudante(id: string, estudante: UpdateEstudanteDto): Promise<number> {
    if (estudante.senha) {
        const salt = await genSalt(parseInt(process.env.SALT_ROUNDS!));
        estudante.senha = await hash(estudante.senha, salt);
    }

    const updatedEstudante = await prisma.estudante.update({
        where: {
            id
        },
        data: estudante
    });

    return updatedEstudante ? 1 : 0;
}

export async function deleteEstudante(id: string): Promise<number> {
    const deletedEstudante = await prisma.estudante.delete({
        where: {
            id
        }
    });
    return deletedEstudante ? 1 : 0;
}
