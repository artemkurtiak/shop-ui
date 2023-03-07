import chalk from 'chalk';
import { Schema } from 'zod';

export const validateWithZod = <T>(schema: Schema<T>, data: unknown): T | never => {
  const result = schema.safeParse(data);

  if (!result.success) {
    result.error.errors.forEach((error) => {
      const [field] = error.path;

      throw new Error(chalk.red(`${field}(${error.message})`));
    });

    process.exit(1);
  }

  return result.data;
};
