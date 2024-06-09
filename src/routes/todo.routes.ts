import { Router } from 'express';

import {
  createTodo,
  getOneTodo,
  getTodos,
  updateTodo,
} from '../controllers/todo.controller';
import { schemaValidation } from '../middlewares/schemaValidation';
import {
  createTodoSchema,
  getOneTodoSchema,
  updateTodoSchema,
} from '../schemas/todo.schemas';

const router = Router();

router.get('/', getTodos);

router.post('/', schemaValidation(createTodoSchema), createTodo);

router.get('/:todoId', schemaValidation(getOneTodoSchema), getOneTodo);

router.put('/:todoId', schemaValidation(updateTodoSchema), updateTodo);

export default router;
