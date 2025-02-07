import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader/Loader';
import MoviesList from '../components/MoviesList/MoviesList';
import { fetchMovieByGenres, fetchMovieSearcher, getPopularData } from '../redux/movies/operations';
import { useCallback, useEffect } from 'react';
import {
  selectCurrentPage,
  selectError,
  selectIsLoading,
  selectSearchQuery,
} from '../redux/movies/selectors';
import TuiPagination from '../components/TuiPagination/TuiPagination';

const Home = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const currentPage = useSelector(selectCurrentPage);
  const error = useSelector(selectError);
  const searchQuery = useSelector(selectSearchQuery);

  const memoizedGetPopularData = useCallback(() => {
    dispatch(getPopularData(currentPage));
  }, [dispatch, currentPage]);

  useEffect(() => {
    if (searchQuery.trim()) {
      dispatch(fetchMovieSearcher({ searchQuery, page: currentPage }));
    } else {
      memoizedGetPopularData();
    }
  }, [dispatch, searchQuery, currentPage, memoizedGetPopularData]);

  useEffect(() => {
    dispatch(fetchMovieByGenres());
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>Opps</p>}
      {<MoviesList />}
      <TuiPagination />
    </>
  );
};

export default Home;
