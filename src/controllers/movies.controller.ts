import { Request, Response } from 'express';
import { createMoviesService } from '../services/users/createMovies.service';
import {
  TMovie,
  TMoviesPaginationRequest,
} from '../interfaces/users.interfaces';
import { listAllMoviesService } from '../services/users/listAllMovies.service';
import { updateMovieService } from '../services/users/updateMovies.service';
import { deleteMovieService } from '../services/users/deleteMovie.service';

export const createMovieController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { body } = req;

  const newMovie = await createMoviesService(body);

  return res.status(201).json(newMovie);
};

export const listMovieController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { query } = req;

  if (!query.sort) query.order = 'asc';
  if (query.sort !== 'price' && query.sort !== 'duration') query.sort = 'id';
  if (!query.sort) {
    query.sort = 'id';
  }
  if (!query.order) query.order = 'asc';

  const listMovies: TMoviesPaginationRequest = await listAllMoviesService(
    query.perPage,
    query.page,
    query.sort,
    query.order
  );

  return res.json(listMovies);
};

export const updateMovieController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { body, params } = req;
  const { id } = params;

  const updateMovie = await updateMovieService(body, Number(id));

  return res.json(updateMovie);
};

export const deleteMovieController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { params } = req;
  const { id } = params;

  const deleteMovie = await deleteMovieService(Number(id));

  return res.status(204).send(deleteMovie);
};
