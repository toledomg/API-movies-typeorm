import { z } from 'zod';

export const movieSchema = z.object({
  name: z.string().max(50),
  description: z.string().optional().nullable(),
  duration: z.number().positive(),
  price: z.number().int().positive(),
});

export const requestMovieSchema = movieSchema.extend({ id: z.number() });

export const requestAllMoviesSchema = requestMovieSchema.array();

export const movieUpdateSchema = movieSchema.partial();

export const requestMoviesPaginationSchema = z.object({
  prevPage: z.string().nullable(),
  nextPage: z.string().nullable(),
  count: z.number(),
  movieData: requestAllMoviesSchema,
});
