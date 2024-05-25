import { z } from 'zod';
import 'dotenv/config';

const envVars = z.object({
  DB_USER: z.string(),
  DB_PASSWORD: z.string(),
  DB_HOST: z.string().default('localhost'),
  DB_PORT: z.coerce.number().default(27017),
  DB_NAME: z.string(),
  API_PORT: z.coerce.number().default(4000),
});

envVars.parse(process.env);

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envVars> {}
  }
}
