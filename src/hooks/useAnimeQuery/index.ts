import { QueryFunctionContext, useQuery } from 'react-query';

import { AnimeResponse, ApiError } from '@common/types/api';
import { api } from '@services';

export const fetchAnime = async (ctx: QueryFunctionContext) => {
  const [, animeId] = (ctx.queryKey as string).split('-');

  const { data } = await api.get<AnimeResponse>(`/anime/${animeId}`);

  return data;
};

export const useAnimeQuery = (animeId: string) =>
  useQuery<AnimeResponse, ApiError>(`anime-${animeId}`, fetchAnime, {
    // stale time e o tempo que deve esperar ate realizar um novo fetch
    staleTime: Infinity,
  });
