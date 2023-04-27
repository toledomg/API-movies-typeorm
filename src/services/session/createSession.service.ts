import { QueryResult } from 'pg';
import { client } from '../../database';
import { TLoginRequest } from '../../interfaces/session.interfaces';
import { TUser } from '../../interfaces/users.interfaces';
import { AppError } from '../../errors/error';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

export const createSessionService = async (
  userData: TLoginRequest
): Promise<string> => {
  const queryString: string = `
        SELECT
            *
        FROM
            users
        WHERE email = $1

`;
  const queryResult: QueryResult<TUser> = await client.query(queryString, [
    userData.email,
  ]);
  const userExist: TUser = queryResult.rows[0];

  if (!userExist) {
    throw new AppError('Wrong email/password', 401);
  }

  const matchPwd: boolean = await compare(
    userData.password,
    userExist.password
  );

  if (!matchPwd) {
    throw new AppError('Wrong email/password', 401);
  }

  const token: string = sign(
    {
      email: userData.email,
    },
    String(process.env.SECRET_KEY),
    {
      subject: String(userExist.id),
      expiresIn: process.env.EXPIRES_IN,
    }
  );

  return token;
};
