import { z } from 'zod';

export const requestLoginSchema = z.object({
  password: z.string(),
  email: z.string().email(),
});
