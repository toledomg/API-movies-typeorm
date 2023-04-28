import { Request, Response } from 'express';
import { createMoviesService } from '../services/users/createMovies.service';
import {
  TMovie,
  TMoviesPaginationRequest,
} from '../interfaces/users.interfaces';
import { listAllMoviesService } from '../services/users/listAllMovies.service';

export const createMovieController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { body, params } = req;
  console.log({ body });

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

  console.log(query.order);

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
  const { body, params, query } = req;

  const { id } = params;

  return res.status(200).json(id);
};

export const deleteMovieController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { body, params, query } = req;

  const { id } = params;

  return res.status(200).send(id);
};
