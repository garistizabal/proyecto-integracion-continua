import { NextFunction, Request, RequestHandler, Response } from 'express';

import Todo from '../models/todo.model';

export const getTodos: RequestHandler = async (
  _req: Request<unknown, unknown, unknown, unknown>,
  res: Response,
  next: NextFunction
) => {
  try {
    const todos = await Todo.find();

    res.status(200).json(todos);
  } catch (error) {
    next(error);
  }
};

export const createTodo: RequestHandler = async (
  _req: Request<unknown, unknown, unknown, unknown>,
  res: Response,
  next: NextFunction
) => {
  try {
    const newTodo = await Todo.create({
      title: 'Test title',
      description: 'Test description',
    });

    res.status(200).json(newTodo);
  } catch (error) {
    next(error);
  }
};
