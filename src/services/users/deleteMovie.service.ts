import { AppDataSource } from '../../data-source';
import { Movie } from '../../entities';
import { TRepository } from '../../interfaces/users.interfaces';

export const deleteMovieService = async (id: number): Promise<void> => {
  const movieRepository: TRepository = AppDataSource.getRepository(Movie);

  const movie = await movieRepository.findOneBy({
    id: id,
  });

  await movieRepository.remove(movie!);
};
