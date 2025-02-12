import BtnList from '../MoviesList/MovieItem/BtnList';
import MovieModalTable from './MovieModalTable';
import TrailerBtn from './TrailerBtn';

import s from './MovieModalMarkup.module.css';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';
const noPosterImg = 'https://sd.keepcalms.com/i/sorry-no-picture-available-2.png';

const MovieModalMarkup = ({ movie }) => {
  const {
    id,
    poster_path,
    title,
    genres,
    popularity,
    vote_count,
    vote_average,
    original_title,
    overview,
    production_companies,
  } = movie;

  const logo =
    Array.isArray(production_companies) && production_companies.length > 0
      ? production_companies.find(log => log.logo_path)?.logo_path
      : null;

  const logoUrl = logo
    ? `https://image.tmdb.org/t/p/w200${logo}`
    : `https://images.placeholders.dev/200x100`;

  return (
    <>
      <div className={s.modal_movie__thumb}>
        <img
          className={s.card__img}
          src={`${poster_path === null ? noPosterImg : BASE_IMG_URL + poster_path}`}
          alt={title}
          loading="lazy"
        />
      </div>
      <div className={s.modal_movie__info_container}>
        <h2 className={s.modal_movie__title}>{title}</h2>
        <MovieModalTable
          genres={genres}
          popularity={popularity}
          vote_count={vote_count}
          vote_average={vote_average}
          original_title={original_title}
        />
        <TrailerBtn movieId={id} />
        <h3 className={s.modal_movie__subtitle}>About</h3>
        <p className={s.modal_movie__text}>{overview}</p>
        <BtnList movie={movie} />
        {logoUrl && <img className={s.production_logo} src={logoUrl} alt="Production logo" />}
      </div>
    </>
  );
};

export default MovieModalMarkup;
