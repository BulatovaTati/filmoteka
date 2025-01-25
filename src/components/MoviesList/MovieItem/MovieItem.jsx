import { Link } from 'react-router-dom';
import s from './MovieItem.module.css';
import MoviePoster from './MoviePoster';
import MovieCardInfo from './MovieCardInfo';
import MovieOverview from './MovieOverview';
import { selectGenres } from '../../../redux/movies/selectors';
import { useSelector } from 'react-redux';

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

  const genres = useSelector(selectGenres);

  const genreNames = genre_ids.map(id => {
    const genre = genres.find(g => g.id === id);
    return genre ? genre.name : 'Unknown';
  });

  return (
    <li className={s.card__item}>
      <Link className={s.gallery_art}>
        <MoviePoster poster_path={poster_path} title={title} />
        <MovieCardInfo
          genreNames={genreNames}
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
