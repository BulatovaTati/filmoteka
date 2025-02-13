import { createSelector } from '@reduxjs/toolkit';

export const selectIsLoading = state => state.movies.isLoading;
export const selectError = state => state.movies.error;

export const selectMovies = state => state.movies.items;
export const selectUpcomingMovies = state => state.movies.upcomingMovies;
export const selectGenres = state => state.movies.genres;

export const selectMovie = state => state.movies.selectedMovie;
export const selectTrailerKey = state => state.movies.trailerKey;
export const selectTotalPages = state => state.movies.totalPages;
export const selectCurrentPage = state => state.movies.currentPage;
export const selectSearchQuery = state => state.movies.searchQuery;

export const selectMemoizedMovies = createSelector([selectMovies], movies => movies);

export const selectMemoizedUpcomingMovies = createSelector(
  [selectUpcomingMovies],
  upcomingMovies => upcomingMovies
);

export const selectMemoizedGenres = createSelector([selectGenres], genres => genres);

export const selectInWatched = createSelector(
  state => state.movies.inWatched,
  inWatched => inWatched?.filter(item => item !== null)
);

export const selectInQueue = createSelector(
  state => state.movies.inQueue,
  inQueue => inQueue?.filter(item => item !== null)
);
