import { QueryFunctionContext, useQuery } from 'react-query';

import { TopAiringResponse, ApiError, TopAiringAnime } from '@common/types/api';
import { api } from '@services';

export const fetchAnime = async (ctx: QueryFunctionContext<string[]>) => {
  const [key, page] = ctx.queryKey;

  const [category, subCategory] = key.split('-');

  const { data } = await api.get<TopAiringResponse>(
    `/${category}/anime/${page}/${subCategory}`
  );

  return data.top;
};

export const usePaginatedCategoriesQuery = (
  category: string,
  subCategory: string,
  page: number,
) =>
  useQuery<TopAiringAnime[], ApiError, TopAiringAnime[], string[]>(
    // habitualmente utiliza-se apenas duas posicoes do array
    [`${category}-${subCategory}`, String(page)],
    fetchAnime,
    {
      keepPreviousData: true,
    }
  );
