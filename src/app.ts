import express, { Application, NextFunction, Request, Response } from 'express';
import createError from 'http-errors';

import './lib/env';
import { connectDB } from './lib/db';
import { errorHandler } from './middlewares/errorHandler';

const app: Application = express();

app.use(express.json());

connectDB();

app.use((_req: Request, _res: Response, next: NextFunction) => {
  next(createError.NotFound('Endpoint not found'));
});

app.use(errorHandler);

export default app;
