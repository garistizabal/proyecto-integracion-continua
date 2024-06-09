import { Router } from 'express';

import {
  createTodo,
  deleteTodo,
  getOneTodo,
  getTodos,
  toggleTodo,
  updateTodo,
} from '../controllers/todo.controller';
import { schemaValidation } from '../middlewares/schemaValidation';
import {
  createTodoSchema,
  deleteTodoSchema,
  getOneTodoSchema,
  toggleTodoSchema,
  updateTodoSchema,
} from '../schemas/todo.schemas';

const router = Router();

router.get('/', getTodos);

router.post('/', schemaValidation(createTodoSchema), createTodo);

router.get('/:todoId', schemaValidation(getOneTodoSchema), getOneTodo);

router.put('/:todoId', schemaValidation(updateTodoSchema), updateTodo);

router.delete('/:todoId', schemaValidation(deleteTodoSchema), deleteTodo);

router.patch('/:todoId', schemaValidation(toggleTodoSchema), toggleTodo);

export default router;
