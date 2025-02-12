import BtnList from './BtnList';
import s from './MovieItem.module.css';
import { getMovieOverview } from './helpers';

const MovieOverview = ({ movie }) => {
  const movieOverview = getMovieOverview(movie.overview);

  return (
    <>
      <h2 className={s.cards_back__title}>OVERVIEW: </h2>
      <span className={s.description__films}>{movieOverview}</span>
      {movie && <BtnList movie={movie} />}
    </>
  );
};

export default MovieOverview;
