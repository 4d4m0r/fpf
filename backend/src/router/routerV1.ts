import { Router } from "express";

import authRouter from "../resources/auth/auth.router";
import estudanteRouter from '../resources/estudante/estudante.router'

const router = Router();

router.use('/', authRouter);
router.use('/estudante',estudanteRouter);

export default router;
