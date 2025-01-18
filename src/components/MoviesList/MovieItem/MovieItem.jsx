import { Link } from 'react-router-dom';
import s from './MovieItem.module.css';
import MoviePoster from './MoviePoster';
import MovieCardInfo from './MovieCardInfo';
import MovieOverview from './MovieOverview';

const MovieItem = ({ movie }) => {
  const {
    poster_path,
    title,
    genre_ids,
    release_date,
    first_air_date,
    vote_average,
    name,
    overview,
  } = movie;

  return (
    <li className={s.card__item}>
      <Link className={s.gallery_art}>
        <MoviePoster poster_path={poster_path} title={title} />
        <MovieCardInfo
          genre_ids={genre_ids}
          name={name}
          title={title}
          vote_average={vote_average}
          release_date={release_date}
          first_air_date={first_air_date}
        />
        <MovieOverview overview={overview} />
      </Link>
    </li>
  );
};

export default MovieItem;
