import { createSlice } from '@reduxjs/toolkit';
import { IMovieState, MovieAction } from '../../core/mocks/movieSliceTypes';

const initialState: IMovieState = {
  movieId: 0,
};

const movieData = createSlice({
  name: 'movieData',
  initialState,
  reducers: {
    setMovieData: (state, action: MovieAction) => {
      state.movieId = action.payload;
    },
  }
});

export const { setMovieData }  = movieData.actions;
export default movieData.reducer;