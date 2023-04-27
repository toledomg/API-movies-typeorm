import { z } from 'zod';
import {
  movieSchema,
  requestAllMoviesSchema,
  requestMovieSchema,
  requestMoviesPaginationSchema,
} from '../schemas/users.schemas';
import { DeepPartial } from 'typeorm';

export type TMovie = z.infer<typeof movieSchema>;

export type TMovieRequest = z.infer<typeof requestMovieSchema>;

export type TMovieUpdate = DeepPartial<TMovie>;

export type TMovieResult = z.infer<typeof requestAllMoviesSchema>;

export type TMoviesPaginationRequest = z.infer<
  typeof requestMoviesPaginationSchema
>;
