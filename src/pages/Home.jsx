import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Loader from '../components/Loader/Loader';
import MoviesList from '../components/MoviesList/MoviesList';
import Pagination from '../components/Pagination/Pagination';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';
import MovieSwiper from '../components/MovieSwiper/MovieSwiper';

import { fetchMovieByGenres, fetchMovieSearcher, getPopularData } from '../redux/movies/operations';
import {
  selectCurrentPage,
  selectError,
  selectIsLoading,
  selectMemoizedMovies,
  selectSearchQuery,
} from '../redux/movies/selectors';

const Home = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const currentPage = useSelector(selectCurrentPage);
  const error = useSelector(selectError);
  const searchQuery = useSelector(selectSearchQuery);
  const movies = useSelector(selectMemoizedMovies);
  const moviesListRef = useRef(null);

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

  useEffect(() => {
    if (searchQuery) {
      moviesListRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [searchQuery]);

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>Opps</p>}
      <MovieSwiper />
      <div ref={moviesListRef}>
        <MoviesList />
      </div>
      {!isLoading && movies.length !== 0 && <Pagination />}
      <ScrollToTop />
    </>
  );
};

export default Home;
