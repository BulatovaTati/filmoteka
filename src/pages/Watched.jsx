import { useSelector } from 'react-redux';
import { selectInWatched } from '../redux/movies/selectors';
import Section from '../components/Section/Section';
import Container from '../components/Container/Container';
import NoMovies from '../components/Pages/Library/NoMovies';
import MoviesLibraryList from '../components/Pages/Library/MoviesLibraryList';

const Watched = () => {
  const watchedMovies = useSelector(selectInWatched);

  if (watchedMovies.length === 0) {
    return <NoMovies />;
  }

  return <MoviesLibraryList queueMovies={watchedMovies} />;
};

export default Watched;
