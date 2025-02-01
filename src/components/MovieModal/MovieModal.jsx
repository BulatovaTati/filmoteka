import { FaYoutube } from 'react-icons/fa';

import BtnList from '../MoviesList/MovieItem/BtnList';
import MoviePoster from '../MoviesList/MovieItem/MoviePoster';

import s from './MovieModal.module.css';
import styles from '../MoviesList/MovieItem/BtnList.module.css';

const MovieModal = ({ movie }) => {
  const {
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

  const genreNames = genres.map(genre => genre.name || 'Unknown');

  const formatGenres = genreNames => {
    if (genreNames.length === 1) return genreNames[0];
    if (genreNames.length > 3) return [...genreNames.slice(0, 3), 'Others'].join(', ');
    return genreNames.join(', ');
  };

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
        <MoviePoster poster_path={poster_path} title={title} />
      </div>
      <div className={s.modal_movie__info_container}>
        <h2 className={s.modal_movie__title}>{title}</h2>
        <table className={s.modal_movie__table}>
          <tbody className={s.modal_movie__cell}>
            <tr>
              <td className={`${s.modal_movie__cell} ${s.modal_movie__cell_gray_text}`}>
                Vote / Votes
              </td>
              <td className={`${s.modal_movie__cell} ${s.modal_movie__cell_gray_text}`}>
                <span className={`${s.modal_movie__span} ${s.modal_movie__span_vote}`}>
                  {vote_average}
                </span>
                /
                <span className={`${s.modal_movie__span} ${s.modal_movie__span_votes}`}>
                  {vote_count}
                </span>
              </td>
            </tr>
            <tr>
              <td className={`${s.modal_movie__cell} ${s.modal_movie__cell_gray_text}`}>
                Popularity
              </td>
              <td className="modal_movie__cell">{popularity}</td>
            </tr>
            <tr>
              <td className={`${s.modal_movie__cell} ${s.modal_movie__cell_gray_text}`}>
                Original Title
              </td>
              <td className="modal_movie__cell">{original_title}</td>
            </tr>
            <tr>
              <td
                className={`${s.modal_movie__cell} ${s.modal_movie__cell_gray_text} ${s.modal_movie__cell_last_row}`}
              >
                Genre
              </td>
              <td className={`${s.modal_movie__cell} ${s.modal_movie__cell_last_row}`}>
                {genreNames.length > 0 ? formatGenres(genreNames) : 'No genres'}
              </td>
            </tr>
          </tbody>
        </table>
        <button type="button" className={`${styles.button_modal_btn} ${s.button__trailer}`}>
          <FaYoutube className={s.modal_movie__svg_ytb} />
          trailer
        </button>
        <h3 className={s.modal_movie__subtitle}>About</h3>
        <p className={s.modal_movie__text}>{overview}</p>
        <BtnList />
        {logoUrl && <img className={s.production_logo} src={logoUrl} alt="Production logo" />}
      </div>
    </>
  );
};

export default MovieModal;
