import s from './MovieItem.module.css';
const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500/';
const noPosterImg = 'https://sd.keepcalms.com/i/sorry-no-picture-available-2.png';

const MoviePoster = ({ poster_path, title }) => {
  return (
    <img
      className={s.card__img}
      src={`${poster_path === null ? noPosterImg : BASE_IMG_URL + poster_path}`}
      alt={title}
      loading="lazy"
    />
  );
};

export default MoviePoster;
