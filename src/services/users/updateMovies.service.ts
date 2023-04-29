import { AppDataSource } from '../../data-source';
import { Movie } from '../../entities';
import {
  TMovieRequest,
  TMovieUpdate,
  TRepository,
} from '../../interfaces/users.interfaces';
import { requestMovieSchema } from '../../schemas/users.schemas';

export const updateMovieService = async (
  body: TMovieUpdate,
  id: number
): Promise<TMovieRequest> => {
  const movieRepository: TRepository = AppDataSource.getRepository(Movie);

  const bodyDataMovie = await movieRepository.findOneBy({
    id: id,
  });

  const movie = movieRepository.create({
    ...bodyDataMovie,
    ...body,
  });

  await movieRepository.save(movie);
  const updateMovie = requestMovieSchema.parse(movie);

  return updateMovie;
};
