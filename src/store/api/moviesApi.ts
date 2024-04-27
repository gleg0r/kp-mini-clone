import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ITopMovies, IMovieInfo } from '../../core/mocks/apiTypes';

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://api.themoviedb.org/3/',
    prepareHeaders: (headers) => {
      headers.set('accept', 'application/json');
      headers.set('Authorization', import.meta.env.VITE_API_AUTH_TOKEN);
    }
  }),
  tagTypes: ['TopMovies'],
  endpoints: (builder) => ({
    getTopMovies: builder.query<ITopMovies, number>({
      query: (page) => ({
        url: 'movie/top_rated',
        params: {
          language: 'ru-RU',
          page: page,
        },
      }),
    }),
    getMovieInformation: builder.query<IMovieInfo, number>({
      query: (id) => ({
        url: `movie/${id}`,
        params: {
          language: 'ru-RU'
        }
      })
    }),
  }),
  
});

export const { useGetTopMoviesQuery, useGetMovieInformationQuery } = moviesApi;
