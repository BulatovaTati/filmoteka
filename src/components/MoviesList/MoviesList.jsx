import Container from '../Container/Container';
import Section from '../Section/Section';
import MovieItem from './MovieItem/MovieItem';
import s from './MoviesList.module.css';

const MoviesList = ({ movies }) => {
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
