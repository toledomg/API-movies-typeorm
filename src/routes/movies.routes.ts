import { Router } from 'express';
import { createMovieController } from '../controllers/movies.controller';

export const moviesRoutes: Router = Router();

moviesRoutes.post('', createMovieController);
moviesRoutes.get('');
moviesRoutes.patch('/:id');
moviesRoutes.delete('/:id');
