import { NextFunction, Request, Response } from 'express';
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

  const { id } = req.params;

  if (id) {
    const idVerify = await movieRepository.findOneBy({
      id: Number(id),
    });

    if (!idVerify) {
      throw new AppError('Movie not found', 404);
    }
  }

  return next();
};
