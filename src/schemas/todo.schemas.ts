import { z } from 'zod';

const MONGO_ID_REGEX = /^[0-9a-f]{24}$/;

export const todoId = z
  .string({ required_error: 'todoId is required' })
  .regex(MONGO_ID_REGEX, { message: 'Invalid todoId' });
export const description = z.string({ required_error: 'Description is required' });
export const isCompleted = z.boolean().optional();