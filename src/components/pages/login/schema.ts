import { z } from 'zod';

import { passwordRegEx } from '@/shared/constants/regex';

export const LoginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().regex(passwordRegEx),
});
