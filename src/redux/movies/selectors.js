export const selectIsLoading = state => state.movies.isLoading;
export const selectError = state => state.movies.error;
export const selectMovies = state => state.movies.items;
export const selectGenres = state => state.movies.genres;
export const selectMovie = state => state.movies.selectedMovie;
export const selectTotalPages = state => state.movies.totalPages;
export const selectCurrentPage = state => state.movies.currentPage;
export const selectSearchQuery = state => state.movies.searchQuery;
