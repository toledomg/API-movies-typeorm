import { NextFunction, Request, Response } from 'express';
import { Repository } from 'typeorm';
import { AppDataSource } from '../data-source';
import { Movie } from '../entities';
import { AppError } from '../errors/error';
import { TRepository } from '../interfaces/users.interfaces';

export const ensureIdMovieExist = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const movieRepository: TRepository = AppDataSource.getRepository(Movie);

  const { id } = req.body;

  if (id) {
    const idVerify = await movieRepository.findOne({
      where: {
        id: id,
      },
    });

    if (idVerify) {
      throw new AppError('Movie already exists.', 409);
    }
  }

  return next();
};
