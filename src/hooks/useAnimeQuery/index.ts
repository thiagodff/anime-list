import { QueryFunctionContext, useQuery } from 'react-query';

import { AnimeResponse, ApiError } from '@common/types/api';
import { api } from '@services';

export const fetchAnime = async (ctx: QueryFunctionContext<string[]>) => {
  const [, animeId] = ctx.queryKey;

  const { data } = await api.get<AnimeResponse>(`/anime/${animeId}`);

  return data;
};

export const useAnimeQuery = (animeId: string) =>
  useQuery<AnimeResponse, ApiError, AnimeResponse, string[]>(
    ['anime', animeId],
    fetchAnime,
    {
      // stale time e o tempo que deve esperar ate realizar um novo fetch
      staleTime: 1000 * 60 * 5, // ficar como stale por 5 minutos
    }
  );
