import { z } from 'zod';

const MONGO_ID_REGEX = /^[0-9a-f]{24}$/;

export const todoId = z
  .string({ required_error: 'todoId is required' })
  .regex(MONGO_ID_REGEX, { message: 'Invalid todoId' });
export const description = z.string({ required_error: 'Description is required' });
export const isCompleted = z.boolean().optional();

export const createTodoSchema = z.object({
  body: z.object({
    description,
    isCompleted,
  }),
});
export type TCreateTodoBody = z.infer<typeof createTodoSchema>['body'];

export const getOneTodoSchema = z.object({
  params: z.object({
    todoId,
  }),
});
export type TGetOneTodoParams = z.infer<typeof getOneTodoSchema>['params'];

export const updateTodoSchema = z.object({
  params: z.object({
    todoId,
  }),
  body: z.object({
    description,
    isCompleted,
  }),
});
export type TUpdateTodoBody = z.infer<typeof updateTodoSchema>['body'];
export type TUpdateTodoParams = z.infer<typeof updateTodoSchema>['params'];

export const deleteTodoSchema = z.object({
  params: z.object({
    todoId,
  }),
});
export type TDeleteTodoParams = z.infer<typeof deleteTodoSchema>['params'];

export const toggleTodoSchema = z.object({
  params: z.object({
    todoId,
  }),
});
export type TToggleTodoParams = z.infer<typeof toggleTodoSchema>['params'];
export type TUpdateTodoParams = z.infer<typeof updateTodoSchema>['params'];
