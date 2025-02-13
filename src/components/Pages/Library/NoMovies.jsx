import s from './NoMovies.module.css';

const NoMovies = ({ message }) => {
  return (
    <div className={s.noMovies}>
      <span className={s.sorry}> Sorry :(</span>
      <p className={s.str_alert}> {message}</p>
    </div>
  );
};

export default NoMovies;
