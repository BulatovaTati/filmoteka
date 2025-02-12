import s from './NoMovies.module.css';

const NoMovies = () => {
  return (
    <div className={s.noMovies}>
      <span className={s.sorry}> Sorry :(</span>
      <p className={s.str_alert}>No movies have been added yet</p>
    </div>
  );
};

export default NoMovies;
