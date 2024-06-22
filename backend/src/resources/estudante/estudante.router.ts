import { Router } from 'express';

import estudanteController from './estudante.controller';
import isAuth from '../../middleware/isAuth';

const router = Router();

router.get('/', isAuth, estudanteController.index);
router.post('/',isAuth, estudanteController.create);
router.get('/:id',isAuth, estudanteController.read);
router.put('/:id',isAuth, estudanteController.update);
router.delete('/:id',isAuth, estudanteController.remove);

export default router;