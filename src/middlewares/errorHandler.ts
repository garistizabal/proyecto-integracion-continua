import { NextFunction, Request, Response } from 'express';
import { isHttpError } from 'http-errors';
import z from 'zod';

export const errorHandler = (
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  console.error(error);

  let statusCode: number = 500;
  let errorsRes: any[] = [error.message];

  if (isHttpError(error)) {
    statusCode = error.status;
    errorsRes = [error.message];
  }

  if (error instanceof z.ZodError) {
    statusCode = 400;

    errorsRes = error.issues.map((error) => error.message);
  }

  return res.status(statusCode).json(errorsRes);
};
