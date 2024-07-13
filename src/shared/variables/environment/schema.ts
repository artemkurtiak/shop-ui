import { z } from 'zod';

export const EnvironmentSchema = z.object({
  NEXT_PUBLIC_NODE_ENV: z.enum(['prod', 'dev']),
  NEXT_PUBLIC_API_URL: z.string().url(),
});
