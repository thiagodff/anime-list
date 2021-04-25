import { QueryFunctionContext, useQuery } from 'react-query';

import { TopAiringResponse, ApiError, TopAiringAnime } from '@common/types/api';
import { api } from '@services';

export const fetchAnime = async (ctx: QueryFunctionContext) => {
  const [category, subCategory, page] = (ctx.queryKey as string).split('-');

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
  useQuery<TopAiringAnime[], ApiError>(
    `${category}-${subCategory}-${page}`,
    fetchAnime,
    {
      keepPreviousData: true,
    });
