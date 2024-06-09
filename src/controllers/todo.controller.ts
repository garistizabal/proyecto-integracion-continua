import { NextFunction, Request, Response } from 'express';

import Todo from '../models/todo.model';
import createError from 'http-errors';
import {
  TCreateTodoBody,
  TDeleteTodoParams,
  TGetOneTodoParams,
  TToggleTodoParams,
  TUpdateTodoBody,
  TUpdateTodoParams,
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

export const getOneTodo = async (
  req: Request<TGetOneTodoParams, unknown, unknown, unknown>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { todoId } = req.params;

    const todo = await Todo.findById(todoId);

    if (!todo) throw createError.NotFound(`Todo with id ${todoId} not found`);

    return res.status(200).json(todo);
  } catch (error) {
    return next(error);
  }
};

export const updateTodo = async (
  req: Request<TUpdateTodoParams, unknown, TUpdateTodoBody, unknown>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { todoId } = req.params;

    const updatedTodo = await Todo.findByIdAndUpdate(todoId, req.body, {
      new: true,
    });

    if (!updatedTodo) throw createError.NotFound(`Todo with id ${todoId} not found`);

    return res.status(200).json(updatedTodo);
  } catch (error) {
    return next(error);
  }
};

export const deleteTodo = async (
  req: Request<TDeleteTodoParams, unknown, unknown, unknown>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { todoId } = req.params;

    const deletedTodo = await Todo.findByIdAndDelete(todoId);

    if (!deletedTodo) throw createError.NotFound(`Todo with id ${todoId} not found`);

    return res.status(204).json();
  } catch (error) {
    return next(error);
  }
};

export const toggleTodo = async (
  req: Request<TToggleTodoParams, unknown, unknown, unknown>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { todoId } = req.params;

    const todo = await Todo.findById(todoId);

    if (!todo) throw createError.NotFound(`Todo with id ${todoId} not found`);

    todo.isCompleted = !todo.isCompleted;

    await todo.save();

    return res.status(200).json(todo);
  } catch (error) {
    return next(error);
  }
};
