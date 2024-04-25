import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://api.themoviedb.org/3/',
    prepareHeaders: (headers) => {
      headers.set('accept', 'application/json');
      headers.set('Authorization', import.meta.env.VITE_API_AUTH_TOKEN);
    }
  }),
  tagTypes: [],
  endpoints: (builder) => ({
    getTopMovies: builder.query({
      query: (page: number) => `movie/top_rated?language=ru-RU&page/${page}`,
    }),
  }),
});

export const { useGetTopMoviesQuery } = moviesApi;
