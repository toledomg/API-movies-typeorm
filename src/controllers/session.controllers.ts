import { NextFunction, Request, Response } from 'express';
import { TLoginRequest } from '../interfaces/session.interfaces';
import { createSessionService } from '../services/session/createSession.service';

export const createSession = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const userData: TLoginRequest = req.body;

  const tokenValue = await createSessionService(userData);

  return res.status(200).json({ token: tokenValue });
};
