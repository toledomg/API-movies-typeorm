import { z } from 'zod';

export const movieSchema = z.object({
  name: z.string().max(50),
  description: z.string().nullish(),
  duration: z.number().positive(),
  price: z.number().int().positive(),
});

export const requestMovieSchema = movieSchema.extend({ id: z.number() });

export const movieUpdateSchema = movieSchema.partial();

export const requestAllMoviesSchema = requestMovieSchema.array();

export const requestMoviesPaginationSchema = z.object({
  prevPage: z.string().nullish(),
  nextPage: z.string().nullish(),
  count: z.number(),
  data: requestAllMoviesSchema,
});
