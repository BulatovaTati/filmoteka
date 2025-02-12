import { useSelector } from 'react-redux';
import { selectInQueue } from '../redux/movies/selectors';
import Section from '../components/Section/Section';
import Container from '../components/Container/Container';
import NoMovies from '../components/Pages/Library/NoMovies';
import MoviesLibraryList from '../components/Pages/Library/MoviesLibraryList';

const Queue = () => {
  const queueMovies = useSelector(selectInQueue);

  if (queueMovies.length === 0) {
    return <NoMovies />;
  }

  return <MoviesLibraryList queueMovies={queueMovies} />;
};

export default Queue;
