import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchMovieByGenres,
  fetchMovieById,
  getPopularData,
  fetchMovieSearcher,
  fetchUpcomingMovies,
  fetchMovieVideoById,
} from './operations';
import customToast from '../../components/Toast/Toast';

const initialState = {
  upcomingMovies: [],
  items: [],
  genres: [],
  selectedMovie: {},
  trailerKey: '',
  isLoading: false,
  error: null,
  currentPage: 1,
  totalPages: 0,
  searchQuery: '',
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
      state.currentPage = 1;
    },
    clearSelectedMovie: state => {
      state.selectedMovie = {};
    },
    clearTrailerKey: state => {
      state.trailerKey = '';
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getPopularData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload.results;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchMovieByGenres.fulfilled, (state, action) => {
        state.isLoading = false;
        state.genres = action.payload;
      })
      .addCase(fetchMovieById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectedMovie = action.payload;
      })
      .addCase(fetchMovieSearcher.fulfilled, (state, action) => {
        if (action.payload.length === 0) customToast('warn', 'No matches');

        state.isLoading = false;
        state.items = action.payload.results;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchUpcomingMovies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.upcomingMovies = action.payload.results;
      })
      .addCase(fetchMovieVideoById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const trailerKey =
          payload.results.find(video => video.name.includes('Official'))?.key || null;
        state.trailerKey = trailerKey;
      })
      .addMatcher(
        isAnyOf(
          getPopularData.pending,
          fetchMovieByGenres.pending,
          fetchMovieById.pending,
          fetchMovieSearcher.pending,
          fetchUpcomingMovies.pending,
          fetchMovieVideoById.pending
        ),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          getPopularData.rejected,
          fetchMovieByGenres.rejected,
          fetchMovieById.rejected,
          fetchMovieSearcher.rejected,
          fetchUpcomingMovies.rejected,
          fetchMovieVideoById.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const { setCurrentPage, setSearchQuery, clearSelectedMovie, clearTrailerKey } =
  moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;
