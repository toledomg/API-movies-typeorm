import { z } from 'zod';
import {
  movieSchema,
  requestAllMoviesSchema,
  requestMovieSchema,
  requestMoviesPaginationSchema,
} from '../schemas/users.schemas';
import { DeepPartial, Repository } from 'typeorm';
import { Movie } from '../entities';

export type TMovie = z.infer<typeof movieSchema>;

export type TMovieRequest = z.infer<typeof requestMovieSchema>;

export type TMovieUpdate = DeepPartial<TMovie>;

export type TMovieResult = z.infer<typeof requestAllMoviesSchema>;

export type TMoviesPaginationRequest = z.infer<
  typeof requestMoviesPaginationSchema
>;

export type TRepository = Repository<Movie>;
