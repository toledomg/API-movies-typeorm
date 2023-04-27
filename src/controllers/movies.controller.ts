import { Request, Response } from 'express';
import { createMoviesService } from '../services/users/createMovies.service';
import { TMovie } from '../interfaces/users.interfaces';

export const createMovieController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const movieData: TMovie = req.body;

  const newMovie = await createMoviesService(movieData);

  return res.status(201).json(newMovie);
};
