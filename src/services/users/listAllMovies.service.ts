import { AppDataSource } from '../../data-source';
import { Movie } from '../../entities';
import {
  TMoviesPaginationRequest,
  TRepository,
} from '../../interfaces/users.interfaces';
import { requestAllMoviesSchema } from '../../schemas/users.schemas';

export const listAllMoviesService = async (
  perPage: any,
  page: any,
  sort: any,
  order: any
): Promise<TMoviesPaginationRequest> => {
  const movieRepository: TRepository = AppDataSource.getRepository(Movie);

  const countMovies = await movieRepository.count();

  let take: number = Number(perPage) || 5;
  let skip: number = Number(page) || 1;
  if (take > 5 || take <= 0) take = 5;
  if (skip <= 0) skip = 1;

  const findMovies = await movieRepository.find({
    take,
    skip: take * (skip - 1),
    order: { [sort!]: order },
  });

  const baseUrl = process.env.BASE_URL;
  const PORT = process.env.PORT || 3000;

  const prevPage =
    skip > 1
      ? `${baseUrl}:${PORT}/movies?page=${skip - 1}&perPage=${take}`
      : null;

  const nextPage =
    countMovies / take > skip
      ? `${baseUrl}:${PORT}/movies?page=${skip + 1}&perPage=${take}`
      : null;

  const movies = requestAllMoviesSchema.parse(findMovies);

  const moviesPages = {
    prevPage: prevPage,
    nextPage: nextPage,
    count: countMovies,
    data: movies,
  };

  return moviesPages;
};
