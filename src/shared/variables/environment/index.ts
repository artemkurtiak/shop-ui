import { env } from 'next.config';

import { validateWithZod } from '@/shared/helpers/validation';

import { EnvironmentSchema } from './schema';

export const Environment = validateWithZod(EnvironmentSchema, env);
