import { z } from 'zod';
import { requestLoginSchema } from '../schemas/session.schemas';

export type TLoginRequest = z.infer<typeof requestLoginSchema>;
