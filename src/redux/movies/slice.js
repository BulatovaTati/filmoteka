import { createSlice } from '@reduxjs/toolkit';
import {
  fetchMovieByGenres,
  fetchMovieById,
  getPopularData,
  fetchMovieSearcher,
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
  totalPages: 1,
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
    },
    clearSelectedMovie: state => {
      state.selectedMovie = {};
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getPopularData.pending, state => {
        state.isLoading = true;
      })
      .addCase(getPopularData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload.results;
        state.totalPages = action.payload.totalPages;
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
      })
      .addCase(fetchMovieSearcher.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchMovieSearcher.fulfilled, (state, action) => {
        console.log('action: ', action.payload);
        if (action.payload.length === 0) customToast('warn', 'No matches');

        state.isLoading = false;
        state.error = null;
        state.items = action.payload.results;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchMovieSearcher.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setCurrentPage, setSearchQuery, clearSelectedMovie } = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;
