import { useSelector } from 'react-redux';
import { selectInQueue } from '../redux/movies/selectors';

import NoMovies from '../components/Pages/Library/NoMovies';
import MoviesLibraryList from '../components/Pages/Library/MoviesLibraryList';

const Queue = () => {
  const queueMovies = useSelector(selectInQueue);

  if (queueMovies.length === 0) {
    return <NoMovies message="No movies have been added yet" />;
  }

  return <MoviesLibraryList queueMovies={queueMovies} />;
};

export default Queue;
