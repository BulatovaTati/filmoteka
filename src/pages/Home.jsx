import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Loader from '../components/Loader/Loader';
import MoviesList from '../components/MoviesList/MoviesList';
import Pagination from '../components/Pagination/Pagination';

import { fetchMovieByGenres, fetchMovieSearcher, getPopularData } from '../redux/movies/operations';
import {
  selectCurrentPage,
  selectError,
  selectIsLoading,
  selectSearchQuery,
} from '../redux/movies/selectors';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';

const Home = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const currentPage = useSelector(selectCurrentPage);
  const error = useSelector(selectError);
  const searchQuery = useSelector(selectSearchQuery);

  useEffect(() => {
    if (searchQuery.trim()) {
      dispatch(fetchMovieSearcher({ searchQuery, page: currentPage }));
    } else {
      dispatch(getPopularData(currentPage));
    }
  }, [dispatch, searchQuery, currentPage]);

  useEffect(() => {
    dispatch(fetchMovieByGenres());
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>Opps</p>}
      {<MoviesList />}
      {!isLoading && <Pagination />}
      <ScrollToTop />
    </>
  );
};

export default Home;
