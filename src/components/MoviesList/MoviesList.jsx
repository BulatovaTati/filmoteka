import { useSelector } from 'react-redux';
import Container from '../Container/Container';
import Section from '../Section/Section';
import MovieItem from './MovieItem/MovieItem';
import s from './MoviesList.module.css';
import { selectMovies } from '../../redux/movies/selectors';

const MoviesList = () => {
  const movies = useSelector(selectMovies);

  return (
    <Section>
      <Container>
        <ul className={s.cards__list}>
          {movies.map(movie => (
            <MovieItem key={movie.id} movie={movie} />
          ))}
        </ul>
      </Container>
    </Section>
  );
};

export default MoviesList;
