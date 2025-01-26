import { createSlice } from '@reduxjs/toolkit';
import { fetchMovieByGenres, fetchMovieById, getPopularData } from './operations';

const initialState = {
  upcomingMovies: [],
  items: [],
  genres: [],
  selectedMovie: {},
  isLoading: false,
  error: null,
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getPopularData.pending, state => {
        state.isLoading = true;
      })
      .addCase(getPopularData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(getPopularData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchMovieByGenres.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchMovieByGenres.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.genres = action.payload;
      })
      .addCase(fetchMovieByGenres.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchMovieById.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchMovieById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.selectedMovie = action.payload;
      })
      .addCase(fetchMovieById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const moviesReducer = moviesSlice.reducer;
