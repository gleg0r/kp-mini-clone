import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ISearch } from '../../core/mocks/apiTypes';

export const searchApi = createApi({
  reducerPath: 'searchApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://api.themoviedb.org/3/',
    prepareHeaders: (headers) => {
      headers.set('accept', 'application/json');
      headers.set('Authorization', import.meta.env.VITE_API_AUTH_TOKEN);
    }
  }),
  tagTypes: ['Search'],
  endpoints: (builder) => ({
    getMultiSearchItems: builder.query<ISearch, string>({
      query: (query) => ({
        url: 'search/multi',
        params: {
          query: query,
          include_adult: false,
          language: 'ru-RU',
          page: 1,
        },
      }),
    }),
  }),
  
});

export const { useGetMultiSearchItemsQuery } = searchApi;
