import { Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import { createEstudante } from '../estudante/estudante.service';
import { checkCredentails } from './auth.service';
import { LoginDto, SignupDto } from './auth.types';

async function signup(req: Request, res: Response) {
  const estudante = req.body as SignupDto;

  try {
    const novoEstudante = await createEstudante({
      ...estudante
    });
    res.status(StatusCodes.CREATED).json(novoEstudante);
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
}

async function login(req: Request, res: Response) {
  const credentials = req.body as LoginDto;
  try {
    const estudante = await checkCredentails(credentials);
    if (estudante) {
      req.session.uid = estudante.id;
      res.status(StatusCodes.OK).json({
        nome: estudante.nome
      });
    } else {
      res.status(StatusCodes.UNAUTHORIZED).json(ReasonPhrases.UNAUTHORIZED);
    }
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
}

async function logout(req: Request, res: Response) {
  if (!req.session.uid)
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json(ReasonPhrases.UNAUTHORIZED);
  req.session.destroy((err) => {
    if (err) res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    res.status(StatusCodes.OK).json(ReasonPhrases.OK);
  });
}

export default { signup, login, logout };
