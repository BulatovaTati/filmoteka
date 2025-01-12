import { useEffect, useState } from 'react';
import Loader from '../components/Loader/Loader';
import MoviesList from '../components/MoviesList/MoviesList';
import { getPopularData } from '../service/fetchApi';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const data = await getPopularData();
        setMovies(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {isError && <p>Opps</p>}
      {<MoviesList movies={movies} />}
    </>
  );
};

export default Home;
