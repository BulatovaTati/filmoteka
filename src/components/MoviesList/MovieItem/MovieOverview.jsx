import BtnList from './BtnList';
import s from './MovieItem.module.css';
import { getMovieOverview } from './helpers';

const MovieOverview = ({ overview }) => {
  const movieOverview = getMovieOverview(overview);
  return (
    <div className={s.cards_back_text}>
      <div>
        <h2 className={s.cards_back__title}>OVERVIEW : </h2>
        <span className={s.description__films}>{movieOverview}</span>
      </div>
      <BtnList />
    </div>
  );
};

export default MovieOverview;
