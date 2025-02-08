import { createSlice } from '@reduxjs/toolkit';
import {
  fetchMovieByGenres,
  fetchMovieById,
  getPopularData,
  fetchMovieSearcher,
  fetchUpcomingMovies,
} from './operations';
import customToast from '../../components/Toast/Toast';

const initialState = {
  upcomingMovies: [],
  items: [],
  genres: [],
  selectedMovie: {},
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
  },
  extraReducers: builder => {
    builder
      .addCase(getPopularData.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(getPopularData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload.results;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(getPopularData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchMovieByGenres.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchMovieByGenres.fulfilled, (state, action) => {
        state.isLoading = false;
        state.genres = action.payload;
      })
      .addCase(fetchMovieByGenres.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchMovieById.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchMovieById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectedMovie = action.payload;
      })
      .addCase(fetchMovieById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchMovieSearcher.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchMovieSearcher.fulfilled, (state, action) => {
        if (action.payload.length === 0) customToast('warn', 'No matches');

        state.isLoading = false;
        state.items = action.payload.results;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchMovieSearcher.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchUpcomingMovies.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUpcomingMovies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.upcomingMovies = action.payload.results;
      })
      .addCase(fetchUpcomingMovies.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setCurrentPage, setSearchQuery, clearSelectedMovie } = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;
