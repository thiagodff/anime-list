import { QueryFunctionContext, useQuery } from 'react-query';

import { TopAiringResponse, ApiError, TopAiringAnime } from '@common/types/api';
import { api } from '@services';

export const fetchAnime = async (ctx: QueryFunctionContext<Array<string | number>>) => {
  const [key, page] = ctx.queryKey;

  const [category, subCategory] = String(key).split('-');

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
  useQuery<TopAiringAnime[], ApiError, TopAiringAnime[], Array<string | number>>(
    // habitualmente utiliza-se apenas duas posicoes do array
    [`${category}-${subCategory}`, page],
    fetchAnime,
    {
      keepPreviousData: true,
    }
  );
