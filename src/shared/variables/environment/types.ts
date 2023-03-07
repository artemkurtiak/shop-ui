import { z } from 'zod';

import { EnvironmentSchema } from './schema';

export type EnvironmentType = z.infer<typeof EnvironmentSchema>;
