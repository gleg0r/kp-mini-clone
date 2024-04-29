import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { moviesApi } from './api/moviesApi';
import movieDataReducer from './slices/movieSlice';
import { serialssApi } from './api/serialsApi';
import { searchApi } from './api/searchApi';

export const store = configureStore({
  reducer: {
    movieData: movieDataReducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
    [serialssApi.reducerPath]: serialssApi.reducer,
    [searchApi.reducerPath]: searchApi.reducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(moviesApi.middleware).concat(serialssApi.middleware).concat(searchApi.middleware),
    
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch);