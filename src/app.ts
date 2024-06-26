import express, { Application, NextFunction, Request, Response } from 'express';
import createError from 'http-errors';
import cors from 'cors';
import morgan from 'morgan'

import './lib/env';
import { connectDB } from './lib/db';
import { errorHandler } from './middlewares/errorHandler';
import todoRoutes from './routes/todo.routes';
import seedRoutes from './routes/seed.routes';

const app: Application = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

connectDB();

const BASE_ROUTE = '/api';

app.use(`${BASE_ROUTE}/todo`, todoRoutes);
app.use(`${BASE_ROUTE}/seed`, seedRoutes);

app.use((_req: Request, _res: Response, next: NextFunction) => {
  return next(createError.NotFound('Endpoint not found'));
});

app.use(errorHandler);

export default app;
