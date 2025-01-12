import { Link } from 'react-router-dom';
import { getFromStorage } from '../../../service/localStorage';
import s from './MovieItem.module.css';
const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500/';

const noPosterImg = 'https://sd.keepcalms.com/i/sorry-no-picture-available-2.png';

const MovieItem = ({ movie }) => {
  const {
    poster_path,
    title,
    genre_ids,
    genres,
    release_date,
    first_air_date,
    vote_average,
    name,
    overview,
  } = movie;

  return (
    <li className={s.card__item}>
      <Link className={s.gallery_art}>
        <div className={s.card__img_container}>
          <img
            className={s.card__img}
            src={`${poster_path === null ? noPosterImg : BASE_IMG_URL + poster_path}`}
            alt={title}
            loading="lazy"
          />
        </div>

        <div className={s.card__info}>
          <h2 className={s.card__title}>{title ? title : name}</h2>
          <div className={s.card__decr}>
            <p className={s.card__genre}>
              $
              {genres && genres.length > 0
                ? genres.splice(0, 2).concat('Others').join(', ')
                : 'no genres'}
              <span>$ |$ </span>
            </p>
            <p className={s.card__year}>${release_date}</p>
            <p className={s.card__rating}>
              ${vote_average.toFixed(1) ? vote_average.toFixed(1) : 'no rate'}
            </p>
          </div>
        </div>
        <div className={s.cards_back_text}>
          <div>
            <h2 className={s.cards_back__title}>OVERVIEW :</h2>
            <span className={s.description__films}> ${overview} </span>
          </div>
        </div>

        <svg className={s.icon_hand} height="24" width="24" fill="#FFF">
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="m18.19 12.44-3.24-1.62c1.29-1 2.12-2.56 2.12-4.32 0-3.03-2.47-5.5-5.5-5.5s-5.5 2.47-5.5 5.5c0 2.13 1.22 3.98 3 4.89v3.26c-2.15-.46-2.02-.44-2.26-.44-.53 0-1.03.21-1.41.59L4 16.22l5.09 5.09c.43.44 1.03.69 1.65.69h6.3c.98 0 1.81-.7 1.97-1.67l.8-4.71c.22-1.3-.43-2.58-1.62-3.18zm-.35 2.85-.8 4.71h-6.3c-.09 0-.17-.04-.24-.1l-3.68-3.68 4.25.89V6.5c0-.28.22-.5.5-.5s.5.22.5.5v6h1.76l3.46 1.73c.4.2.62.63.55 1.06zM8.07 6.5c0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5c0 .95-.38 1.81-1 2.44V6.5a2.5 2.5 0 0 0-5 0v2.44c-.62-.63-1-1.49-1-2.44z" />
        </svg>
      </Link>
    </li>
  );
};

export default MovieItem;
