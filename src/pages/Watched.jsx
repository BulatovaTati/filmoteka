import { useSelector } from 'react-redux';
import { selectInWatched } from '../redux/movies/selectors';
import Section from '../components/Section/Section';
import Container from '../components/Container/Container';
import NoMovies from '../components/Pages/Library/NoMovies';

const Watched = () => {
  const watchedMovies = useSelector(selectInWatched);

  if (watchedMovies.length === 0) {
    return <NoMovies />;
  }

  return (
    <Section>
      <Container>
        <ul>
          {watchedMovies?.map(movie => (
            <li key={movie.id}>
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
              <h3>{movie.title}</h3>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
};

export default Watched;
