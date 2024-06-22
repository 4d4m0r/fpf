import { Request, Response } from 'express';
import { getAllEstudantes, createEstudante, updateEstudante, buscaEstudantePorId, deleteEstudante } from './estudante.service';

async function index(req: Request, res: Response) {
  try {
    const estudantes = await getAllEstudantes();
    res.status(200).json(estudantes);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function create(req: Request, res: Response) {
  const estudante = req.body;
  try {
    const newEstudante = await createEstudante(estudante);
    res.status(201).json(newEstudante);
  } catch (err) {
    res.status(500).json({ message: 'Estudante já existe.' });
  }
}

async function read(req: Request, res: Response) {
  const id = req.params.id;
  try {
    const estudante = await buscaEstudantePorId(id);
    if (estudante !== null) {
      res.status(200).json(estudante);
    } else {
      res.status(404).json({ message: 'Estudante não encontrado.' });
    }
  } catch (err) {
    res.status(500).json(err);
  }
}

export async function update(req: Request, res: Response) {
  const { id } = req.params;
  const estudanteData = req.body;

  try {
    const updated = await updateEstudante(id, estudanteData);
    if (updated === 1) {
      res.status(200).json({ message: 'Estudante atualizado com sucesso.' });
    } else {
      res.status(404).json({ message: 'Estudante não encontrado.' });
    }
  } catch (error) {
    console.error('Erro ao atualizar o estudante:', error);
    res.status(500).json({ message: 'Ocorreu um erro ao atualizar o estudante.' });
  }
}

export async function remove(req: Request, res: Response) {
  const id = req.params.id;

  try {
    const deleted = await deleteEstudante(id);

    if (deleted === 1) {
      res.status(200).json({ message: 'Estudante removido com sucesso!' });
    } else {
      res.status(404).json({ message: 'Estudante não encontrado!' });
    }
  } catch (err) {
    console.error('Erro ao remover o estudante:', err);
    res.status(500).json({ message: 'Ocorreu um erro ao remover o estudante.' });
  }
}

export default { create, index, update, read, remove };
