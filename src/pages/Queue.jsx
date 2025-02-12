import { useSelector } from 'react-redux';
import { selectInQueue } from '../redux/movies/selectors';
import Section from '../components/Section/Section';
import Container from '../components/Container/Container';
import NoMovies from '../components/Pages/Library/NoMovies';

const Queue = () => {
  const queueMovies = useSelector(selectInQueue);

  if (queueMovies.length === 0) {
    return <NoMovies />;
  }

  return (
    <Section>
      <Container>
        <ul>
          {queueMovies?.map(movie => (
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

export default Queue;
