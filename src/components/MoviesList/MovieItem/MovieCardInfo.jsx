import s from './MovieItem.module.css';
import { getReleaseYear } from './helpers';
import { MdOutlineMoreHoriz } from 'react-icons/md';

const MovieCardInfo = ({
  title,
  name,
  genreNames,
  release_date,
  first_air_date,
  vote_average,
  openModal,
}) => {
  const year = getReleaseYear(release_date, first_air_date);

  const handleButtonClick = e => {
    e.stopPropagation();
    openModal();
  };

  return (
    <div className={s.card__info}>
      <h2 className={s.card__title}>{title ? title : name}</h2>
      <div className={s.card__decr}>
        <p className={s.card__genre}>
          {genreNames.length > 0
            ? genreNames.splice(0, 2).concat('Others').join(', ')
            : 'no genres'}
          <span> | </span>
        </p>
        <p className={s.card__year}>{year}</p>
        <p className={s.card__rating}>{vote_average ? vote_average.toFixed(1) : 'No rating'}</p>
        <button type="button" className={s.read_more} onClick={handleButtonClick}>
          <MdOutlineMoreHoriz size={25} />
        </button>
      </div>
    </div>
  );
};

export default MovieCardInfo;
