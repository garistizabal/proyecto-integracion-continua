import { NextFunction, Request, RequestHandler, Response } from 'express';
import Todo from '../models/todo.model';

export const executeSeed: RequestHandler = async (
  _req: Request<unknown, unknown, unknown, unknown>,
  res: Response,
  next: NextFunction
) => {
  try {

    await Todo.deleteMany();

    await Todo.insertMany([
      {
        title: 'Todo 1',
        description: 'Description 1',
        completed: false,
      },
      {
        title: 'Todo 2',
        description: 'Description 2',
        completed: false,
      }
    ]);

    res.status(200).json({ message: 'Seed executed successfully' });
  } catch (error) {
    next(error);
  }
};
