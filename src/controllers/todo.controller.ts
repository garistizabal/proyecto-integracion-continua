import { NextFunction, Request, Response } from 'express';

import Todo from '../models/todo.model';
import {
  TCreateTodoBody,

} from '../schemas/todo.schemas';

export const getTodos = async (
  _req: Request<unknown, unknown, unknown, unknown>,
  res: Response,
  next: NextFunction
) => {
  try {
    const todos = await Todo.find();

    return res.status(200).json(todos);
  } catch (error) {
    return next(error);
  }
};

export const createTodo = async (
  req: Request<unknown, unknown, TCreateTodoBody, unknown>,
  res: Response,
  next: NextFunction
) => {
  try {
    const newTodo = await Todo.create(req.body);

    return res.status(201).json(newTodo);
  } catch (error) {
    return next(error);
  }
};