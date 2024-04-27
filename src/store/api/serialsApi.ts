import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ISerialInfo, ITopSerials } from '../../core/mocks/apiTypes';

export const serialssApi = createApi({
  reducerPath: 'serialsApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://api.themoviedb.org/3/',
    prepareHeaders: (headers) => {
      headers.set('accept', 'application/json');
      headers.set('Authorization', import.meta.env.VITE_API_AUTH_TOKEN);
    }
  }),
  tagTypes: ['TopSerials'],
  endpoints: (builder) => ({
    getTopSerials: builder.query<ITopSerials, number>({
      query: (page) => ({
        url: 'tv/top_rated',
        params: {
          language: 'ru-RU',
          page: page,
        },
      }),
    }),
    getSerialInformation: builder.query<ISerialInfo, number>({
      query: (id) => ({
        url: `tv/${id}`,
        params: {
          language: 'ru-RU'
        }
      })
    }),
  }),
  
});

export const { useGetTopSerialsQuery, useGetSerialInformationQuery } = serialssApi;
