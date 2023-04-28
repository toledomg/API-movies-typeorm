import { NextFunction, Request, Response } from 'express';
import { Repository } from 'typeorm';
import { AppDataSource } from '../data-source';
import { Movie } from '../entities';
import { TRepository } from '../interfaces/users.interfaces';
import { AppError } from '../errors/error';

export const ensureNameMovieExist = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const movieRepository: TRepository = AppDataSource.getRepository(Movie);

  const { name } = req.body;

  if (name) {
    const nameVerify = await movieRepository.findOne({
      where: {
        name: name,
      },
    });

    if (nameVerify) {
      throw new AppError('Movie already exists.', 409);
    }
  }

  return next();
};
