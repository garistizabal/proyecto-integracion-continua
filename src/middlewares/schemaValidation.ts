import { NextFunction, Request, Response } from 'express';
import { z } from 'zod';

export const schemaValidation = (schema: z.AnyZodObject) => {
  return (req: Request, _res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        params: req.params,
        query: req.query,
      });

      next();
    } catch (error) {
      next(error);
    }
  };
};
