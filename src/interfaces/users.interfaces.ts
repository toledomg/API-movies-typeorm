import { QueryResult } from 'pg';
import { z } from 'zod';

import {
  requestUserSchema,
  responseOnlyEmail,
  responseUserSchema,
  updateUserSchema,
  userSchema,
} from '../schemas/users.schemas';

export type TUser = z.infer<typeof userSchema>;

export type TUserReqEmail = z.infer<typeof responseOnlyEmail>;

export type TUserRequest = z.infer<typeof requestUserSchema>;

export type TUserResult = QueryResult<TUserRequest>;

export type TUserResponse = z.infer<typeof responseUserSchema>;

export type TUserUpdate = z.infer<typeof updateUserSchema>;
