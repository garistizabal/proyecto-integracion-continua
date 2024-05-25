import { Router } from 'express';

import { executeSeed } from '../controllers/seed.controller';

const router = Router();

router.get('/', executeSeed);

export default router;
