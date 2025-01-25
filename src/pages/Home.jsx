import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader/Loader';
import MoviesList from '../components/MoviesList/MoviesList';
import { fetchMovieByGenres, getPopularData } from '../redux/movies/operations';
import { useEffect } from 'react';
import { selectError, selectIsLoading } from '../redux/movies/selectors';

const Home = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getPopularData(1));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchMovieByGenres());
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>Opps</p>}
      {<MoviesList />}
      {!isLoading && <MoviesList />}
    </>
  );
};

export default Home;
