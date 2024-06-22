import { Request, Response, NextFunction } from 'express';

const isAuth = (req: Request, res: Response, next: NextFunction) => {
  if (req.session && req.session.uid) {
    next(); 
  } else {
    res.status(401).json({ message: 'Acesso não autorizado. Faça login para continuar.' });
  }
};

export default isAuth;
