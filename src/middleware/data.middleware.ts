import { NextFunction, Request, Response } from 'express';
import format from 'pg-format';
import { TUserResponse } from '../interfaces/users.interfaces';
import { responseUserSchema } from '../schemas/users.schemas';
import { client } from '../database';
import 'dotenv/config';

export const dataMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const userId = res.locals.token.id;

  const queryString: string = format(
    `
  SELECT * FROM users WHERE id = %L;
`,
    [userId]
  );

  const queryResult = await client.query(queryString);

  const data: TUserResponse = responseUserSchema.parse(queryResult.rows[0]);

  res.locals.data = {
    id: data.id,
    name: data.name,
    email: data.email,
    admin: data.admin,
    active: data.active,
  };

  return next();
};
