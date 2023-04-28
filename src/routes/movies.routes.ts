import { Router } from 'express';
import {
  createMovieController,
  listMovieController,
} from '../controllers/movies.controller';
import { ensureIdMovieExist } from '../middleware/ensureIdMovieExist.middleware';
import { ensureNameMovieExist } from '../middleware/ensureNameMovieExist.middleware';
import { ensureBodyIsValidMiddleware } from '../middleware/ensure.bodyIsValid.middleware';
import { movieSchema, requestMovieSchema } from '../schemas/users.schemas';

export const moviesRoutes: Router = Router();

moviesRoutes.post(
  '',
  ensureBodyIsValidMiddleware(movieSchema),
  ensureNameMovieExist,
  ensureIdMovieExist,
  createMovieController
);
moviesRoutes.get('', listMovieController);
moviesRoutes.patch('/:id');
moviesRoutes.delete('/:id');
