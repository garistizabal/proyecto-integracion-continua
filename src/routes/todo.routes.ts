import { Router } from 'express';

import {
  createTodo,
  getTodos,
} from '../controllers/todo.controller';
import { schemaValidation } from '../middlewares/schemaValidation';
import {
  createTodoSchema,
} from '../schemas/todo.schemas';

const router = Router();

router.get('/', getTodos);

router.post('/', schemaValidation(createTodoSchema), createTodo);

export default router;
