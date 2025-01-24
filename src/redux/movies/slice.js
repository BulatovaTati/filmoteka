import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  popularMovies: [],
  upcomingMovies: [],
  selectedMovie: {},
  moviesList: [],
  genres: [],
  isLoading: false,
  error: null,
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  extraReducers: builder => {
    builder.addCase();
  },
});

export const moviesReducer = moviesSlice.reducer;
