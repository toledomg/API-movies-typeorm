import { Repository } from 'typeorm';
import { TMovie, TMovieRequest } from '../../interfaces/users.interfaces';
import { Movie } from '../../entities';
import { AppDataSource } from '../../data-source';
import { requestMovieSchema } from '../../schemas/users.schemas';

export const createMoviesService = async (
  userData: TMovie
): Promise<TMovieRequest> => {
  const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie);

  const movie = movieRepository.create(userData);

  await movieRepository.save(movie);

  const newMovie = requestMovieSchema.parse(movie);

  return newMovie;
};
